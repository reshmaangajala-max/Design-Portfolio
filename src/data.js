// ─────────────────────────────────────────────────────────────
// All editable content lives here. Change text, links and images
// in this file — you shouldn't need to touch the components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Reshma Angajala',
  firstName: 'Reshma',
  role: 'Product Designer',
  // TODO: replace with your real email, LinkedIn and resume links
  email: 'reshmaangajala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reshma-angajala',
  resume: '/resume.pdf', // put resume.pdf inside the /public folder
  location: 'Hyderabad · open to Bangalore',
  status: 'Open to junior product design roles',
}

export const hero = {
  eyebrow: 'Product Designer',
  intro:
    'A dreamer who designs for how every click feels. I research deeply, design with intention, and care about what happens the moment someone taps a button.',
  photo: 'images/hero-cutout.webp',
}

export const marquee = [
  'Research first',
  '0 → 1 products',
  'Design systems',
  'Builds what she designs',
  'Asks a lot of questions',
  'Cares how every click feels',
]

export const projects = [
  {
    id: 'reyo',
    route: '/work/reyo',
    eyebrow: '0 → 1 product · Chrome extension',
    title: 'Reyo',
    headline: 'The 30-second answer, not the 40-minute video.',
    summary:
      'Designers save references everywhere and find them nowhere. Reyo saves each one with a reason, then brings it back right when you need it, without leaving Figma.',
    stats: [
      { value: '25', label: 'designers surveyed' },
      { value: '84%', label: "couldn't find saves quickly" },
      { value: 'MVP', label: 'live, in active development' },
    ],
    tags: ['User research', 'Product design', 'Design system', 'Built end to end'],
    image: 'images/reyo-results.jpg',
    imageAlt: 'Reyo results panel showing saved references matched to a pricing page design',
    tone: 'berry',
    cta: 'Read case study',
  },
  {
    id: 'tara',
    route: '/work/tara',
    eyebrow: 'Company project · Android app',
    title: 'Tara',
    headline: 'Life admin, handled before it becomes a deadline.',
    summary:
      'An AI assistant for the renewals, bills and documents people forget until it’s too late. Designed from research to UI at Hanyaa, greenlit by the CEO.',
    stats: [
      { value: '25+', label: 'people surveyed' },
      { value: '10', label: 'colleagues interviewed' },
      { value: '15+', label: 'apps tested' },
    ],
    tags: ['Discovery', 'Interaction design', 'Mobile'],
    image: null,
    phoneImage: 'images/tara/horizon.webp',
    tone: 'lilac',
    cta: 'Read case study',
  },
]

// Each key shows a "proof" line when pressed — real evidence, not buzzwords.
export const skills = [
  { label: 'Product Design', proof: 'Took Reyo from a problem I had to a working MVP.', accent: false },
  { label: 'User Research', proof: '25 survey responses and designer interviews behind Reyo.', accent: true },
  { label: 'Survey Design', proof: 'Wrote the Reyo survey to ask about real past moments, not opinions.', accent: false },
  { label: 'Competitive Analysis', proof: 'Mapped Savee, Recall, Pieces, Refero and more by retrieve vs organise.', accent: false },
  { label: 'Wireframing & Prototyping', proof: 'Explored three layouts for every key Reyo screen before polishing one.', accent: true },
  { label: 'Interaction Design', proof: 'Designed a permission-first flow: Reyo only reads your frame when you ask.', accent: false },
  { label: 'Design Systems', proof: 'Built tokens with light and dark modes plus a full component library in Figma.', accent: false },
  { label: 'High-fidelity UI', proof: 'Every Reyo screen is built from the same components and variables.', accent: true },
  { label: 'AI-assisted Building', proof: 'Shipped Reyo’s Chrome extension and web app using AI as a pair programmer.', accent: false },
  { label: 'HTML / CSS / React', proof: 'CSE graduate. I built this site in React.', accent: false },
]

// "Working with me" sticky notes. label = small print, text = handwritten.
// color: butter | pink | lilac | mint | peach | sky   pin: red | violet | blue | green | ink
export const stickies = [
  { label: 'First move', text: 'Questions. Lots of them.', color: 'butter', pin: 'red' },
  { label: 'When stuck', text: 'Music, dance, or do nothing', color: 'lilac', pin: 'ink' },
  { label: 'Best hours', text: 'Midnight, alone. World off, ideas on.', color: 'sky', pin: 'violet' },
  { label: 'Reach me', text: 'Quick calls or Figma comments', color: 'mint', pin: 'red' },
  { label: 'Known for', text: 'Noticing the small things', color: 'peach', pin: 'blue' },
  { label: 'Fuel', text: 'Stories, films & restaurant menus', color: 'butter', pin: 'green' },
]

// The one honest bug. Tap the note to flip it to the workaround.
export const bugNote = {
  label: 'Known bug #01',
  text: 'Slow first idea',
  fixLabel: 'Workaround',
  fix: 'Give me the why. The ideas follow, fast.',
}

export const polaroid = {
  photo: 'images/polaroid.jpg',
  caption: "Let's build something real",
}
