/* ── Imposter Who? — Frontend Game Logic ─────────────────────────────────── */
'use strict';

const App = (() => {
  // ── State ────────────────────────────────────────────────────────────────

  let state = {
    // settings (persisted to localStorage)
    adultEnabled: false,
    aiEnabled: true,

    // players
    players: [],

    // category selection: { [categoryName]: difficulty }
    selectedCategories: {},

    // session word pool (cached for the session)
    wordPool: null,

    // current game round
    currentWord: null,       // { word, hint, category, difficulty }
    imposterIndex: -1,
    currentPlayerIndex: 0,

    // custom packs: [{ id, name, words: [{ word, hint }] }]
    customPacks: [],

    // pack editor state
    editingPackId: null,
    editingPackWords: [],
    wordModalEditIndex: -1,  // -1 = add new
  };

  // ── Persistence ──────────────────────────────────────────────────────────

  function loadSettings() {
    try {
      const s = JSON.parse(localStorage.getItem('iw_settings') || '{}');
      state.adultEnabled = !!s.adultEnabled;
      state.aiEnabled    = s.aiEnabled !== false; // default true
    } catch { /* ignore */ }
  }

  function saveSettings() {
    localStorage.setItem('iw_settings', JSON.stringify({
      adultEnabled: state.adultEnabled,
      aiEnabled:    state.aiEnabled,
    }));
  }

  function loadPacks() {
    try {
      state.customPacks = JSON.parse(localStorage.getItem('iw_packs') || '[]');
    } catch { state.customPacks = []; }
  }

  function savePacks() {
    localStorage.setItem('iw_packs', JSON.stringify(state.customPacks));
  }

  // ── Screen navigation ────────────────────────────────────────────────────

  const screenHistory = [];

  const screenOnEnter = {
    packs: () => renderPacksLibrary(),
  };

  function showScreen(id) {
    const current = document.querySelector('.screen.active');
    if (current) {
      current.classList.remove('active');
      current.classList.add('exit');
      setTimeout(() => current.classList.remove('exit'), 300);
    }
    const next = document.getElementById(`screen-${id}`);
    if (next) {
      next.classList.add('active');
      screenHistory.push(id);
      if (screenOnEnter[id]) screenOnEnter[id]();
    }
  }

  function back() {
    if (screenHistory.length > 1) {
      screenHistory.pop();
      showScreenDirect(screenHistory[screenHistory.length - 1]);
    }
  }

  function showScreenDirect(id) {
    const current = document.querySelector('.screen.active');
    if (current) {
      current.classList.remove('active');
      current.classList.add('exit');
      setTimeout(() => current.classList.remove('exit'), 300);
    }
    const next = document.getElementById(`screen-${id}`);
    if (next) {
      next.classList.add('active');
      if (screenOnEnter[id]) screenOnEnter[id]();
    }
  }

  // ── Toast ────────────────────────────────────────────────────────────────

  let toastTimer = null;

  function toast(message, duration = 2800) {
    const el = document.getElementById('toast');
    el.textContent = message;
    el.classList.remove('hidden');
    el.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove('visible');
      el.classList.add('hidden');
    }, duration);
  }

  // ── Settings ─────────────────────────────────────────────────────────────

  function syncSettingsUI() {
    document.getElementById('toggle-adult').checked = state.adultEnabled;
    document.getElementById('toggle-ai').checked    = state.aiEnabled;
  }

  function toggleAdultRequest(checked) {
    if (checked && !state.adultEnabled) {
      // Show age gate; revert toggle optimistically
      document.getElementById('toggle-adult').checked = false;
      document.getElementById('modal-age-gate').classList.remove('hidden');
    } else if (!checked) {
      state.adultEnabled = false;
      saveSettings();
      renderCategories();
    }
  }

  function confirmAge(confirmed) {
    document.getElementById('modal-age-gate').classList.add('hidden');
    if (confirmed) {
      state.adultEnabled = true;
      document.getElementById('toggle-adult').checked = true;
      saveSettings();
      renderCategories();
      toast('Adult categories unlocked 🔞');
    }
  }

  function toggleAI(checked) {
    state.aiEnabled = checked;
    saveSettings();
  }

  // ── Players ───────────────────────────────────────────────────────────────

  function renderPlayers() {
    const list = document.getElementById('player-list');
    list.innerHTML = '';

    state.players.forEach((name, i) => {
      const row = document.createElement('div');
      row.className = 'player-row';
      row.innerHTML = `
        <input
          type="text"
          value="${escapeAttr(name)}"
          placeholder="Player ${i + 1}"
          maxlength="30"
          inputmode="text"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          oninput="App._updatePlayerName(${i}, this.value)"
        />
        <button class="btn-icon" onclick="App._removePlayer(${i})">✕</button>
      `;
      list.appendChild(row);
    });

    updatePlayersNextBtn();
  }

  function addPlayer() {
    if (state.players.length >= 20) { toast('Maximum 20 players'); return; }
    state.players.push('');
    renderPlayers();
    // Focus the last input
    setTimeout(() => {
      const inputs = document.querySelectorAll('#player-list input');
      if (inputs.length) inputs[inputs.length - 1].focus();
    }, 50);
  }

  function _updatePlayerName(index, value) {
    state.players[index] = value;
    updatePlayersNextBtn();
  }

  function _removePlayer(index) {
    state.players.splice(index, 1);
    renderPlayers();
  }

  function updatePlayersNextBtn() {
    const valid = state.players.filter(p => p.trim().length > 0);
    const btn = document.getElementById('btn-next-categories');
    btn.disabled = valid.length < 3;

    const hint = document.querySelector('#screen-players .section-hint');
    if (hint) {
      if (valid.length < 3) hint.textContent = `Add ${3 - valid.length} more player${3 - valid.length === 1 ? '' : 's'} to continue`;
      else hint.textContent = `${valid.length} players ready`;
    }
  }

  function goToCategories() {
    // Commit non-empty names
    state.players = state.players.filter(p => p.trim().length > 0);
    if (state.players.length < 3) { toast('Need at least 3 players'); return; }
    renderCategories();
    showScreen('categories');
  }

  // ── Categories ────────────────────────────────────────────────────────────

  function renderCategories() {
    const list = document.getElementById('categories-list');
    list.innerHTML = '';

    // Built-in categories
    const builtIn = Object.entries(CATEGORY_META);
    const customEntries = state.customPacks.map(p => [p.name, { icon: '📦', adult: false, isCustom: true }]);
    const all = [...builtIn, ...customEntries];

    all.forEach(([name, meta]) => {
      if (meta.adult && !state.adultEnabled) return; // hide adult if not unlocked

      const isSelected = !!state.selectedCategories[name];
      const difficulty = state.selectedCategories[name] || 'medium';

      const row = document.createElement('div');
      row.className = `category-row${isSelected ? ' selected' : ''}`;
      row.dataset.category = name;

      row.innerHTML = `
        <div class="category-header" onclick="App._toggleCategory('${escapeName(name)}')">
          <span class="category-icon">${meta.icon}</span>
          <span class="category-name">${escapeHtml(name)}</span>
          ${meta.adult ? '<span class="category-adult-badge">18+</span>' : ''}
          <span class="category-check">${isSelected ? '✓' : ''}</span>
        </div>
        <div class="category-difficulty" aria-label="Difficulty for ${escapeHtml(name)}">
          ${['easy','medium','hard'].map(d => `
            <button
              class="diff-btn${isSelected && difficulty === d ? ` active-${d}` : ''}"
              onclick="App._setDifficulty('${escapeName(name)}', '${d}', event)"
            >${d.charAt(0).toUpperCase() + d.slice(1)}</button>
          `).join('')}
        </div>
      `;

      list.appendChild(row);
    });

    updateStartBtn();
  }

  function _toggleCategory(name) {
    if (state.selectedCategories[name]) {
      delete state.selectedCategories[name];
    } else {
      state.selectedCategories[name] = 'medium';
    }
    renderCategories();
  }

  function _setDifficulty(name, difficulty, event) {
    event.stopPropagation();
    if (!state.selectedCategories[name]) state.selectedCategories[name] = difficulty;
    state.selectedCategories[name] = difficulty;
    renderCategories();
  }

  function updateStartBtn() {
    const btn = document.getElementById('btn-start-game');
    btn.disabled = Object.keys(state.selectedCategories).length === 0;
  }

  // ── Word generation ───────────────────────────────────────────────────────

  async function startGame() {
    const categories = Object.keys(state.selectedCategories);
    if (!categories.length) { toast('Select at least one category'); return; }

    // Determine majority difficulty (first category's difficulty as representative)
    const difficulty = state.selectedCategories[categories[0]];

    showScreen('loading');

    let words = null;

    if (state.aiEnabled) {
      try {
        const adultCategories = categories.filter(c => {
          const meta = CATEGORY_META[c];
          return meta && meta.adult;
        });
        const hasAdult = adultCategories.length > 0;

        const res = await fetch('/api/generate-words', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categories, difficulty, adultMode: hasAdult }),
          signal: AbortSignal.timeout(15000),
        });

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.words) && data.words.length > 0) {
            words = data.words;
          }
        }
      } catch (err) {
        console.warn('AI generation failed, using offline fallback:', err.message);
      }
    }

    if (!words) {
      // Offline fallback: mix static words + custom pack words
      words = buildStaticPool(categories, difficulty);

      // Inject custom pack words for any selected custom packs
      categories.forEach(cat => {
        const pack = state.customPacks.find(p => p.name === cat);
        if (pack) {
          pack.words.forEach(w => words.push({ ...w, category: cat, difficulty }));
        }
      });

      words = words.sort(() => Math.random() - 0.5);
      if (!state.aiEnabled) {
        // Tiny delay for UX consistency
        await new Promise(r => setTimeout(r, 400));
      }
    }

    // Cache for session
    state.wordPool = words;

    // Pick a single word for this round
    state.currentWord = words[Math.floor(Math.random() * words.length)];

    // Assign imposter
    state.imposterIndex = Math.floor(Math.random() * state.players.length);
    state.currentPlayerIndex = 0;

    showPassTo();
  }

  // ── Game flow ─────────────────────────────────────────────────────────────

  function showPassTo() {
    const playerName = state.players[state.currentPlayerIndex];
    document.getElementById('pass-player-name').textContent = playerName;
    showScreen('pass-to');
  }

  function showReveal() {
    const isImposter = state.currentPlayerIndex === state.imposterIndex;
    const playerName = state.players[state.currentPlayerIndex];
    const { word, hint, category } = state.currentWord;

    document.getElementById('reveal-player-name').textContent = playerName;

    const back = document.getElementById('reveal-back');
    back.innerHTML = isImposter
      ? `<span class="reveal-imposter-badge">YOU ARE THE IMPOSTER</span>
         <span class="reveal-word-label">Your hint</span>
         <span class="reveal-word-main">${escapeHtml(hint)}</span>
         <span class="reveal-word-category">${escapeHtml(category)}</span>`
      : `<span class="reveal-word-label">Your word</span>
         <span class="reveal-word-main">${escapeHtml(word)}</span>
         <span class="reveal-word-category">${escapeHtml(category)}</span>`;

    back.classList.add('hidden');
    showScreen('reveal');
    attachRevealHold();
  }

  function attachRevealHold() {
    const card = document.getElementById('reveal-card');

    // Remove previous listeners by cloning the card
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);

    // Query front/back from the cloned card so refs aren't stale
    const front = newCard.querySelector('.reveal-front');
    const back  = newCard.querySelector('.reveal-back');

    let holding = false;

    function reveal() {
      if (holding) return;
      holding = true;
      back.classList.remove('hidden');
      front.style.opacity = '0';
    }

    function hide() {
      holding = false;
      back.classList.add('hidden');
      front.style.opacity = '1';
    }

    newCard.addEventListener('mousedown',  reveal);
    newCard.addEventListener('mouseup',    hide);
    newCard.addEventListener('mouseleave', hide);
    newCard.addEventListener('touchstart', (e) => { e.preventDefault(); reveal(); }, { passive: false });
    newCard.addEventListener('touchend',   (e) => { e.preventDefault(); hide();   }, { passive: false });
  }

  function doneReveal() {
    state.currentPlayerIndex++;
    if (state.currentPlayerIndex < state.players.length) {
      showPassTo();
    } else {
      // All players seen their card → discussion
      const categoryNames = Object.keys(state.selectedCategories);
      document.getElementById('discussion-player-count').textContent = state.players.length;
      document.getElementById('discussion-categories').textContent   = categoryNames.join(', ');
      showScreen('discussion');
    }
  }

function revealAnswer() {
    const imposterName = state.players[state.imposterIndex];
    const { word, hint } = state.currentWord;

    document.getElementById('result-icon').textContent     = '🔍';
    document.getElementById('result-title').textContent    = 'Word Revealed';
    document.getElementById('result-subtitle').textContent = `${imposterName} was the imposter.`;
    document.getElementById('result-word').textContent     = word;
    document.getElementById('result-imposter').textContent = imposterName;
    document.getElementById('result-hint').textContent     = hint;

    showScreen('result');
  }

  function playAgain() {
    // Keep players & categories, generate a new word
    state.currentPlayerIndex = 0;
    state.imposterIndex = Math.floor(Math.random() * state.players.length);

    if (state.wordPool && state.wordPool.length > 1) {
      const current = state.currentWord;
      const pool    = state.wordPool.filter(w => w.word !== current.word);
      state.currentWord = pool[Math.floor(Math.random() * pool.length)];
    }

    showPassTo();
  }

  // ── Custom Packs ──────────────────────────────────────────────────────────

  function renderPacksLibrary() {
    const list  = document.getElementById('packs-list');
    const empty = document.getElementById('packs-empty');
    list.innerHTML = '';

    if (!state.customPacks.length) {
      empty.classList.remove('hidden');
      return;
    }

    empty.classList.add('hidden');

    state.customPacks.forEach(pack => {
      const card = document.createElement('div');
      card.className = 'pack-card';
      card.innerHTML = `
        <div class="pack-card-info">
          <div class="pack-word-word">${escapeHtml(pack.name)}</div>
          <div class="pack-card-count">${pack.words.length} word${pack.words.length !== 1 ? 's' : ''}</div>
        </div>
        <div class="pack-card-actions">
          <button class="btn-icon" title="Edit" onclick="App.editPack('${pack.id}')">✏️</button>
          <button class="btn-icon" title="Delete" onclick="App.deletePack('${pack.id}')">🗑️</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function createNewPack() {
    state.editingPackId    = null;
    state.editingPackWords = [];
    document.getElementById('pack-create-heading').textContent = 'New Pack';
    document.getElementById('pack-name-input').value = '';
    renderPackWords();
    updatePackSaveBtn();
    showScreen('pack-create');
  }

  function editPack(id) {
    const pack = state.customPacks.find(p => p.id === id);
    if (!pack) return;
    state.editingPackId    = id;
    state.editingPackWords = pack.words.map(w => ({ ...w }));
    document.getElementById('pack-create-heading').textContent = 'Edit Pack';
    document.getElementById('pack-name-input').value = pack.name;
    renderPackWords();
    updatePackSaveBtn();
    showScreen('pack-create');
  }

  function deletePack(id) {
    state.customPacks = state.customPacks.filter(p => p.id !== id);
    savePacks();
    renderPacksLibrary();
    toast('Pack deleted');
  }

  function renderPackWords() {
    const list = document.getElementById('pack-words-list');
    list.innerHTML = '';
    state.editingPackWords.forEach((w, i) => {
      const row = document.createElement('div');
      row.className = 'pack-word-row';
      row.innerHTML = `
        <div class="pack-word-text">
          <div class="pack-word-word">${escapeHtml(w.word)}</div>
          <div class="pack-word-hint">Hint: ${escapeHtml(w.hint)}</div>
        </div>
        <button class="btn-icon" onclick="App._editPackWord(${i})">✏️</button>
        <button class="btn-icon" onclick="App._removePackWord(${i})">✕</button>
      `;
      list.appendChild(row);
    });

    const hint = document.getElementById('pack-word-count-hint');
    const count = state.editingPackWords.length;
    hint.textContent = count < 10
      ? `${count} word${count !== 1 ? 's' : ''} — minimum 10 to save`
      : `${count} words`;
  }

  function addWordToPack() {
    state.wordModalEditIndex = -1;
    document.getElementById('word-modal-title').textContent = 'Add Word';
    document.getElementById('word-modal-word').value = '';
    document.getElementById('word-modal-hint').value = '';
    document.getElementById('modal-word-entry').classList.remove('hidden');
    setTimeout(() => document.getElementById('word-modal-word').focus(), 100);
  }

  function _editPackWord(index) {
    const w = state.editingPackWords[index];
    state.wordModalEditIndex = index;
    document.getElementById('word-modal-title').textContent = 'Edit Word';
    document.getElementById('word-modal-word').value = w.word;
    document.getElementById('word-modal-hint').value = w.hint;
    document.getElementById('modal-word-entry').classList.remove('hidden');
    setTimeout(() => document.getElementById('word-modal-word').focus(), 100);
  }

  function _removePackWord(index) {
    state.editingPackWords.splice(index, 1);
    renderPackWords();
    updatePackSaveBtn();
  }

  function confirmWordEntry() {
    const word = document.getElementById('word-modal-word').value.trim();
    const hint = document.getElementById('word-modal-hint').value.trim();
    if (!word) { toast('Enter a word'); return; }
    if (!hint) { toast('Enter a hint for the imposter'); return; }

    if (state.wordModalEditIndex >= 0) {
      state.editingPackWords[state.wordModalEditIndex] = { word, hint };
    } else {
      state.editingPackWords.push({ word, hint });
    }

    closeWordModal();
    renderPackWords();
    updatePackSaveBtn();
  }

  function closeWordModal() {
    document.getElementById('modal-word-entry').classList.add('hidden');
  }

  function onPackNameChange() {
    updatePackSaveBtn();
  }

  function updatePackSaveBtn() {
    const name  = document.getElementById('pack-name-input').value.trim();
    const count = state.editingPackWords.length;
    const ok    = name.length > 0 && count >= 10;
    document.getElementById('btn-save-pack').disabled   = !ok;
    document.getElementById('btn-export-pack').disabled = !ok;
  }

  function savePack() {
    const name = document.getElementById('pack-name-input').value.trim();
    if (!name) { toast('Give the pack a name'); return; }
    if (state.editingPackWords.length < 10) { toast('Add at least 10 words'); return; }

    if (state.editingPackId) {
      const pack = state.customPacks.find(p => p.id === state.editingPackId);
      if (pack) { pack.name = name; pack.words = [...state.editingPackWords]; }
    } else {
      state.customPacks.push({
        id:    Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name,
        words: [...state.editingPackWords],
      });
    }

    savePacks();
    toast('Pack saved!');
    showScreen('packs');
    renderPacksLibrary();
  }

  function savePackAndBack() {
    // If there's unsaved content, just go back without saving
    back();
    renderPacksLibrary();
  }

  async function exportPack() {
    const name = document.getElementById('pack-name-input').value.trim();
    if (state.editingPackWords.length < 10 || !name) { toast('Save the pack first'); return; }

    try {
      const res = await fetch('/api/pack/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pack: { name, words: state.editingPackWords } }),
        signal: AbortSignal.timeout(8000),
      });

      if (!res.ok) throw new Error();
      const { code } = await res.json();

      document.getElementById('share-modal-title').textContent = 'Pack exported!';
      document.getElementById('share-modal-body').textContent  = 'Share this code so friends can import your pack:';
      document.getElementById('share-code-display').textContent = code;
      document.getElementById('modal-share-code').classList.remove('hidden');

    } catch {
      toast('Export failed — check your connection');
    }
  }

  async function promptImportPack() {
    const code = prompt('Enter the 8-character pack code:');
    if (!code || !code.trim()) return;

    try {
      const res = await fetch(`/api/pack/${code.trim().toUpperCase()}`, {
        signal: AbortSignal.timeout(8000),
      });

      if (!res.ok) { toast('Pack not found — check the code'); return; }
      const { pack } = await res.json();

      state.customPacks.push({
        id:    Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name:  pack.name,
        words: pack.words,
      });

      savePacks();
      renderPacksLibrary();
      toast(`"${pack.name}" imported!`);

    } catch {
      toast('Import failed — check your connection');
    }
  }

  function closeShareModal() {
    document.getElementById('modal-share-code').classList.add('hidden');
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Escape single quotes for inline onclick strings
  function escapeName(str) {
    return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  // ── Init ──────────────────────────────────────────────────────────────────

  function init() {
    loadSettings();
    loadPacks();
    syncSettingsUI();

    // Seed players with 4 empty slots for UX
    state.players = ['', '', '', ''];
    renderPlayers();

    // Show home
    screenHistory.push('home');
  }

  // ── Public API ────────────────────────────────────────────────────────────

  return {
    // Navigation
    showScreen,
    back,

    // Settings
    toggleAdultRequest,
    confirmAge,
    toggleAI,

    // Players
    addPlayer,
    _updatePlayerName,
    _removePlayer,
    goToCategories,

    // Categories
    _toggleCategory,
    _setDifficulty,

    // Game
    startGame,
    showReveal,
    doneReveal,
    revealAnswer,
    playAgain,

    // Custom packs
    renderPacksLibrary,
    createNewPack,
    editPack,
    deletePack,
    addWordToPack,
    _editPackWord,
    _removePackWord,
    confirmWordEntry,
    closeWordModal,
    onPackNameChange,
    savePack,
    savePackAndBack,
    exportPack,
    promptImportPack,
    closeShareModal,

    init,
  };
})();

// Kick-off
window.addEventListener('DOMContentLoaded', () => App.init());
