// static-words.js — Offline fallback word lists for Imposter Who?
// Each entry: { word, hint, difficulty }
// hint = what the imposter sees instead of the real word

const STATIC_WORDS = {
  // ── Standard categories ────────────────────────────────────────────────────

  'Food & Drink': [
    // easy
    { word: 'Pizza', hint: 'Italian food', difficulty: 'easy' },
    { word: 'Coffee', hint: 'Hot drink', difficulty: 'easy' },
    { word: 'Sushi', hint: 'Japanese food', difficulty: 'easy' },
    { word: 'Chocolate', hint: 'Sweet treat', difficulty: 'easy' },
    { word: 'Burger', hint: 'Fast food', difficulty: 'easy' },
    { word: 'Beer', hint: 'Alcoholic drink', difficulty: 'easy' },
    { word: 'Ice Cream', hint: 'Frozen dessert', difficulty: 'easy' },
    { word: 'Pasta', hint: 'Italian dish', difficulty: 'easy' },
    // medium
    { word: 'Risotto', hint: 'Rice dish', difficulty: 'medium' },
    { word: 'Espresso', hint: 'Coffee type', difficulty: 'medium' },
    { word: 'Tempura', hint: 'Japanese dish', difficulty: 'medium' },
    { word: 'Tiramisu', hint: 'Italian dessert', difficulty: 'medium' },
    { word: 'Ceviche', hint: 'Seafood dish', difficulty: 'medium' },
    { word: 'IPA', hint: 'Craft beer style', difficulty: 'medium' },
    { word: 'Gelato', hint: 'Frozen dessert', difficulty: 'medium' },
    { word: 'Carbonara', hint: 'Pasta sauce', difficulty: 'medium' },
    // hard
    { word: 'Ribollita', hint: 'Italian soup', difficulty: 'hard' },
    { word: 'Ristretto', hint: 'Coffee drink', difficulty: 'hard' },
    { word: 'Kaiseki', hint: 'Japanese cuisine style', difficulty: 'hard' },
    { word: 'Peated Scotch', hint: 'Spirits category', difficulty: 'hard' },
    { word: 'Amatriciana', hint: 'Pasta sauce', difficulty: 'hard' },
    { word: 'Salade Niçoise', hint: 'French salad', difficulty: 'hard' },
    { word: 'Shaoxing Wine', hint: 'Asian cooking liquid', difficulty: 'hard' },
    { word: 'Époisses', hint: 'French cheese', difficulty: 'hard' },
  ],

  'Movies & TV': [
    // easy
    { word: 'Titanic', hint: 'Romance movie', difficulty: 'easy' },
    { word: 'Friends', hint: 'Sitcom', difficulty: 'easy' },
    { word: 'Batman', hint: 'Superhero', difficulty: 'easy' },
    { word: 'Star Wars', hint: 'Sci-fi franchise', difficulty: 'easy' },
    { word: 'The Lion King', hint: 'Animated film', difficulty: 'easy' },
    { word: 'Breaking Bad', hint: 'Crime drama', difficulty: 'easy' },
    { word: 'Jurassic Park', hint: 'Adventure film', difficulty: 'easy' },
    { word: 'Game of Thrones', hint: 'Fantasy series', difficulty: 'easy' },
    // medium
    { word: 'Pulp Fiction', hint: 'Crime film', difficulty: 'medium' },
    { word: 'The Wire', hint: 'Crime drama', difficulty: 'medium' },
    { word: 'Inception', hint: 'Sci-fi thriller', difficulty: 'medium' },
    { word: 'Succession', hint: 'Drama series', difficulty: 'medium' },
    { word: 'Parasite', hint: 'Korean film', difficulty: 'medium' },
    { word: 'Mad Men', hint: 'Period drama', difficulty: 'medium' },
    { word: 'The Godfather', hint: 'Crime film', difficulty: 'medium' },
    { word: 'Fleabag', hint: 'British comedy', difficulty: 'medium' },
    // hard
    { word: 'Mulholland Drive', hint: 'Surreal film', difficulty: 'hard' },
    { word: 'The Leftovers', hint: 'Drama series', difficulty: 'hard' },
    { word: 'Synecdoche New York', hint: 'Art film', difficulty: 'hard' },
    { word: 'I May Destroy You', hint: 'Drama series', difficulty: 'hard' },
    { word: 'Twin Peaks: The Return', hint: 'TV event', difficulty: 'hard' },
    { word: 'Certified Copy', hint: 'European film', difficulty: 'hard' },
    { word: 'The Rehearsal', hint: 'Reality-doc hybrid', difficulty: 'hard' },
    { word: 'Halt and Catch Fire', hint: 'Tech drama', difficulty: 'hard' },
  ],

  'Sports & Games': [
    // easy
    { word: 'Football', hint: 'Ball sport', difficulty: 'easy' },
    { word: 'Basketball', hint: 'Ball sport', difficulty: 'easy' },
    { word: 'Tennis', hint: 'Racquet sport', difficulty: 'easy' },
    { word: 'Chess', hint: 'Board game', difficulty: 'easy' },
    { word: 'Swimming', hint: 'Water sport', difficulty: 'easy' },
    { word: 'Poker', hint: 'Card game', difficulty: 'easy' },
    { word: 'Golf', hint: 'Outdoor sport', difficulty: 'easy' },
    { word: 'Minecraft', hint: 'Video game', difficulty: 'easy' },
    // medium
    { word: 'Curling', hint: 'Winter sport', difficulty: 'medium' },
    { word: 'Squash', hint: 'Racquet sport', difficulty: 'medium' },
    { word: 'Backgammon', hint: 'Board game', difficulty: 'medium' },
    { word: 'Dota 2', hint: 'Multiplayer game', difficulty: 'medium' },
    { word: 'Biathlon', hint: 'Winter sport', difficulty: 'medium' },
    { word: 'Hurling', hint: 'Field sport', difficulty: 'medium' },
    { word: 'Bouldering', hint: 'Climbing discipline', difficulty: 'medium' },
    { word: 'Padel', hint: 'Racquet sport', difficulty: 'medium' },
    // hard
    { word: 'Sepak Takraw', hint: 'Asian sport', difficulty: 'hard' },
    { word: 'Jai Alai', hint: 'Court sport', difficulty: 'hard' },
    { word: 'Bandy', hint: 'Winter sport', difficulty: 'hard' },
    { word: 'Kriegspiel', hint: 'Chess variant', difficulty: 'hard' },
    { word: 'Pato', hint: 'Argentine sport', difficulty: 'hard' },
    { word: 'Randan', hint: 'Rowing discipline', difficulty: 'hard' },
    { word: 'Mancala', hint: 'Board game', difficulty: 'hard' },
    { word: 'Pelota Vasca', hint: 'Ball sport', difficulty: 'hard' },
  ],

  'Animals & Nature': [
    // easy
    { word: 'Lion', hint: 'Big cat', difficulty: 'easy' },
    { word: 'Dolphin', hint: 'Marine mammal', difficulty: 'easy' },
    { word: 'Eagle', hint: 'Bird of prey', difficulty: 'easy' },
    { word: 'Elephant', hint: 'Large mammal', difficulty: 'easy' },
    { word: 'Rose', hint: 'Flowering plant', difficulty: 'easy' },
    { word: 'Shark', hint: 'Ocean predator', difficulty: 'easy' },
    { word: 'Volcano', hint: 'Geological feature', difficulty: 'easy' },
    { word: 'Rainbow', hint: 'Weather phenomenon', difficulty: 'easy' },
    // medium
    { word: 'Axolotl', hint: 'Amphibian', difficulty: 'medium' },
    { word: 'Pangolin', hint: 'Scaled mammal', difficulty: 'medium' },
    { word: 'Fjord', hint: 'Coastal landform', difficulty: 'medium' },
    { word: 'Baobab', hint: 'African tree', difficulty: 'medium' },
    { word: 'Narwhal', hint: 'Arctic mammal', difficulty: 'medium' },
    { word: 'Bioluminescence', hint: 'Natural light', difficulty: 'medium' },
    { word: 'Mantis Shrimp', hint: 'Marine creature', difficulty: 'medium' },
    { word: 'Aurora Borealis', hint: 'Atmospheric phenomenon', difficulty: 'medium' },
    // hard
    { word: 'Tardigrade', hint: 'Microscopic organism', difficulty: 'hard' },
    { word: 'Irrawaddy Dolphin', hint: 'River mammal', difficulty: 'hard' },
    { word: 'Haboob', hint: 'Weather event', difficulty: 'hard' },
    { word: 'Miombo Woodland', hint: 'African biome', difficulty: 'hard' },
    { word: 'Saiga Antelope', hint: 'Steppe animal', difficulty: 'hard' },
    { word: 'Atoll', hint: 'Coral formation', difficulty: 'hard' },
    { word: 'Olm', hint: 'Cave-dwelling animal', difficulty: 'hard' },
    { word: 'Fata Morgana', hint: 'Optical illusion', difficulty: 'hard' },
  ],

  'Travel & Places': [
    // easy
    { word: 'Paris', hint: 'European city', difficulty: 'easy' },
    { word: 'New York', hint: 'American city', difficulty: 'easy' },
    { word: 'Tokyo', hint: 'Asian city', difficulty: 'easy' },
    { word: 'Airport', hint: 'Travel hub', difficulty: 'easy' },
    { word: 'Beach', hint: 'Coastal destination', difficulty: 'easy' },
    { word: 'Hotel', hint: 'Accommodation', difficulty: 'easy' },
    { word: 'Passport', hint: 'Travel document', difficulty: 'easy' },
    { word: 'Amazon', hint: 'South American destination', difficulty: 'easy' },
    // medium
    { word: 'Reykjavik', hint: 'Nordic capital', difficulty: 'medium' },
    { word: 'Patagonia', hint: 'South American region', difficulty: 'medium' },
    { word: 'Kyoto', hint: 'Japanese city', difficulty: 'medium' },
    { word: 'Dubrovnik', hint: 'Adriatic city', difficulty: 'medium' },
    { word: 'Socotra', hint: 'Remote island', difficulty: 'medium' },
    { word: 'Medellin', hint: 'Colombian city', difficulty: 'medium' },
    { word: 'Tbilisi', hint: 'Caucasus capital', difficulty: 'medium' },
    { word: 'Marrakech', hint: 'Moroccan city', difficulty: 'medium' },
    // hard
    { word: 'Faroe Islands', hint: 'North Atlantic archipelago', difficulty: 'hard' },
    { word: 'Svalbard', hint: 'Arctic territory', difficulty: 'hard' },
    { word: 'Kashgar', hint: 'Central Asian city', difficulty: 'hard' },
    { word: 'Solovki', hint: 'Russian island monastery', difficulty: 'hard' },
    { word: 'Kamchatka', hint: 'Russian peninsula', difficulty: 'hard' },
    { word: 'Rub al Khali', hint: 'Arabian desert', difficulty: 'hard' },
    { word: 'Salar de Uyuni', hint: 'South American salt flat', difficulty: 'hard' },
    { word: 'Gobi Desert', hint: 'Asian desert', difficulty: 'hard' },
  ],

  'Music': [
    // easy
    { word: 'Guitar', hint: 'String instrument', difficulty: 'easy' },
    { word: 'Beyoncé', hint: 'Pop artist', difficulty: 'easy' },
    { word: 'Drums', hint: 'Percussion instrument', difficulty: 'easy' },
    { word: 'Jazz', hint: 'Music genre', difficulty: 'easy' },
    { word: 'Concert', hint: 'Live music event', difficulty: 'easy' },
    { word: 'Spotify', hint: 'Music platform', difficulty: 'easy' },
    { word: 'Michael Jackson', hint: 'Pop icon', difficulty: 'easy' },
    { word: 'Vinyl Record', hint: 'Music format', difficulty: 'easy' },
    // medium
    { word: 'Theremin', hint: 'Electronic instrument', difficulty: 'medium' },
    { word: 'Lofi Hip Hop', hint: 'Music subgenre', difficulty: 'medium' },
    { word: 'Radiohead', hint: 'British band', difficulty: 'medium' },
    { word: 'Synthesiser', hint: 'Electronic instrument', difficulty: 'medium' },
    { word: 'Flamenco', hint: 'Spanish music style', difficulty: 'medium' },
    { word: 'A-side', hint: 'Music release term', difficulty: 'medium' },
    { word: 'Arvo Pärt', hint: 'Classical composer', difficulty: 'medium' },
    { word: 'Drum and Bass', hint: 'Electronic genre', difficulty: 'medium' },
    // hard
    { word: 'Musique Concrète', hint: 'Avant-garde music form', difficulty: 'hard' },
    { word: 'Maqam', hint: 'Middle Eastern music system', difficulty: 'hard' },
    { word: 'Oud', hint: 'String instrument', difficulty: 'hard' },
    { word: 'Spectral Music', hint: 'Compositional technique', difficulty: 'hard' },
    { word: 'Qawwali', hint: 'South Asian music tradition', difficulty: 'hard' },
    { word: 'Microtonal Scale', hint: 'Tuning system', difficulty: 'hard' },
    { word: 'Prepared Piano', hint: 'Modified instrument', difficulty: 'hard' },
    { word: 'Gamelang', hint: 'Indonesian ensemble', difficulty: 'hard' },
  ],

  'Science & Tech': [
    // easy
    { word: 'Smartphone', hint: 'Electronic device', difficulty: 'easy' },
    { word: 'Gravity', hint: 'Physical force', difficulty: 'easy' },
    { word: 'DNA', hint: 'Biological molecule', difficulty: 'easy' },
    { word: 'Robot', hint: 'Automated machine', difficulty: 'easy' },
    { word: 'Internet', hint: 'Global network', difficulty: 'easy' },
    { word: 'Vaccine', hint: 'Medical treatment', difficulty: 'easy' },
    { word: 'Black Hole', hint: 'Space phenomenon', difficulty: 'easy' },
    { word: 'Solar Panel', hint: 'Energy device', difficulty: 'easy' },
    // medium
    { word: 'CRISPR', hint: 'Genetic technology', difficulty: 'medium' },
    { word: 'Quantum Entanglement', hint: 'Physics phenomenon', difficulty: 'medium' },
    { word: 'Transformer Model', hint: 'AI architecture', difficulty: 'medium' },
    { word: 'mRNA', hint: 'Biological molecule', difficulty: 'medium' },
    { word: 'Dark Matter', hint: 'Cosmological concept', difficulty: 'medium' },
    { word: 'Blockchain', hint: 'Data structure', difficulty: 'medium' },
    { word: 'Neuroplasticity', hint: 'Brain property', difficulty: 'medium' },
    { word: 'Fermentation', hint: 'Biological process', difficulty: 'medium' },
    // hard
    { word: 'Topological Insulator', hint: 'Quantum material', difficulty: 'hard' },
    { word: 'Lagrangian Point', hint: 'Orbital position', difficulty: 'hard' },
    { word: 'Eigenvector', hint: 'Mathematical object', difficulty: 'hard' },
    { word: 'Epigenetics', hint: 'Biological mechanism', difficulty: 'hard' },
    { word: 'Renormalisation', hint: 'Physics technique', difficulty: 'hard' },
    { word: 'Homomorphic Encryption', hint: 'Cryptographic method', difficulty: 'hard' },
    { word: 'Frustum Culling', hint: 'Graphics technique', difficulty: 'hard' },
    { word: 'Xenotransplantation', hint: 'Medical procedure', difficulty: 'hard' },
  ],

  'History & Culture': [
    // easy
    { word: 'Cleopatra', hint: 'Ancient ruler', difficulty: 'easy' },
    { word: 'The Moon Landing', hint: 'Space milestone', difficulty: 'easy' },
    { word: 'World War II', hint: 'Global conflict', difficulty: 'easy' },
    { word: 'Renaissance', hint: 'Historical period', difficulty: 'easy' },
    { word: 'The Great Wall', hint: 'Ancient structure', difficulty: 'easy' },
    { word: 'Olympic Games', hint: 'International event', difficulty: 'easy' },
    { word: 'Shakespeare', hint: 'English writer', difficulty: 'easy' },
    { word: 'The French Revolution', hint: 'Political uprising', difficulty: 'easy' },
    // medium
    { word: 'The Silk Road', hint: 'Ancient trade route', difficulty: 'medium' },
    { word: 'Meiji Restoration', hint: 'Japanese modernisation', difficulty: 'medium' },
    { word: 'The Printing Press', hint: 'Communication invention', difficulty: 'medium' },
    { word: 'Stoicism', hint: 'Ancient philosophy', difficulty: 'medium' },
    { word: 'The Harlem Renaissance', hint: 'Cultural movement', difficulty: 'medium' },
    { word: 'The Cold War', hint: 'Geopolitical conflict', difficulty: 'medium' },
    { word: 'The Magna Carta', hint: 'Historic document', difficulty: 'medium' },
    { word: 'Cubism', hint: 'Art movement', difficulty: 'medium' },
    // hard
    { word: 'The Inca Road System', hint: 'Ancient infrastructure', difficulty: 'hard' },
    { word: "Ashoka's Edicts", hint: 'Ancient decrees', difficulty: 'hard' },
    { word: 'The Council of Nicaea', hint: 'Religious assembly', difficulty: 'hard' },
    { word: 'De Stijl', hint: 'Art movement', difficulty: 'hard' },
    { word: 'The Defenestration of Prague', hint: 'Historical event', difficulty: 'hard' },
    { word: 'The Zapatista Uprising', hint: 'Political movement', difficulty: 'hard' },
    { word: 'Zomia', hint: 'Geographical concept', difficulty: 'hard' },
    { word: 'The Hanseatic League', hint: 'Medieval trade network', difficulty: 'hard' },
  ],

  // ── Adult categories (require adult mode enabled) ──────────────────────────

  'Drinking Culture': [
    // easy
    { word: 'Beer Pong', hint: 'Drinking game', difficulty: 'easy' },
    { word: 'Tequila Shot', hint: 'Alcoholic drink', difficulty: 'easy' },
    { word: 'Happy Hour', hint: 'Bar promotion', difficulty: 'easy' },
    { word: 'Hangover', hint: 'Morning-after feeling', difficulty: 'easy' },
    { word: 'Pub Crawl', hint: 'Bar-hopping event', difficulty: 'easy' },
    { word: 'Last Round', hint: 'Bar moment', difficulty: 'easy' },
    { word: 'Bottomless Brunch', hint: 'Restaurant deal', difficulty: 'easy' },
    { word: 'Designated Driver', hint: 'Sober role', difficulty: 'easy' },
    // medium
    { word: 'Skinny Bitch', hint: 'Cocktail name', difficulty: 'medium' },
    { word: 'Boilermaker', hint: 'Bar order', difficulty: 'medium' },
    { word: 'Sesh Goblin', hint: 'Party personality', difficulty: 'medium' },
    { word: 'Pregame', hint: 'Pre-party ritual', difficulty: 'medium' },
    { word: 'Craft Beer Snob', hint: 'Bar personality', difficulty: 'medium' },
    { word: 'Two-Day Hangover', hint: 'Aftermath experience', difficulty: 'medium' },
    { word: 'Open Bar Wedding', hint: 'Social event', difficulty: 'medium' },
    { word: 'Hair of the Dog', hint: 'Hangover remedy', difficulty: 'medium' },
    // hard
    { word: 'Spontaneous Fermentation', hint: 'Brewing method', difficulty: 'hard' },
    { word: 'Flaming Sambuca', hint: 'Cocktail ritual', difficulty: 'hard' },
    { word: 'Amaro Flight', hint: 'Bar menu item', difficulty: 'hard' },
    { word: 'Riff on a Negroni', hint: 'Cocktail variation', difficulty: 'hard' },
    { word: 'Sour Dough Starter', hint: 'Fermented thing', difficulty: 'hard' },
    { word: 'Drinking Penalty Round', hint: 'Game consequence', difficulty: 'hard' },
    { word: 'Worm in the Mezcal', hint: 'Bottle feature', difficulty: 'hard' },
    { word: 'Overthinking at the Bar', hint: 'Anxiety moment', difficulty: 'hard' },
  ],

  'Dirty Secrets': [
    // easy
    { word: 'Ghosting Someone', hint: 'Social behaviour', difficulty: 'easy' },
    { word: 'Walk of Shame', hint: 'Morning ritual', difficulty: 'easy' },
    { word: 'Drunk Text', hint: 'Late-night message', difficulty: 'easy' },
    { word: 'Fake Sick Day', hint: 'Work excuse', difficulty: 'easy' },
    { word: 'Stalking an Ex Online', hint: 'Social media habit', difficulty: 'easy' },
    { word: 'Lying About Your Age', hint: 'Social fib', difficulty: 'easy' },
    { word: 'Keeping a Screenshot', hint: 'Digital habit', difficulty: 'easy' },
    { word: 'Blaming Someone Else', hint: 'Deflection move', difficulty: 'easy' },
    // medium
    { word: 'Unmatching After a Date', hint: 'App action', difficulty: 'medium' },
    { word: 'Pretending to Be Busy', hint: 'Social excuse', difficulty: 'medium' },
    { word: 'Reading Messages and Not Replying', hint: 'Phone habit', difficulty: 'medium' },
    { word: "Eating Someone's Labelled Food", hint: 'Fridge crime', difficulty: 'medium' },
    { word: 'Lying on Your CV', hint: 'Professional fib', difficulty: 'medium' },
    { word: 'Double-Booking Plans', hint: 'Social mistake', difficulty: 'medium' },
    { word: 'Talking About Someone Nearby', hint: 'Embarrassing moment', difficulty: 'medium' },
    { word: 'Faking Enjoyment at a Gathering', hint: 'Social performance', difficulty: 'medium' },
    // hard
    { word: 'Sliding into DMs During Work Hours', hint: 'Professional boundary', difficulty: 'hard' },
    { word: 'Regifting at Christmas', hint: 'Gift behaviour', difficulty: 'hard' },
    { word: 'Subtle Boast in a Humble Brag', hint: 'Communication style', difficulty: 'hard' },
    { word: 'Doomscrolling Instead of Sleeping', hint: 'Night habit', difficulty: 'hard' },
    { word: 'Using Mute Instead of Leaving Group Chats', hint: 'Chat strategy', difficulty: 'hard' },
    { word: 'Agreeing to Plans You Will Cancel', hint: 'Social pattern', difficulty: 'hard' },
    { word: "Quietly Judging People's Orders", hint: 'Restaurant behaviour', difficulty: 'hard' },
    { word: 'Blaming Autocorrect', hint: 'Message excuse', difficulty: 'hard' },
  ],

  'Adult Scenarios': [
    // easy
    { word: 'One Night Stand', hint: 'Brief encounter', difficulty: 'easy' },
    { word: 'Speed Dating', hint: 'Romantic event', difficulty: 'easy' },
    { word: 'Friends With Benefits', hint: 'Relationship status', difficulty: 'easy' },
    { word: 'Sliding into DMs', hint: 'Online move', difficulty: 'easy' },
    { word: 'Third Date Rule', hint: 'Dating concept', difficulty: 'easy' },
    { word: 'Love Bombing', hint: 'Dating behaviour', difficulty: 'easy' },
    { word: 'Situationship', hint: 'Relationship grey zone', difficulty: 'easy' },
    { word: 'Soft Launch', hint: 'Social media move', difficulty: 'easy' },
    // medium
    { word: 'Orbiting an Ex', hint: 'Social media behaviour', difficulty: 'medium' },
    { word: 'Cushioning', hint: 'Dating strategy', difficulty: 'medium' },
    { word: 'Breadcrumbing', hint: 'Mixed signals behaviour', difficulty: 'medium' },
    { word: 'Rizz', hint: 'Charm concept', difficulty: 'medium' },
    { word: 'Cuffing Season', hint: 'Seasonal dating trend', difficulty: 'medium' },
    { word: 'Stashing', hint: 'Relationship hiding tactic', difficulty: 'medium' },
    { word: 'Submarining', hint: 'Reappearance after silence', difficulty: 'medium' },
    { word: 'Mixed Signals at 2am', hint: 'Late-night message', difficulty: 'medium' },
    // hard
    { word: 'Slow Fade', hint: 'Relationship exit strategy', difficulty: 'hard' },
    { word: 'Peacocking', hint: 'Attention behaviour', difficulty: 'hard' },
    { word: 'Attachment Style Conversation', hint: 'Modern dating talk', difficulty: 'hard' },
    { word: 'Delusional Optimism After a First Date', hint: 'Romantic mindset', difficulty: 'hard' },
    { word: 'Hyper-Analysing a Single Text', hint: 'Dating anxiety', difficulty: 'hard' },
    { word: 'The Almost Relationship', hint: 'Relationship that never was', difficulty: 'hard' },
    { word: 'Treating Red Flags as Quirks', hint: 'Romantic blind spot', difficulty: 'hard' },
    { word: 'Manifesting a Reply', hint: 'Digital wishful thinking', difficulty: 'hard' },
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
  'Drinking Culture':  { icon: '🍺', adult: true  },
  'Dirty Secrets':     { icon: '🤫', adult: true  },
  'Adult Scenarios':   { icon: '😈', adult: true  },
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
