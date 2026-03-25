// static-words.js — Offline fallback word lists for Imposter Who?
// Each entry: { word, hint, difficulty }
// RULE: word must be a single word — no spaces, no hyphens
// hint = what the imposter sees (vague property/feeling, never a subcategory label)

const STATIC_WORDS = {
  // ── Standard categories ────────────────────────────────────────────────────

  'Food & Drink': [
    // easy
    { word: 'Pizza',       hint: 'People have strong opinions about it', difficulty: 'easy' },
    { word: 'Coffee',      hint: 'A morning ritual',                     difficulty: 'easy' },
    { word: 'Sushi',       hint: 'Freshness matters a lot',              difficulty: 'easy' },
    { word: 'Chocolate',   hint: 'A comfort item',                       difficulty: 'easy' },
    { word: 'Burger',      hint: 'Comes in endless variations',          difficulty: 'easy' },
    { word: 'Beer',        hint: 'Best enjoyed with friends',            difficulty: 'easy' },
    { word: 'Pasta',       hint: 'Underrated complexity',                difficulty: 'easy' },
    // medium
    { word: 'Risotto',     hint: 'Takes patience to get right',          difficulty: 'medium' },
    { word: 'Espresso',    hint: 'Small but powerful',                   difficulty: 'medium' },
    { word: 'Tempura',     hint: 'The coating is the point',             difficulty: 'medium' },
    { word: 'Tiramisu',    hint: 'Built in layers',                      difficulty: 'medium' },
    { word: 'Ceviche',     hint: 'Chemistry without heat',               difficulty: 'medium' },
    { word: 'IPA',         hint: 'An acquired taste',                    difficulty: 'medium' },
    { word: 'Gelato',      hint: 'Regional and seasonal',                difficulty: 'medium' },
    { word: 'Carbonara',   hint: 'Controversial among purists',          difficulty: 'medium' },
    // hard
    { word: 'Ribollita',   hint: 'Peasant food elevated',                difficulty: 'hard' },
    { word: 'Ristretto',   hint: 'Less water, more intensity',           difficulty: 'hard' },
    { word: 'Kaiseki',     hint: 'A ritual as much as a meal',           difficulty: 'hard' },
    { word: 'Amatriciana', hint: 'One wrong ingredient causes arguments',difficulty: 'hard' },
    { word: 'Époisses',    hint: 'Banned from public transport',         difficulty: 'hard' },
  ],

  'Movies & TV': [
    // easy
    { word: 'Titanic',    hint: 'Everyone knows how it ends',        difficulty: 'easy'   },
    { word: 'Friends',    hint: 'You have probably watched it twice',difficulty: 'easy'   },
    { word: 'Batman',     hint: 'Darkness used as a tool',           difficulty: 'easy'   },
    // medium
    { word: 'Inception',  hint: 'Layers within layers',              difficulty: 'medium' },
    { word: 'Succession', hint: 'Power and family collide',          difficulty: 'medium' },
    { word: 'Parasite',   hint: 'Class anxiety made visible',        difficulty: 'medium' },
    { word: 'Fleabag',    hint: 'Intimacy with the audience',        difficulty: 'medium' },
  ],

  'Sports & Games': [
    // easy
    { word: 'Football',   hint: 'Global passion',                    difficulty: 'easy' },
    { word: 'Basketball', hint: 'A vertical game',                   difficulty: 'easy' },
    { word: 'Tennis',     hint: 'Back and forth',                    difficulty: 'easy' },
    { word: 'Chess',      hint: 'No luck involved',                  difficulty: 'easy' },
    { word: 'Swimming',   hint: 'Competing against yourself',        difficulty: 'easy' },
    { word: 'Poker',      hint: 'What you hide matters',             difficulty: 'easy' },
    { word: 'Golf',       hint: 'Deceptively simple',                difficulty: 'easy' },
    { word: 'Minecraft',  hint: 'Limited only by imagination',       difficulty: 'easy' },
    // medium
    { word: 'Curling',    hint: 'Slow and precise',                  difficulty: 'medium' },
    { word: 'Squash',     hint: 'Four walls and exhaustion',         difficulty: 'medium' },
    { word: 'Backgammon', hint: 'Luck meets strategy over millennia',difficulty: 'medium' },
    { word: 'Biathlon',   hint: 'Opposites combined',                difficulty: 'medium' },
    { word: 'Hurling',    hint: 'Older than most countries',         difficulty: 'medium' },
    { word: 'Bouldering', hint: 'Puzzles solved with your body',     difficulty: 'medium' },
    { word: 'Padel',      hint: 'Social and accessible',             difficulty: 'medium' },
    // hard
    { word: 'Bandy',      hint: 'Older than its more famous cousin', difficulty: 'hard' },
    { word: 'Kriegspiel', hint: 'You cannot see the whole board',    difficulty: 'hard' },
    { word: 'Pato',       hint: 'Gaucho tradition',                  difficulty: 'hard' },
    { word: 'Randan',     hint: 'Asymmetric effort',                 difficulty: 'hard' },
    { word: 'Mancala',    hint: 'Move and count',                    difficulty: 'hard' },
  ],

  'Animals & Nature': [
    // easy
    { word: 'Lion',             hint: 'Symbol of strength',                      difficulty: 'easy' },
    { word: 'Dolphin',          hint: 'Surprisingly intelligent',                difficulty: 'easy' },
    { word: 'Eagle',            hint: 'National symbol for many countries',      difficulty: 'easy' },
    { word: 'Elephant',         hint: 'Never forgets',                           difficulty: 'easy' },
    { word: 'Rose',             hint: 'Classic symbol',                          difficulty: 'easy' },
    { word: 'Shark',            hint: 'Ancient and efficient',                   difficulty: 'easy' },
    { word: 'Volcano',          hint: 'Destructive and creative',                difficulty: 'easy' },
    { word: 'Rainbow',          hint: 'Only appears in the right conditions',    difficulty: 'easy' },
    // medium
    { word: 'Axolotl',          hint: 'Stays forever young',                     difficulty: 'medium' },
    { word: 'Pangolin',         hint: 'Most trafficked animal on earth',         difficulty: 'medium' },
    { word: 'Fjord',            hint: 'Carved by ice over millennia',            difficulty: 'medium' },
    { word: 'Baobab',           hint: 'Nicknamed the upside-down tree',          difficulty: 'medium' },
    { word: 'Narwhal',          hint: 'The unicorn of the sea',                  difficulty: 'medium' },
    { word: 'Bioluminescence',  hint: "Nature's own light",                      difficulty: 'medium' },
    // hard
    { word: 'Tardigrade',       hint: 'Indestructible and microscopic',          difficulty: 'hard' },
    { word: 'Haboob',           hint: 'A wall of dust',                          difficulty: 'hard' },
    { word: 'Atoll',            hint: 'A ring of life in the ocean',             difficulty: 'hard' },
    { word: 'Olm',              hint: 'Lives in darkness for centuries',         difficulty: 'hard' },
  ],

  'Travel & Places': [
    // easy
    { word: 'Paris',      hint: 'Overrated by some, magical to others',   difficulty: 'easy' },
    { word: 'Tokyo',      hint: 'Organised chaos',                        difficulty: 'easy' },
    { word: 'Airport',    hint: 'Where journeys begin and end',           difficulty: 'easy' },
    { word: 'Beach',      hint: 'Everyone has a favourite one',           difficulty: 'easy' },
    { word: 'Hotel',      hint: 'Temporary home',                         difficulty: 'easy' },
    { word: 'Passport',   hint: 'Freedom in document form',               difficulty: 'easy' },
    { word: 'Amazon',     hint: 'Vast and not fully mapped',              difficulty: 'easy' },
    // medium
    { word: 'Reykjavik',  hint: 'Small capital, outsized atmosphere',     difficulty: 'medium' },
    { word: 'Patagonia',  hint: 'Feels like the end of the world',        difficulty: 'medium' },
    { word: 'Kyoto',      hint: 'The old version of something modern',    difficulty: 'medium' },
    { word: 'Dubrovnik',  hint: 'Photogenic but overwhelmed by visitors', difficulty: 'medium' },
    { word: 'Socotra',    hint: 'Looks like another planet',              difficulty: 'medium' },
    { word: 'Medellin',   hint: 'A city that reinvented itself',          difficulty: 'medium' },
    { word: 'Tbilisi',    hint: 'East and West collide',                  difficulty: 'medium' },
    { word: 'Marrakech',  hint: 'Sensory overload',                       difficulty: 'medium' },
    // hard
    { word: 'Svalbard',   hint: 'Polar bears outnumber people',           difficulty: 'hard' },
    { word: 'Kashgar',    hint: 'An ancient crossroads',                  difficulty: 'hard' },
    { word: 'Solovki',    hint: 'Remote and haunted by history',          difficulty: 'hard' },
    { word: 'Kamchatka',  hint: 'Volcanoes and almost no roads',          difficulty: 'hard' },
  ],

  'Music': [
    // easy
    { word: 'Guitar',       hint: 'Most people have tried to learn it',  difficulty: 'easy' },
    { word: 'Beyoncé',      hint: 'A cultural moment, not just a person',difficulty: 'easy' },
    { word: 'Drums',        hint: 'Everything else leans on this',       difficulty: 'easy' },
    { word: 'Jazz',         hint: 'Rules exist to be broken',            difficulty: 'easy' },
    { word: 'Concert',      hint: 'The recording never captures it',     difficulty: 'easy' },
    { word: 'Spotify',      hint: 'Changed how we value music',          difficulty: 'easy' },
    // medium
    { word: 'Theremin',     hint: 'Played without touching',             difficulty: 'medium' },
    { word: 'Radiohead',    hint: 'Artistically restless',               difficulty: 'medium' },
    { word: 'Synthesiser',  hint: 'Infinite palette of sound',           difficulty: 'medium' },
    { word: 'Flamenco',     hint: 'Emotion in a strict form',            difficulty: 'medium' },
    // hard
    { word: 'Maqam',        hint: 'A modal universe',                    difficulty: 'hard' },
    { word: 'Oud',          hint: 'Ancient and resonant',                difficulty: 'hard' },
    { word: 'Qawwali',      hint: 'Devotion through repetition',         difficulty: 'hard' },
    { word: 'Gamelan',      hint: 'Collective tuning',                   difficulty: 'hard' },
  ],

  'Science & Tech': [
    // easy
    { word: 'Smartphone',        hint: 'Rarely out of reach',            difficulty: 'easy' },
    { word: 'Gravity',           hint: 'Keeps everything in place',      difficulty: 'easy' },
    { word: 'DNA',               hint: 'The blueprint',                  difficulty: 'easy' },
    { word: 'Robot',             hint: 'Automates repetition',           difficulty: 'easy' },
    { word: 'Internet',          hint: 'Changed everything',             difficulty: 'easy' },
    { word: 'Vaccine',           hint: 'Prevents rather than cures',     difficulty: 'easy' },
    // medium
    { word: 'CRISPR',            hint: 'Editing the code of life',       difficulty: 'medium' },
    { word: 'mRNA',              hint: 'A temporary instruction',        difficulty: 'medium' },
    { word: 'Blockchain',        hint: 'Distributed trust',              difficulty: 'medium' },
    { word: 'Neuroplasticity',   hint: 'The brain rewires itself',       difficulty: 'medium' },
    { word: 'Fermentation',      hint: 'Controlled decay',               difficulty: 'medium' },
    // hard
    { word: 'Eigenvector',       hint: 'Direction unchanged under transformation', difficulty: 'hard' },
    { word: 'Epigenetics',       hint: 'Expression without mutation',    difficulty: 'hard' },
    { word: 'Renormalisation',   hint: 'How physicists hide the infinities', difficulty: 'hard' },
    { word: 'Xenotransplantation', hint: 'Cross-species medicine',       difficulty: 'hard' },
  ],

  'History & Culture': [
    // easy
    { word: 'Cleopatra',   hint: 'Political genius turned icon',              difficulty: 'easy'   },
    { word: 'Renaissance', hint: 'A rebirth of ideas',                        difficulty: 'easy'   },
    { word: 'Shakespeare', hint: 'Invented words we still use today',         difficulty: 'easy'   },
    // medium
    { word: 'Stoicism',    hint: 'Ancient philosophy still in self-help books',difficulty: 'medium' },
    { word: 'Cubism',      hint: 'Seeing all sides simultaneously',           difficulty: 'medium' },
    // hard
    { word: 'Zomia',       hint: 'A region defined by escaping the state',    difficulty: 'hard'   },
  ],

  // ── Adult categories ───────────────────────────────────────────────────────

  'Adult Scenarios': [
    // easy
    { word: 'Situationship', hint: 'Undefined connection',           difficulty: 'easy'   },
    // medium
    { word: 'Cushioning',    hint: 'Keeping options open',           difficulty: 'medium' },
    { word: 'Breadcrumbing', hint: 'Just enough to maintain interest',difficulty: 'medium' },
    { word: 'Rizz',          hint: 'Effortless charm',               difficulty: 'medium' },
    { word: 'Stashing',      hint: 'Kept out of public sight',       difficulty: 'medium' },
    { word: 'Submarining',   hint: 'Resurfacing without explanation', difficulty: 'medium' },
    // hard
    { word: 'Peacocking',    hint: 'Standing out to attract',        difficulty: 'hard'   },
  ],

  'Walk of Shame': [
    { word: 'Hickey',      hint: 'Visible reminder',                  difficulty: 'easy'   },
    { word: 'Sunglasses',  hint: 'Hiding something',                  difficulty: 'medium' },
    { word: 'Kebab',       hint: '3am decision that followed you home',difficulty: 'medium' },
    { word: 'Regret',      hint: 'Arrives with the daylight',         difficulty: 'hard'   },
  ],

  'Red Flags': [
    // easy
    { word: 'Negging',       hint: 'Backhanded compliment',            difficulty: 'easy'   },
    { word: 'Ghosting',      hint: 'Sudden disappearance',             difficulty: 'easy'   },
    { word: 'Breadcrumbing', hint: 'Just enough to keep you interested',difficulty: 'easy'  },
    // medium
    { word: 'Vaguebooking',  hint: 'Fishing for attention publicly',   difficulty: 'medium' },
    { word: 'Jealousy',      hint: 'Disguised as caring',              difficulty: 'medium' },
    { word: 'Lying',         hint: 'Small at first',                   difficulty: 'medium' },
    // hard
    { word: 'Clingy',        hint: 'Needs constant reassurance',       difficulty: 'hard'   },
    { word: 'Narcissism',    hint: 'It\'s always about them',          difficulty: 'hard'   },
  ],

  'Kinks': [
    { word: 'Roleplay',   hint: 'Character work',              difficulty: 'easy'   },
    { word: 'Handcuffs',  hint: 'Restricted movement',         difficulty: 'easy'   },
    { word: 'Blindfold',  hint: 'Heightened other senses',     difficulty: 'easy'   },
    { word: 'Voyeurism',  hint: 'Watching from a distance',    difficulty: 'easy'   },
    { word: 'Uniforms',   hint: 'Costume required',            difficulty: 'medium' },
  ],
};

// Built-in category metadata (icon + adult flag)
const CATEGORY_META = {
  'Food & Drink':      { icon: '🍕', adult: false },
  'Movies & TV':       { icon: '🎬', adult: false },
  'Sports & Games':    { icon: '⚽', adult: false },
  'Animals & Nature':  { icon: '🦁', adult: false },
  'Travel & Places':   { icon: '✈️', adult: false },
  'Music':             { icon: '🎵', adult: false },
  'Science & Tech':    { icon: '🔬', adult: false },
  'History & Culture': { icon: '🏛️', adult: false },
  'Adult Scenarios':   { icon: '😈', adult: true  },
  'Walk of Shame':     { icon: '🚶', adult: true  },
  'Red Flags':         { icon: '🚩', adult: true  },
  'Kinks':             { icon: '🔞', adult: true  },
};

// Pick N random words from a category at a given difficulty (falls back to any difficulty)
function getWordsFromCategory(categoryName, difficulty, count) {
  const words = STATIC_WORDS[categoryName] || [];
  const filtered = words.filter(w => w.difficulty === difficulty);
  const pool = filtered.length >= count ? filtered : words;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Build a session word pool from the selected categories
function buildStaticPool(selectedCategories, difficulty) {
  const perCategory = Math.max(4, Math.floor(40 / selectedCategories.length));
  const pool = [];
  for (const cat of selectedCategories) {
    const words = getWordsFromCategory(cat, difficulty, perCategory);
    words.forEach(w => pool.push({ ...w, category: cat }));
  }
  return pool.sort(() => Math.random() - 0.5);
}
