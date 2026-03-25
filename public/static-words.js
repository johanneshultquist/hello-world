// static-words.js — Offline fallback word lists for Imposter Who?
// Each entry: { word, hint, difficulty }
// hint = what the imposter sees instead of the real word
// RULE: hints must be vague properties, feelings, or surprising facts —
//       NEVER a subcategory label (e.g. NOT "Italian food", NOT "Drinking game")

const STATIC_WORDS = {
  // ── Standard categories ────────────────────────────────────────────────────

  'Food & Drink': [
    // easy
    { word: 'Pizza', hint: 'People have strong opinions about it', difficulty: 'easy' },
    { word: 'Coffee', hint: 'A morning ritual', difficulty: 'easy' },
    { word: 'Sushi', hint: 'Freshness matters a lot', difficulty: 'easy' },
    { word: 'Chocolate', hint: 'A comfort item', difficulty: 'easy' },
    { word: 'Burger', hint: 'Comes in endless variations', difficulty: 'easy' },
    { word: 'Beer', hint: 'Best enjoyed with friends', difficulty: 'easy' },
    { word: 'Ice Cream', hint: 'Melts if you wait too long', difficulty: 'easy' },
    { word: 'Pasta', hint: 'Underrated complexity', difficulty: 'easy' },
    // medium
    { word: 'Risotto', hint: 'Takes patience to get right', difficulty: 'medium' },
    { word: 'Espresso', hint: 'Small but powerful', difficulty: 'medium' },
    { word: 'Tempura', hint: 'The coating is the point', difficulty: 'medium' },
    { word: 'Tiramisu', hint: 'Built in layers', difficulty: 'medium' },
    { word: 'Ceviche', hint: 'Chemistry without heat', difficulty: 'medium' },
    { word: 'IPA', hint: 'An acquired taste', difficulty: 'medium' },
    { word: 'Gelato', hint: 'Regional and seasonal', difficulty: 'medium' },
    { word: 'Carbonara', hint: 'Controversial among purists', difficulty: 'medium' },
    // hard
    { word: 'Ribollita', hint: 'Peasant food elevated', difficulty: 'hard' },
    { word: 'Ristretto', hint: 'Less water, more intensity', difficulty: 'hard' },
    { word: 'Kaiseki', hint: 'A ritual as much as a meal', difficulty: 'hard' },
    { word: 'Peated Scotch', hint: 'Polarising and regional', difficulty: 'hard' },
    { word: 'Amatriciana', hint: 'One wrong ingredient causes arguments', difficulty: 'hard' },
    { word: 'Salade Niçoise', hint: 'Its components are constantly disputed', difficulty: 'hard' },
    { word: 'Shaoxing Wine', hint: 'A secret weapon', difficulty: 'hard' },
    { word: 'Époisses', hint: 'Banned from public transport', difficulty: 'hard' },
  ],

  'Movies & TV': [
    // easy
    { word: 'Titanic', hint: 'Everyone knows how it ends', difficulty: 'easy' },
    { word: 'Friends', hint: 'You have probably watched it more than once', difficulty: 'easy' },
    { word: 'Batman', hint: 'Darkness used as a tool', difficulty: 'easy' },
    { word: 'Star Wars', hint: 'A saga that spans generations', difficulty: 'easy' },
    { word: 'The Lion King', hint: 'A story about growing up', difficulty: 'easy' },
    { word: 'Breaking Bad', hint: 'A transformation nobody expected', difficulty: 'easy' },
    { word: 'Jurassic Park', hint: 'Ambition goes wrong', difficulty: 'easy' },
    { word: 'Game of Thrones', hint: 'Nobody is safe', difficulty: 'easy' },
    // medium
    { word: 'Pulp Fiction', hint: 'Time is not linear here', difficulty: 'medium' },
    { word: 'The Wire', hint: 'Rewards patience', difficulty: 'medium' },
    { word: 'Inception', hint: 'Layers within layers', difficulty: 'medium' },
    { word: 'Succession', hint: 'Power and family collide', difficulty: 'medium' },
    { word: 'Parasite', hint: 'Class anxiety made visible', difficulty: 'medium' },
    { word: 'Mad Men', hint: 'Surface hides darkness', difficulty: 'medium' },
    { word: 'The Godfather', hint: 'Power has a price', difficulty: 'medium' },
    { word: 'Fleabag', hint: 'Intimacy with the audience', difficulty: 'medium' },
    // hard
    { word: 'Mulholland Drive', hint: 'Best understood on second viewing', difficulty: 'hard' },
    { word: 'The Leftovers', hint: 'Grief without resolution', difficulty: 'hard' },
    { word: 'Synecdoche New York', hint: 'Art about making art', difficulty: 'hard' },
    { word: 'I May Destroy You', hint: 'Reclaiming a narrative', difficulty: 'hard' },
    { word: 'Twin Peaks: The Return', hint: 'Completely sui generis', difficulty: 'hard' },
    { word: 'Certified Copy', hint: 'Questions what is original', difficulty: 'hard' },
    { word: 'The Rehearsal', hint: 'Where does performance end?', difficulty: 'hard' },
    { word: 'Halt and Catch Fire', hint: 'Obscure but deeply loved', difficulty: 'hard' },
  ],

  'Sports & Games': [
    // easy
    { word: 'Football', hint: 'Global passion', difficulty: 'easy' },
    { word: 'Basketball', hint: 'A vertical game', difficulty: 'easy' },
    { word: 'Tennis', hint: 'Back and forth', difficulty: 'easy' },
    { word: 'Chess', hint: 'No luck involved', difficulty: 'easy' },
    { word: 'Swimming', hint: 'Competing against yourself', difficulty: 'easy' },
    { word: 'Poker', hint: 'What you hide matters', difficulty: 'easy' },
    { word: 'Golf', hint: 'Deceptively simple', difficulty: 'easy' },
    { word: 'Minecraft', hint: 'Limited only by imagination', difficulty: 'easy' },
    // medium
    { word: 'Curling', hint: 'Slow and precise', difficulty: 'medium' },
    { word: 'Squash', hint: 'Four walls and exhaustion', difficulty: 'medium' },
    { word: 'Backgammon', hint: 'Luck meets strategy over millennia', difficulty: 'medium' },
    { word: 'Dota 2', hint: 'Hundreds of hours to understand', difficulty: 'medium' },
    { word: 'Biathlon', hint: 'Opposites combined', difficulty: 'medium' },
    { word: 'Hurling', hint: 'Older than most countries', difficulty: 'medium' },
    { word: 'Bouldering', hint: 'Puzzles solved with your body', difficulty: 'medium' },
    { word: 'Padel', hint: 'Social and accessible', difficulty: 'medium' },
    // hard
    { word: 'Sepak Takraw', hint: 'Acrobatic and regional', difficulty: 'hard' },
    { word: 'Jai Alai', hint: 'The fastest projectile', difficulty: 'hard' },
    { word: 'Bandy', hint: 'Older than its more famous cousin', difficulty: 'hard' },
    { word: 'Kriegspiel', hint: 'You cannot see the whole board', difficulty: 'hard' },
    { word: 'Pato', hint: 'Gaucho tradition', difficulty: 'hard' },
    { word: 'Randan', hint: 'Asymmetric effort', difficulty: 'hard' },
    { word: 'Mancala', hint: 'Move and count', difficulty: 'hard' },
    { word: 'Pelota Vasca', hint: 'Regional obsession', difficulty: 'hard' },
  ],

  'Animals & Nature': [
    // easy
    { word: 'Lion', hint: 'Symbol of strength', difficulty: 'easy' },
    { word: 'Dolphin', hint: 'Surprisingly intelligent', difficulty: 'easy' },
    { word: 'Eagle', hint: 'National symbol for many countries', difficulty: 'easy' },
    { word: 'Elephant', hint: 'Never forgets', difficulty: 'easy' },
    { word: 'Rose', hint: 'Classic symbol', difficulty: 'easy' },
    { word: 'Shark', hint: 'Ancient and efficient', difficulty: 'easy' },
    { word: 'Volcano', hint: 'Destructive and creative', difficulty: 'easy' },
    { word: 'Rainbow', hint: 'Only appears in the right conditions', difficulty: 'easy' },
    // medium
    { word: 'Axolotl', hint: 'Stays forever young', difficulty: 'medium' },
    { word: 'Pangolin', hint: 'Most trafficked animal on earth', difficulty: 'medium' },
    { word: 'Fjord', hint: 'Carved by ice over millennia', difficulty: 'medium' },
    { word: 'Baobab', hint: 'Nicknamed the upside-down tree', difficulty: 'medium' },
    { word: 'Narwhal', hint: 'The unicorn of the sea', difficulty: 'medium' },
    { word: 'Bioluminescence', hint: "Nature's own light", difficulty: 'medium' },
    { word: 'Mantis Shrimp', hint: 'Sees more colours than we can imagine', difficulty: 'medium' },
    { word: 'Aurora Borealis', hint: 'Only visible in the right place at the right time', difficulty: 'medium' },
    // hard
    { word: 'Tardigrade', hint: 'Indestructible and microscopic', difficulty: 'hard' },
    { word: 'Irrawaddy Dolphin', hint: 'Cooperates with local fishermen', difficulty: 'hard' },
    { word: 'Haboob', hint: 'A wall of dust', difficulty: 'hard' },
    { word: 'Miombo Woodland', hint: "Africa's most overlooked biome", difficulty: 'hard' },
    { word: 'Saiga Antelope', hint: 'Prehistoric survivor with an odd face', difficulty: 'hard' },
    { word: 'Atoll', hint: 'A ring of life in the ocean', difficulty: 'hard' },
    { word: 'Olm', hint: 'Lives in darkness for centuries', difficulty: 'hard' },
    { word: 'Fata Morgana', hint: 'A trick of the atmosphere', difficulty: 'hard' },
  ],

  'Travel & Places': [
    // easy
    { word: 'Paris', hint: 'Overrated by some, magical to others', difficulty: 'easy' },
    { word: 'New York', hint: 'Never stops moving', difficulty: 'easy' },
    { word: 'Tokyo', hint: 'Organised chaos', difficulty: 'easy' },
    { word: 'Airport', hint: 'Where journeys begin and end', difficulty: 'easy' },
    { word: 'Beach', hint: 'Everyone has a favourite one', difficulty: 'easy' },
    { word: 'Hotel', hint: 'Temporary home', difficulty: 'easy' },
    { word: 'Passport', hint: 'Freedom in document form', difficulty: 'easy' },
    { word: 'Amazon', hint: 'Vast and not fully mapped', difficulty: 'easy' },
    // medium
    { word: 'Reykjavik', hint: 'Small capital, outsized atmosphere', difficulty: 'medium' },
    { word: 'Patagonia', hint: 'Feels like the end of the world', difficulty: 'medium' },
    { word: 'Kyoto', hint: 'The old version of something modern', difficulty: 'medium' },
    { word: 'Dubrovnik', hint: 'Photogenic but overwhelmed by visitors', difficulty: 'medium' },
    { word: 'Socotra', hint: 'Looks like another planet', difficulty: 'medium' },
    { word: 'Medellin', hint: 'A city that reinvented itself', difficulty: 'medium' },
    { word: 'Tbilisi', hint: 'East and West collide', difficulty: 'medium' },
    { word: 'Marrakech', hint: 'Sensory overload', difficulty: 'medium' },
    // hard
    { word: 'Faroe Islands', hint: 'Remote and dramatic', difficulty: 'hard' },
    { word: 'Svalbard', hint: 'Polar bears outnumber people', difficulty: 'hard' },
    { word: 'Kashgar', hint: 'An ancient crossroads', difficulty: 'hard' },
    { word: 'Solovki', hint: 'Remote and haunted by history', difficulty: 'hard' },
    { word: 'Kamchatka', hint: 'Volcanoes and almost no roads', difficulty: 'hard' },
    { word: 'Rub al Khali', hint: 'Endless and trackless', difficulty: 'hard' },
    { word: 'Salar de Uyuni', hint: 'Sky reflected on the ground', difficulty: 'hard' },
    { word: 'Gobi Desert', hint: 'An ancient crossing', difficulty: 'hard' },
  ],

  'Music': [
    // easy
    { word: 'Guitar', hint: 'Most people have tried to learn it', difficulty: 'easy' },
    { word: 'Beyoncé', hint: 'A cultural moment, not just a person', difficulty: 'easy' },
    { word: 'Drums', hint: 'Everything else leans on this', difficulty: 'easy' },
    { word: 'Jazz', hint: 'Rules exist to be broken', difficulty: 'easy' },
    { word: 'Concert', hint: 'The recording never captures it', difficulty: 'easy' },
    { word: 'Spotify', hint: 'Changed how we value music', difficulty: 'easy' },
    { word: 'Michael Jackson', hint: 'The moonwalk', difficulty: 'easy' },
    { word: 'Vinyl Record', hint: 'Analogue warmth', difficulty: 'easy' },
    // medium
    { word: 'Theremin', hint: 'Played without touching', difficulty: 'medium' },
    { word: 'Lofi Hip Hop', hint: 'Background for productivity', difficulty: 'medium' },
    { word: 'Radiohead', hint: 'Artistically restless', difficulty: 'medium' },
    { word: 'Synthesiser', hint: 'Infinite palette of sound', difficulty: 'medium' },
    { word: 'Flamenco', hint: 'Emotion in a strict form', difficulty: 'medium' },
    { word: 'A-side', hint: 'The one they want you to hear', difficulty: 'medium' },
    { word: 'Arvo Pärt', hint: 'Silence treated as music', difficulty: 'medium' },
    { word: 'Drum and Bass', hint: 'Fast and heavy', difficulty: 'medium' },
    // hard
    { word: 'Musique Concrète', hint: 'Sound as raw material', difficulty: 'hard' },
    { word: 'Maqam', hint: 'A modal universe', difficulty: 'hard' },
    { word: 'Oud', hint: 'Ancient and resonant', difficulty: 'hard' },
    { word: 'Spectral Music', hint: 'Composition based on physics', difficulty: 'hard' },
    { word: 'Qawwali', hint: 'Devotion through repetition', difficulty: 'hard' },
    { word: 'Microtonal Scale', hint: 'The notes between the notes', difficulty: 'hard' },
    { word: 'Prepared Piano', hint: 'Familiar made strange', difficulty: 'hard' },
    { word: 'Gamelan', hint: 'Collective tuning', difficulty: 'hard' },
  ],

  'Science & Tech': [
    // easy
    { word: 'Smartphone', hint: 'Rarely out of reach', difficulty: 'easy' },
    { word: 'Gravity', hint: 'Keeps everything in place', difficulty: 'easy' },
    { word: 'DNA', hint: 'The blueprint', difficulty: 'easy' },
    { word: 'Robot', hint: 'Automates repetition', difficulty: 'easy' },
    { word: 'Internet', hint: 'Changed everything', difficulty: 'easy' },
    { word: 'Vaccine', hint: 'Prevents rather than cures', difficulty: 'easy' },
    { word: 'Black Hole', hint: 'Nothing escapes', difficulty: 'easy' },
    { word: 'Solar Panel', hint: 'Free energy, mostly', difficulty: 'easy' },
    // medium
    { word: 'CRISPR', hint: 'Editing the code of life', difficulty: 'medium' },
    { word: 'Quantum Entanglement', hint: 'Einstein called it spooky', difficulty: 'medium' },
    { word: 'Transformer Model', hint: 'Attention is all you need', difficulty: 'medium' },
    { word: 'mRNA', hint: 'A temporary instruction', difficulty: 'medium' },
    { word: 'Dark Matter', hint: 'Most of the universe is missing', difficulty: 'medium' },
    { word: 'Blockchain', hint: 'Distributed trust', difficulty: 'medium' },
    { word: 'Neuroplasticity', hint: 'The brain rewires itself', difficulty: 'medium' },
    { word: 'Fermentation', hint: 'Controlled decay', difficulty: 'medium' },
    // hard
    { word: 'Topological Insulator', hint: 'Conducts on the surface, not inside', difficulty: 'hard' },
    { word: 'Lagrangian Point', hint: 'A gravitational sweet spot', difficulty: 'hard' },
    { word: 'Eigenvector', hint: 'Direction unchanged under transformation', difficulty: 'hard' },
    { word: 'Epigenetics', hint: 'Expression without mutation', difficulty: 'hard' },
    { word: 'Renormalisation', hint: 'How physicists hide the infinities', difficulty: 'hard' },
    { word: 'Homomorphic Encryption', hint: 'Computing on secrets', difficulty: 'hard' },
    { word: 'Frustum Culling', hint: 'Not rendering what you cannot see', difficulty: 'hard' },
    { word: 'Xenotransplantation', hint: 'Cross-species medicine', difficulty: 'hard' },
  ],

  'History & Culture': [
    // easy
    { word: 'Cleopatra', hint: 'Political genius turned icon', difficulty: 'easy' },
    { word: 'The Moon Landing', hint: 'A defining moment for humanity', difficulty: 'easy' },
    { word: 'World War II', hint: 'Redrew borders and minds', difficulty: 'easy' },
    { word: 'Renaissance', hint: 'A rebirth of ideas', difficulty: 'easy' },
    { word: 'The Great Wall', hint: 'Built over centuries of effort', difficulty: 'easy' },
    { word: 'Olympic Games', hint: 'The oldest international event', difficulty: 'easy' },
    { word: 'Shakespeare', hint: 'Invented words we still use today', difficulty: 'easy' },
    { word: 'The French Revolution', hint: 'Heads rolled, literally', difficulty: 'easy' },
    // medium
    { word: 'The Silk Road', hint: 'Ideas travelled further than goods', difficulty: 'medium' },
    { word: 'Meiji Restoration', hint: 'Rapid transformation from within', difficulty: 'medium' },
    { word: 'The Printing Press', hint: 'Democratised knowledge overnight', difficulty: 'medium' },
    { word: 'Stoicism', hint: 'Ancient philosophy still in self-help books', difficulty: 'medium' },
    { word: 'The Harlem Renaissance', hint: 'Art as resistance', difficulty: 'medium' },
    { word: 'The Cold War', hint: 'Tension without direct conflict', difficulty: 'medium' },
    { word: 'The Magna Carta', hint: 'A document that constrained power', difficulty: 'medium' },
    { word: 'Cubism', hint: 'Seeing all sides simultaneously', difficulty: 'medium' },
    // hard
    { word: 'The Inca Road System', hint: 'More advanced than anyone expected', difficulty: 'hard' },
    { word: "Ashoka's Edicts", hint: 'Stone announcements', difficulty: 'hard' },
    { word: 'The Council of Nicaea', hint: 'Doctrine decided by committee', difficulty: 'hard' },
    { word: 'De Stijl', hint: 'Reduced to its essential elements', difficulty: 'hard' },
    { word: 'The Defenestration of Prague', hint: 'A window used as a weapon', difficulty: 'hard' },
    { word: 'The Zapatista Uprising', hint: 'The first internet insurgency', difficulty: 'hard' },
    { word: 'Zomia', hint: 'A region defined by escaping the state', difficulty: 'hard' },
    { word: 'The Hanseatic League', hint: 'Medieval trade bloc', difficulty: 'hard' },
  ],

  // ── Adult categories (require adult mode enabled) ──────────────────────────

  'Drinking Culture': [
    // easy
    { word: 'Beer Pong', hint: 'Competitive but casual', difficulty: 'easy' },
    { word: 'Tequila Shot', hint: 'Ritualistic', difficulty: 'easy' },
    { word: 'Happy Hour', hint: 'Incentivised socialising', difficulty: 'easy' },
    { word: 'Hangover', hint: 'The bill arrives the morning after', difficulty: 'easy' },
    { word: 'Pub Crawl', hint: 'Moving between venues', difficulty: 'easy' },
    { word: 'Last Round', hint: 'A collective decision', difficulty: 'easy' },
    { word: 'Bottomless Brunch', hint: 'A deal that becomes a trap', difficulty: 'easy' },
    { word: 'Designated Driver', hint: 'The sacrifice', difficulty: 'easy' },
    // medium
    { word: 'Skinny Bitch', hint: 'Strong and simple', difficulty: 'medium' },
    { word: 'Boilermaker', hint: 'A combination order', difficulty: 'medium' },
    { word: 'Sesh Goblin', hint: 'A recognisable party archetype', difficulty: 'medium' },
    { word: 'Pregame', hint: 'Warming up before the main event', difficulty: 'medium' },
    { word: 'Craft Beer Snob', hint: 'Has opinions about hops', difficulty: 'medium' },
    { word: 'Two-Day Hangover', hint: 'Age reveals itself', difficulty: 'medium' },
    { word: 'Open Bar Wedding', hint: 'Dangerous generosity', difficulty: 'medium' },
    { word: 'Hair of the Dog', hint: 'Fight it with more of it', difficulty: 'medium' },
    // hard
    { word: 'Spontaneous Fermentation', hint: 'Wild and unpredictable', difficulty: 'hard' },
    { word: 'Flaming Sambuca', hint: 'A theatrical order', difficulty: 'hard' },
    { word: 'Amaro Flight', hint: 'Bitter tasting exercise', difficulty: 'hard' },
    { word: 'Riff on a Negroni', hint: 'The bartender decides', difficulty: 'hard' },
    { word: 'Sour Dough Starter', hint: 'Not what it sounds like here', difficulty: 'hard' },
    { word: 'Drinking Penalty Round', hint: 'Losing has consequences', difficulty: 'hard' },
    { word: 'Worm in the Mezcal', hint: 'Optional eating', difficulty: 'hard' },
    { word: 'Overthinking at the Bar', hint: 'Anxiety with a view', difficulty: 'hard' },
  ],

  'Dirty Secrets': [
    // easy
    { word: 'Ghosting Someone', hint: 'Sudden disappearance', difficulty: 'easy' },
    { word: 'Walk of Shame', hint: 'Visible in the morning', difficulty: 'easy' },
    { word: 'Drunk Text', hint: 'Regrettable sending', difficulty: 'easy' },
    { word: 'Fake Sick Day', hint: 'Strategic absence', difficulty: 'easy' },
    { word: 'Stalking an Ex Online', hint: 'Digital nosiness', difficulty: 'easy' },
    { word: 'Lying About Your Age', hint: 'Adjusting the number', difficulty: 'easy' },
    { word: 'Keeping a Screenshot', hint: 'Evidence retention', difficulty: 'easy' },
    { word: 'Blaming Someone Else', hint: 'Deflection', difficulty: 'easy' },
    // medium
    { word: 'Unmatching After a Date', hint: 'Exit without confrontation', difficulty: 'medium' },
    { word: 'Pretending to Be Busy', hint: 'Manufactured unavailability', difficulty: 'medium' },
    { word: 'Reading Messages and Not Replying', hint: 'Seen but silent', difficulty: 'medium' },
    { word: "Eating Someone's Labelled Food", hint: 'Deliberate ignorance', difficulty: 'medium' },
    { word: 'Lying on Your CV', hint: 'Optimistic biography', difficulty: 'medium' },
    { word: 'Double-Booking Plans', hint: 'Hedging socially', difficulty: 'medium' },
    { word: 'Talking About Someone Nearby', hint: 'A calculated risk', difficulty: 'medium' },
    { word: 'Faking Enjoyment at a Gathering', hint: 'Social performance', difficulty: 'medium' },
    // hard
    { word: 'Sliding into DMs During Work Hours', hint: 'Time theft with charm', difficulty: 'hard' },
    { word: 'Regifting at Christmas', hint: 'Circular economy of gifts', difficulty: 'hard' },
    { word: 'Subtle Boast in a Humble Brag', hint: 'Compliment with a hidden agenda', difficulty: 'hard' },
    { word: 'Doomscrolling Instead of Sleeping', hint: 'Choosing discomfort', difficulty: 'hard' },
    { word: 'Using Mute Instead of Leaving Group Chats', hint: 'Passive avoidance', difficulty: 'hard' },
    { word: 'Agreeing to Plans You Will Cancel', hint: 'Future disappointment secured', difficulty: 'hard' },
    { word: 'Quietly Judging People\'s Orders', hint: 'Silent superiority', difficulty: 'hard' },
    { word: 'Blaming Autocorrect', hint: 'Technology as alibi', difficulty: 'hard' },
  ],

  // ── Cheeky tier ───────────────────────────────────────────────────────────

  'Walk of Shame': [
    { word: 'Smudged mascara',      hint: 'Evidence left on your face',         difficulty: 'easy'   },
    { word: 'Taxi shame',           hint: 'The quickest exit',                  difficulty: 'easy'   },
    { word: 'Flat shoes',           hint: 'A practical adjustment',             difficulty: 'easy'   },
    { word: 'Hickey',               hint: 'Visible reminder',                   difficulty: 'easy'   },
    { word: 'Dead phone',           hint: 'No alibi available',                 difficulty: 'medium' },
    { word: 'Sunglasses',           hint: 'Hiding something',                   difficulty: 'medium' },
    { word: 'Kebab',                hint: '3am decision that followed you home', difficulty: 'medium' },
    { word: 'Yesterday\'s clothes', hint: 'Hard to miss',                       difficulty: 'medium' },
    { word: 'Bed hair',             hint: 'Untamed evidence',                   difficulty: 'hard'   },
    { word: 'Regret',               hint: 'Arrives with the daylight',          difficulty: 'hard'   },
  ],

  'Red Flags': [
    { word: 'Love bombing',    hint: 'Overwhelming at the start',         difficulty: 'easy'   },
    { word: 'Negging',         hint: 'Backhanded compliment',             difficulty: 'easy'   },
    { word: 'Ghosting',        hint: 'Sudden disappearance',              difficulty: 'easy'   },
    { word: 'Breadcrumbing',   hint: 'Just enough to keep you interested',difficulty: 'easy'   },
    { word: 'No friends',      hint: 'Everyone else moved on',            difficulty: 'medium' },
    { word: 'Vaguebooking',    hint: 'Fishing for attention publicly',    difficulty: 'medium' },
    { word: 'Jealousy',        hint: 'Disguised as caring',               difficulty: 'medium' },
    { word: 'Lying',           hint: 'Small at first',                    difficulty: 'medium' },
    { word: 'Clingy',          hint: 'Needs constant reassurance',        difficulty: 'hard'   },
    { word: 'Narcissism',      hint: 'It\'s always about them',           difficulty: 'hard'   },
  ],

  'First Date Lies': [
    { word: 'Hiking',             hint: 'Sounds healthy',               difficulty: 'easy'   },
    { word: 'Reading',            hint: 'Sounds intelligent',           difficulty: 'easy'   },
    { word: 'Fine dining',        hint: 'Sounds sophisticated',         difficulty: 'easy'   },
    { word: 'Early riser',        hint: 'Sounds disciplined',           difficulty: 'easy'   },
    { word: 'Non-smoker',         hint: 'Technically true sometimes',   difficulty: 'medium' },
    { word: 'Gym lover',          hint: 'Aspirational truth',           difficulty: 'medium' },
    { word: 'Dog person',         hint: 'Very relatable claim',         difficulty: 'medium' },
    { word: 'Easy-going',         hint: 'Self-assessment',              difficulty: 'medium' },
    { word: 'Over it',            hint: 'Definitely not true',          difficulty: 'hard'   },
    { word: 'Financially stable', hint: 'Broad interpretation',         difficulty: 'hard'   },
  ],

  'Bar Games': [
    { word: 'Beer pong',     hint: 'Accuracy required',       difficulty: 'easy'   },
    { word: 'Ring of fire',  hint: 'Cards determine fate',    difficulty: 'easy'   },
    { word: 'Flip cup',      hint: 'Speed matters',           difficulty: 'easy'   },
    { word: 'Jenga shots',   hint: 'Structural tension',      difficulty: 'easy'   },
    { word: 'Roxanne',       hint: 'Musical trigger',         difficulty: 'medium' },
    { word: 'Fuzzy duck',    hint: 'Tongue twister',          difficulty: 'medium' },
    { word: 'Power hour',    hint: 'Endurance test',          difficulty: 'medium' },
    { word: 'Pub quiz',      hint: 'Knowledge rewarded',      difficulty: 'medium' },
    { word: 'Shot roulette', hint: 'Mystery contents',        difficulty: 'hard'   },
    { word: 'Truth dare',    hint: 'Forced honesty',          difficulty: 'hard'   },
  ],

  'House Party': [
    { word: 'Broken glass',      hint: 'Inevitable casualty',                  difficulty: 'easy'   },
    { word: 'Playlist fight',    hint: 'Musical disagreement',                 difficulty: 'easy'   },
    { word: 'Uninvited guest',   hint: 'Someone\'s plus one\'s plus one',      difficulty: 'easy'   },
    { word: 'Bathroom crying',   hint: 'Private moment, public setting',       difficulty: 'easy'   },
    { word: 'Stolen booze',      hint: 'Someone helped themselves',            difficulty: 'medium' },
    { word: 'Accidental hookup', hint: 'Unplanned development',                difficulty: 'medium' },
    { word: 'Early casualty',    hint: 'Gone before midnight',                 difficulty: 'medium' },
    { word: 'Noise complaint',   hint: 'Neighbours disagree',                  difficulty: 'medium' },
    { word: 'Missing mixer',     hint: 'Requires improvisation',               difficulty: 'hard'   },
    { word: 'Drunk confession',  hint: 'Said too much',                        difficulty: 'hard'   },
  ],

  'Hangover Cures': [
    { word: 'Bloody Mary',   hint: 'Fight it with more of it',   difficulty: 'easy'   },
    { word: 'Berocca',       hint: 'Fizzy solution',             difficulty: 'easy'   },
    { word: 'Flat Coke',     hint: 'Childhood remedy',           difficulty: 'easy'   },
    { word: 'Greasy bacon',  hint: 'Absorbs everything',         difficulty: 'easy'   },
    { word: 'McDonalds',     hint: 'Reliable comfort',           difficulty: 'medium' },
    { word: 'Electrolytes',  hint: 'Scientific approach',        difficulty: 'medium' },
    { word: 'More alcohol',  hint: 'Controversial strategy',     difficulty: 'medium' },
    { word: 'Full English',  hint: 'Comprehensive solution',     difficulty: 'medium' },
    { word: 'Dark room',     hint: 'Sensory deprivation',        difficulty: 'hard'   },
    { word: 'Self pity',     hint: 'Ineffective but common',     difficulty: 'hard'   },
  ],

  'Incognito Search': [
    { word: 'Weird symptoms',      hint: 'Best not to ask aloud',       difficulty: 'easy'   },
    { word: 'Ex\'s profile',       hint: 'Research mission',            difficulty: 'easy'   },
    { word: 'Salary check',        hint: 'Competitive curiosity',       difficulty: 'easy'   },
    { word: 'Revenge ideas',       hint: 'Hypothetical planning',       difficulty: 'easy'   },
    { word: 'Fetishes',            hint: 'Personal curiosity',          difficulty: 'medium' },
    { word: 'Conspiracy theories', hint: 'Down the rabbit hole',        difficulty: 'medium' },
    { word: 'Cosmetic surgery',    hint: 'Considering options quietly', difficulty: 'medium' },
    { word: 'STI symptoms',        hint: 'Medical concern',             difficulty: 'medium' },
    { word: 'Astrology',           hint: 'Don\'t tell anyone',          difficulty: 'hard'   },
    { word: 'Embarrassing questions', hint: 'Can\'t ask a human',       difficulty: 'hard'   },
  ],

  'Awkward Moments': [
    { word: 'Wrong wave',         hint: 'Committed too early',          difficulty: 'easy'   },
    { word: 'Forgotten name',     hint: 'Too late to ask now',          difficulty: 'easy'   },
    { word: 'Door held',          hint: 'Misjudged the distance',       difficulty: 'easy'   },
    { word: 'Reply all',          hint: 'Catastrophic button',          difficulty: 'easy'   },
    { word: 'Wrong laugh',        hint: 'Misread the room',             difficulty: 'medium' },
    { word: 'Mispronunciation',   hint: 'First time saying it aloud',   difficulty: 'medium' },
    { word: 'Ghosted encounter',  hint: 'Face to face this time',       difficulty: 'medium' },
    { word: 'Accidental like',    hint: 'Deep dive exposed',            difficulty: 'medium' },
    { word: 'Drunk boss',         hint: 'Power dynamics shift',         difficulty: 'hard'   },
    { word: 'Misread hug',        hint: 'Handshake gone wrong',         difficulty: 'hard'   },
  ],

  // ── Explicit tier ──────────────────────────────────────────────────────────

  'Kinks': [
    { word: 'Roleplay',       hint: 'Character work',            difficulty: 'easy'   },
    { word: 'Handcuffs',      hint: 'Restricted movement',       difficulty: 'easy'   },
    { word: 'Blindfold',      hint: 'Heightened other senses',   difficulty: 'easy'   },
    { word: 'Voyeurism',      hint: 'Watching from a distance',  difficulty: 'easy'   },
    { word: 'Foot fetish',    hint: 'Very specific interest',    difficulty: 'medium' },
    { word: 'Wax play',       hint: 'Temperature sensation',     difficulty: 'medium' },
    { word: 'Uniforms',       hint: 'Costume required',          difficulty: 'medium' },
    { word: 'Praise kink',    hint: 'Needs validation',          difficulty: 'medium' },
    { word: 'Power exchange', hint: 'Control dynamics',          difficulty: 'hard'   },
    { word: 'Public risk',    hint: 'Location-dependent thrill', difficulty: 'hard'   },
  ],

  'Euphemisms': [
    { word: 'Netflix chill',       hint: 'Not actually about TV',       difficulty: 'easy'   },
    { word: 'Getting lucky',       hint: 'Fortune favours',             difficulty: 'easy'   },
    { word: 'Nightcap',            hint: 'Last drink, maybe',           difficulty: 'easy'   },
    { word: 'Friends benefits',    hint: 'Extra services',              difficulty: 'easy'   },
    { word: 'Sleeping together',   hint: 'Minimal sleeping',            difficulty: 'medium' },
    { word: 'Knocking boots',      hint: 'Country expression',          difficulty: 'medium' },
    { word: 'Horizontal tango',    hint: 'Dancing, sort of',            difficulty: 'medium' },
    { word: 'Doing it',            hint: 'Deliberately vague',          difficulty: 'medium' },
    { word: 'Fooling around',      hint: 'Not serious, allegedly',      difficulty: 'hard'   },
    { word: 'Hooking up',          hint: 'Means different things to different people', difficulty: 'hard' },
  ],

  'Things Your Ex Did': [
    { word: 'Showed up',      hint: 'Uninvited appearance',                  difficulty: 'easy'   },
    { word: 'Read receipts',  hint: 'Deliberate visibility',                 difficulty: 'easy'   },
    { word: 'Vague lyrics',   hint: 'Passive aggression via playlist',       difficulty: 'easy'   },
    { word: 'Drunk text',     hint: '2am communication',                     difficulty: 'easy'   },
    { word: 'Kept stuff',     hint: 'Leverage retained',                     difficulty: 'medium' },
    { word: 'Blame shift',    hint: 'Rewriting history',                     difficulty: 'medium' },
    { word: 'Love triangle',  hint: 'Complicated situation',                 difficulty: 'medium' },
    { word: 'Fake apology',   hint: 'Technically said sorry',                difficulty: 'medium' },
    { word: 'Told everyone',  hint: 'Your business, publicly shared',        difficulty: 'hard'   },
    { word: 'Moved on fast',  hint: 'Suspiciously fast',                     difficulty: 'hard'   },
  ],

  'One Night Stand': [
    { word: 'Dawn escape',      hint: 'Early morning exit strategy',   difficulty: 'easy'   },
    { word: 'Fake meeting',     hint: 'Invented excuse',               difficulty: 'easy'   },
    { word: 'Shame Uber',       hint: 'Discreet transport',            difficulty: 'easy'   },
    { word: 'Fake name',        hint: 'Protective measure',            difficulty: 'easy'   },
    { word: 'Bathroom text',    hint: 'Covert communication',          difficulty: 'medium' },
    { word: 'Accidental like',  hint: 'Digital evidence of research',  difficulty: 'medium' },
    { word: 'Morning regret',   hint: 'Daylight changes things',       difficulty: 'medium' },
    { word: 'Breakfast debate', hint: 'To stay or not',                difficulty: 'medium' },
    { word: 'Lost underwear',   hint: 'Left behind',                   difficulty: 'hard'   },
    { word: 'Wrong address',    hint: 'Navigational error',            difficulty: 'hard'   },
  ],

  'Drunk Regrets': [
    { word: 'Texted ex',          hint: 'Emotional impulse',               difficulty: 'easy'   },
    { word: 'Called mum',         hint: 'Seeking comfort at 2am',          difficulty: 'easy'   },
    { word: 'Big promise',        hint: 'Very committed at the time',      difficulty: 'easy'   },
    { word: 'Risky photo',        hint: 'Evidence created',                difficulty: 'easy'   },
    { word: 'Drunk shopping',     hint: 'Morning surprise delivery',       difficulty: 'medium' },
    { word: 'Confessed feelings', hint: 'Liquid courage did the talking',  difficulty: 'medium' },
    { word: 'Booked flight',      hint: 'Ambitious decision',              difficulty: 'medium' },
    { word: 'Started fight',      hint: 'Escalated quickly',               difficulty: 'medium' },
    { word: 'Overshared',         hint: 'Too much information',            difficulty: 'hard'   },
    { word: 'Accepted plans',     hint: 'Future you\'s problem',           difficulty: 'hard'   },
  ],

  'Adult Scenarios': [
    // easy
    { word: 'One Night Stand', hint: 'No strings attached', difficulty: 'easy' },
    { word: 'Speed Dating', hint: 'Rapid assessment', difficulty: 'easy' },
    { word: 'Friends With Benefits', hint: 'An unclear arrangement', difficulty: 'easy' },
    { word: 'Sliding into DMs', hint: 'A bold online move', difficulty: 'easy' },
    { word: 'Third Date Rule', hint: 'An unwritten guideline', difficulty: 'easy' },
    { word: 'Love Bombing', hint: 'Overwhelming at first', difficulty: 'easy' },
    { word: 'Situationship', hint: 'Undefined connection', difficulty: 'easy' },
    { word: 'Soft Launch', hint: 'Strategic reveal', difficulty: 'easy' },
    // medium
    { word: 'Orbiting an Ex', hint: 'Close but untouchable', difficulty: 'medium' },
    { word: 'Cushioning', hint: 'Keeping options open', difficulty: 'medium' },
    { word: 'Breadcrumbing', hint: 'Just enough to maintain interest', difficulty: 'medium' },
    { word: 'Rizz', hint: 'Effortless charm', difficulty: 'medium' },
    { word: 'Cuffing Season', hint: 'Pairing driven by weather', difficulty: 'medium' },
    { word: 'Stashing', hint: 'Kept out of public sight', difficulty: 'medium' },
    { word: 'Submarining', hint: 'Resurfacing without explanation', difficulty: 'medium' },
    { word: 'Mixed Signals at 2am', hint: 'Ambiguous late message', difficulty: 'medium' },
    // hard
    { word: 'Slow Fade', hint: 'A gradual disappearing act', difficulty: 'hard' },
    { word: 'Peacocking', hint: 'Standing out to attract', difficulty: 'hard' },
    { word: 'Attachment Style Conversation', hint: 'Therapy speak on a date', difficulty: 'hard' },
    { word: 'Delusional Optimism After a First Date', hint: 'Projecting a future', difficulty: 'hard' },
    { word: 'Hyper-Analysing a Single Text', hint: 'Reading too much into words', difficulty: 'hard' },
    { word: 'The Almost Relationship', hint: 'Nearly but not quite', difficulty: 'hard' },
    { word: 'Treating Red Flags as Quirks', hint: 'Optimism over evidence', difficulty: 'hard' },
    { word: 'Manifesting a Reply', hint: 'Wishful thinking digitally', difficulty: 'hard' },
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
  // cheeky tier
  'Walk of Shame':     { icon: '🚶', adult: true  },
  'Red Flags':         { icon: '🚩', adult: true  },
  'First Date Lies':   { icon: '💬', adult: true  },
  'Bar Games':         { icon: '🎮', adult: true  },
  'House Party':       { icon: '🏠', adult: true  },
  'Hangover Cures':    { icon: '🤢', adult: true  },
  'Incognito Search':  { icon: '🕵️', adult: true  },
  'Awkward Moments':   { icon: '😬', adult: true  },
  // explicit tier
  'Kinks':             { icon: '🔞', adult: true  },
  'Euphemisms':        { icon: '😏', adult: true  },
  'Things Your Ex Did':{ icon: '💔', adult: true  },
  'One Night Stand':   { icon: '🌙', adult: true  },
  'Drunk Regrets':     { icon: '🥴', adult: true  },
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
