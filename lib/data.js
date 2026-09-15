export const SUBJECTS = [
  'Mathematics','English Language','Physics','Chemistry','Biology','Further Mathematics',
  'Economics','Government','Literature','Geography','Computer Studies','Civic Education',
];

export const TRACKS = {
  anime: {
    label: '⚡ Anime',
    tag: 'Anime track',
    img: '/tracks/anime.jpeg',
    title: 'The Unmovable Blade',
    ep: 'Physics · Grade 10 · EP 07 · 6 min',
    bg: 'linear-gradient(160deg,#2A1E63,#7C6CFF 55%,#F073B7)',
    text: `A swordsman stands mid-battlefield, blade planted. Armies crash around him; he does not move — until a force acts. His stillness <b>is</b> the law: every body remains at rest, or in uniform motion, unless acted on by an external force. The fight scene isn't decoration. The fight scene is the physics.`,
  },
  movie: {
    label: '🎬 Blockbuster',
    tag: 'Blockbuster track',
    img: '/tracks/blockbuster.jpeg',
    title: 'Zero Velocity',
    ep: 'Physics · Grade 10 · EP 07 · 6 min',
    bg: 'linear-gradient(160deg,#3A0F0F,#E05656 60%,#F0B429)',
    text: `A stunt driver's car dies on the tracks. No engine, no motion — and no stopping once it's pushed. Two minutes of cinema where the hero can only survive by using inertia, not fighting it. The audience learns the law because the plot depends on it.`,
  },
  ball: {
    label: '⚽ Football',
    tag: 'Football track',
    img: '/tracks/football.jpeg',
    title: 'The Dead Ball',
    ep: 'Physics · Grade 10 · EP 07 · 6 min',
    bg: 'linear-gradient(160deg,#0D3B22,#3DBB6E 60%,#B7F5C7)',
    text: `The ball sits on the penalty spot. It will sit there forever — until the strike. Then it will not stop until grass, keeper or net act on it. One kick, slowed frame by frame, teaches the full statement of Newton's First Law before the crowd finishes roaring.`,
  },
};

// Entire library is pre-launch: every title is marked locked (coming soon).
export const SHELVES = [
  {
    heading: 'Physics & Chemistry · Grades 10–12',
    items: [
      { t: 'Surface Tension', s: 'Physics', ep: 'EP 03 · 5 min', bg: 'linear-gradient(165deg,#173B6B,#38B6C9)', locked: true },
      { t: 'The Lever', s: 'Physics', ep: 'EP 09 · 6 min', bg: 'linear-gradient(165deg,#4A2A0E,#C97A3D)', locked: true },
      { t: "Newton's Laws", s: 'Physics', ep: 'EP 07 · 6 min', bg: 'linear-gradient(165deg,#3A0F0F,#E05656)', locked: true },
      { t: 'Electrolysis', s: 'Chemistry', ep: 'EP 12 · 7 min', bg: 'linear-gradient(165deg,#0E3D44,#38B6C9)', locked: true },
      { t: 'Conductors', s: 'Physics', ep: 'EP 05 · 5 min', bg: 'linear-gradient(165deg,#241E63,#7C6CFF)', locked: true },
      { t: 'The Mole Concept', s: 'Chemistry', ep: 'EP 08 · 6 min', bg: 'linear-gradient(165deg,#402A63,#B75CCF)', locked: true },
      { t: 'Gravity', s: 'Physics', ep: 'EP 01 · 5 min', bg: 'linear-gradient(165deg,#101A3A,#3F6BD9)', locked: true },
    ],
  },
  {
    heading: 'Mathematics & Biology · Grades 7–12',
    items: [
      { t: 'Basic Algebra', s: 'Maths', ep: 'EP 02 · 5 min', bg: 'linear-gradient(165deg,#153A2C,#3DBB6E)', locked: true },
      { t: 'Calculus', s: 'Maths', ep: 'EP 14 · 8 min', bg: 'linear-gradient(165deg,#1A2A50,#4A7CE0)', locked: true },
      { t: 'DNA Replication', s: 'Biology', ep: 'EP 06 · 6 min', bg: 'linear-gradient(165deg,#3B1030,#E05691)', locked: true },
      { t: 'Photosynthesis', s: 'Biology', ep: 'EP 04 · 5 min', bg: 'linear-gradient(165deg,#123A18,#57C94F)', locked: true },
      { t: 'Cellular Biology', s: 'Biology', ep: 'EP 10 · 7 min', bg: 'linear-gradient(165deg,#0E3440,#38B6C9)', locked: true },
      { t: 'The Amino Acid Code', s: 'Biology', ep: 'EP 15 · 7 min', bg: 'linear-gradient(165deg,#3A2A10,#D9A43F)', locked: true },
      { t: 'Probability', s: 'Maths', ep: 'EP 11 · 6 min', bg: 'linear-gradient(165deg,#2A1E63,#7C6CFF)', locked: true },
    ],
  },
];

export const FAQS = [
  {
    q: 'Is Learnoir aligned with the school curriculum?',
    a: 'Yes. Every episode maps to a specific syllabus point on the national curriculum, from Grade 7 to Grade 12 (JSS1–SS3 in our launch market, Nigeria). The entertainment is the delivery — the content is exactly what the exam tests.',
  },
  {
    q: 'How is this cheaper than private tutoring?',
    a: 'In our launch market a home lesson teacher typically charges ₦15,000–₦20,000 monthly for one or two subjects. Learnoir covers every subject for ₦3,000 a month — or ₦25,000 for the entire year, less than two months of home lessons. The gap is similar in most countries.',
  },
  {
    q: 'What exactly is an interest track?',
    a: 'When your child registers they choose what they already love — anime, blockbuster movies, football. Every topic is then taught through that world, so the scene itself carries the concept. Same syllabus, different story.',
  },
  {
    q: 'What does my child need to use it?',
    a: 'Any phone, tablet or laptop with a browser. No app store, no special device. Lessons are produced to stream light on limited data plans.',
  },
  {
    q: 'Can I see what my child is actually learning?',
    a: "Every week you receive a plain-language report: topics watched, quiz results, and what comes next — so the value is visible long before results day.",
  },
  {
    q: 'Which countries can use Learnoir?',
    a: 'We are launching with the Nigerian curriculum and expanding country by country. Anywhere in the world, you can subscribe and follow the launch syllabus today; local curriculum editions roll out as we grow.',
  },
];

// Pricing now lives in lib/currency.js (location-aware, anchored on ₦3,000/₦25,000).
