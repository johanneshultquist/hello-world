require('dotenv').config();

const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ---------------------------------------------------------------------------
// Pack share-code storage (file-backed for simplicity; swap for DB at scale)
// ---------------------------------------------------------------------------
const PACKS_FILE = path.join(__dirname, 'packs.json');

function loadPacks() {
  try {
    return JSON.parse(fs.readFileSync(PACKS_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function savePacks(packs) {
  fs.writeFileSync(PACKS_FILE, JSON.stringify(packs, null, 2));
}

// ---------------------------------------------------------------------------
// Favorites storage (cloud word list)
// ---------------------------------------------------------------------------
const FAVORITES_FILE = path.join(__dirname, 'favorites.json');

function loadFavorites() {
  try {
    return JSON.parse(fs.readFileSync(FAVORITES_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveFavorites(favs) {
  fs.writeFileSync(FAVORITES_FILE, JSON.stringify(favs, null, 2));
}

// ---------------------------------------------------------------------------
// POST /api/generate-words
// Body: { categories: string[], difficulty: 'easy'|'medium'|'hard', adultMode: boolean }
// Returns: { words: Array<{ word, hint, category, difficulty }> }
// ---------------------------------------------------------------------------
app.post('/api/generate-words', async (req, res) => {
  const { categories = [], difficulty = 'medium', adultMode = false } = req.body;

  if (!categories.length) {
    return res.status(400).json({ error: 'At least one category is required.' });
  }

  const contentPolicy = adultMode
    ? 'Adult/mature content is permitted. Words may involve adult themes appropriate for a party game (e.g. drinking culture, risqué scenarios). Keep it fun, not offensive or explicit.'
    : 'All content must be family-friendly and appropriate for all ages. Avoid any mature, violent, or offensive themes.';

  const difficultyGuide = {
    easy:   'Common, widely-known items. The hint should be a vague property, feeling, or surprising fact — NOT a subcategory label. BAD: word="Pizza", hint="Italian food". GOOD: word="Pizza", hint="People have strong opinions about it".',
    medium: 'Moderately specific items. The hint should be an abstract association that could fit multiple things. BAD: word="Risotto", hint="Rice dish". GOOD: word="Risotto", hint="Takes patience to get right".',
    hard:   'Specific or niche items. The hint should be cryptic — a consequence, a single evocative phrase, or an unexpected fact. BAD: word="Époisses", hint="French cheese". GOOD: word="Époisses", hint="Banned from public transport".',
  };

  const prompt = `You are generating content for the pass-and-play party game "Imposter Who?".

Rules:
- Generate exactly 40 word/hint pairs spread across the requested categories.
- Each "word" is the secret word that most players see.
- Each "hint" is what the IMPOSTER sees instead — vague enough that they cannot immediately deduce the word, but enough that they can bluff.
- CRITICAL HINT RULE: Hints must NEVER be a subcategory label or type description (e.g. NOT "Italian food", NOT "Drinking game", NOT "Board game"). Instead use a vague property, feeling, social context, or surprising fact that could apply to several things in the space.
- ${contentPolicy}
- Difficulty: ${difficulty}. ${difficultyGuide[difficulty]}
- Vary the words — avoid obvious duplicates or overly similar entries.

Requested categories: ${categories.join(', ')}

Return ONLY a valid JSON array with no other text, markdown, or explanation:
[
  { "word": "...", "hint": "...", "category": "...", "difficulty": "${difficulty}" },
  ...
]`;

  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].text.trim();
    // Strip any accidental markdown fences
    const json = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    const words = JSON.parse(json);

    if (!Array.isArray(words) || words.length === 0) {
      throw new Error('Unexpected response format from AI.');
    }

    res.json({ words });
  } catch (err) {
    console.error('Word generation error:', err.message);
    res.status(500).json({ error: 'Word generation failed. The app will use the offline word list.' });
  }
});

// ---------------------------------------------------------------------------
// POST /api/pack/export
// Body: { pack: { name, words: [{ word, hint }] } }
// Returns: { code: string }   (8-char uppercase hex share code)
// ---------------------------------------------------------------------------
app.post('/api/pack/export', (req, res) => {
  const { pack } = req.body;

  if (!pack || !pack.name || !Array.isArray(pack.words) || pack.words.length < 10) {
    return res.status(400).json({ error: 'Pack must have a name and at least 10 words.' });
  }

  const packs = loadPacks();
  const code = crypto.randomBytes(4).toString('hex').toUpperCase(); // 8 chars

  packs[code] = {
    name: pack.name,
    words: pack.words,
    created: new Date().toISOString(),
  };

  savePacks(packs);
  res.json({ code });
});

// ---------------------------------------------------------------------------
// GET /api/pack/:code
// Returns: { pack: { name, words } }
// ---------------------------------------------------------------------------
app.get('/api/pack/:code', (req, res) => {
  const packs = loadPacks();
  const pack = packs[req.params.code.toUpperCase()];

  if (!pack) {
    return res.status(404).json({ error: 'Pack not found. Check the code and try again.' });
  }

  res.json({ pack });
});

// ---------------------------------------------------------------------------
// GET /api/favorites
// Returns: { favorites: [{ word, hint }] }
// ---------------------------------------------------------------------------
app.get('/api/favorites', (_req, res) => {
  res.json({ favorites: loadFavorites() });
});

// ---------------------------------------------------------------------------
// POST /api/favorites
// Body: { word, hint }
// ---------------------------------------------------------------------------
app.post('/api/favorites', (req, res) => {
  const { word, hint } = req.body;
  if (!word || !hint) return res.status(400).json({ error: 'word and hint required' });
  const favs = loadFavorites();
  if (!favs.find(f => f.word === word)) {
    favs.push({ word, hint });
    saveFavorites(favs);
  }
  res.json({ ok: true });
});

// ---------------------------------------------------------------------------
// DELETE /api/favorites
// Body: { word }
// ---------------------------------------------------------------------------
app.delete('/api/favorites', (req, res) => {
  const { word } = req.body;
  if (!word) return res.status(400).json({ error: 'word required' });
  saveFavorites(loadFavorites().filter(f => f.word !== word));
  res.json({ ok: true });
});

// ---------------------------------------------------------------------------
// Catch-all → serve the SPA
// ---------------------------------------------------------------------------
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Imposter Who? server running at http://localhost:${PORT}`);
});
