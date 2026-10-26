// ─────────────────────────────────────────────────────────────
// Reyo case study content. To add a screen, export it from Figma,
// put it in public/images/reyo/ and set `image: 'images/reyo/<file>.png'`.
// While `image` is null, a labelled placeholder shows instead.
// ─────────────────────────────────────────────────────────────

export const reyo = {
  hero: {
    chips: ['Chrome extension', 'Desktop app'],
    badge: '0 → 1 project',
    title: 'The 30-second answer, not the 40-minute video',
    intro:
      'Every designer has a graveyard of saved videos, images and articles, spread across apps that don’t talk to each other. Reyo saves each one with a reason, then brings back the exact moment you need, right inside your work.',
    meta: [
      {
        label: 'My role',
        value: 'Solo product designer and builder. I owned every step, from the first survey to the working MVP.',
        items: ['User research & survey', 'Competitive analysis', 'Information architecture', 'User flows & wireframes', 'UI & interaction design', 'Design system', 'Built the MVP'],
      },
      { label: 'Timeline', value: '5 months · ongoing' },
      { label: 'Status', value: 'Working MVP, in active development' },
    ],
    // Export Screen 5 as a flat 1920×1080 image (no mockup) — the laptop is drawn in code.
    image: 'images/reyo/screen-5-panel.webp',
    imageLabel: 'Reyo results panel: saves matched to the pricing page you are designing',
    device: 'laptop',
    // 'figma' = a Figma editor drawn in code behind the panel image.
    // 'contain' = panel on a plain canvas. 'cover' = a full 16:9 export fills the screen.
    fit: 'figma',
    stats: [
      { value: '25', label: 'designers surveyed' },
      { value: '84%', label: 'couldn’t find a save quickly' },
      { value: '4.9', label: 'apps used to save, on average' },
    ],
  },

  problem: {
    eyebrow: 'The problem',
    title: 'You’ve lived this too',
    cards: [
      { kicker: 'Mid-project', text: 'You’re deep in Figma, Illustrator or Premiere and you need that one reference.' },
      { kicker: 'So you go looking', text: 'YouTube, Pinterest, Instagram, your screenshots folder, your notes.' },
      { kicker: 'Still nothing?', text: 'You ask ChatGPT or Claude to make something “close enough”.' },
      { kicker: 'Turns out', text: 'The exact reference was already saved. You just couldn’t find it when it mattered.', highlight: true },
    ],
    stat: { value: '80%', text: 'of designers I surveyed said their saving system doesn’t work.' },
    quote: { text: 'I actually forget that I even had something saved for that situation.', who: 'Survey respondent' },
  },

  loop: {
    eyebrow: 'The idea',
    title: 'Save it with a reason. Find it in the moment.',
    steps: [
      { name: 'Save', text: 'One click from YouTube, with a note to future you.' },
      { name: 'Understand', text: 'Reyo reads what’s inside, down to the timestamp.' },
      { name: 'Organise', text: 'Sorted by what you build: buttons, forms, colour.' },
      { name: 'Find', text: 'One shortcut in Figma brings the right save back.' },
    ],
  },

  journey: {
    eyebrow: 'My process · Lean UX',
    title: 'How I got to this idea',
    sub: 'Reyo started with my own problem, not a brief. So I treated it as a guess to test: think, make, check, and loop again.',
    stages: [
      {
        name: 'Spark',
        q: 'Is this a real gap?',
        text: 'My Instagram saves never came back when I needed them. A quick search found no tool that brings saves back while you work.',
        tools: ['My own pain', 'Quick gap check'],
      },
      {
        name: 'Think',
        q: 'Solving the right problem',
        text: 'I went deep: what already exists, and what designers actually struggle with.',
        tools: ['Survey · 25 designers', 'Interviews · 5', 'Competitor matrix', 'Affinity mapping', 'Jobs to be done', 'How might we'],
      },
      {
        name: 'Make',
        q: 'Solving the problem right',
        text: 'Every insight became one decision, then layouts, a visual system and a working build.',
        tools: ['Insight → decision table', 'Wireframes', 'Design system', 'UI', 'Working MVP'],
      },
      {
        name: 'Check',
        q: 'Did it hold up?',
        text: 'Put it in front of reviewers and designers. Three things changed: organise by UI part, keep “why I saved this”, start with YouTube.',
        tools: ['ScaleHouse review · 17.5/25', 'Designer feedback'],
      },
    ],
    back: 'Next loop: usability tests with 5 designers',
  },

  personas: {
    eyebrow: 'Who I designed for',
    title: 'Two designers, one problem',
    sub: 'Built from the 25 survey answers and 5 interviews. Each one is a type of saver I kept meeting.',
    cards: [
      {
        name: 'Ananya Rao',
        meta: '23 · Junior UI designer at a Bangalore startup',
        type: 'The Collector',
        // Drop a photo at public/images/reyo/persona-ananya.webp (4:5, ~800×1000) and set image to that path.
        image: 'images/reyo/persona-ananya.webp',
        initial: 'A',
        quote: 'I save everything on Instagram. I’ve never opened that folder again.',
        lifestyle: [
          'Learns from YouTube tutorials and Instagram carousels on her commute',
          'Saves 10+ references a day across Instagram, Pinterest and screenshots',
          'Works on 2–3 screens a day under tight startup deadlines',
        ],
        pains: [
          'Can’t remember which app she saved something in',
          'Screenshots folder has thousands of images with no names',
          'Rewatches a 20-minute video to find one 30-second trick',
        ],
        problem: 'She saves a lot, but none of it comes back when she’s stuck in Figma, so she starts from scratch every time.',
      },
      {
        name: 'Karthik Menon',
        meta: '27 · Product designer, 2.5 years, SaaS company',
        type: 'The Organiser',
        // Drop a photo at public/images/reyo/persona-karthik.webp (4:5, ~800×1000) and set image to that path.
        image: 'images/reyo/persona-karthik.webp',
        initial: 'K',
        quote: 'For buttons it will be separate, for dropdown it will be separate… I can just go to buttons and search.',
        lifestyle: [
          'Keeps neat folders in Notion and Pinterest boards by topic',
          'Builds and maintains his team’s design system',
          'Spends weekends saving references for upcoming projects',
        ],
        pains: [
          'Organising takes longer than the actual saving',
          'Forgets why he saved something by the time he needs it',
          'Has to leave Figma and dig through boards mid-task',
        ],
        problem: 'His saves are tidy but disconnected from his work, so finding the right one still breaks his flow.',
      },
    ],
  },

  process: {
    eyebrow: 'How I built it',
    title: 'Behind the loop',
    steps: [
      {
        tag: 'User research',
        title: 'First, I made sure I wasn’t the only one',
        points: [
          'Designers save everywhere: YouTube, Instagram, Pinterest, screenshots. 4.9 apps on average',
          'They forget a save exists, or why they saved it. 84% couldn’t find one quickly',
          'Looking means leaving the work, so they give up, re-watch, or ask AI for “close enough”',
        ],
        resultLabel: null,
        result: 'Everyone saves. Almost no one finds it again when they need it.',
        // Sticky-note wall shown instead of an image. 25 survey responses + 5 interviews.
        // `real: true` = exact words from my research. The rest are DRAFTS written from
        // the patterns — replace each with a real line from the survey/interview notes.
        notes: [
          { who: 'Design intern', source: 'Interview', color: 'butter', quote: 'I save everything on Instagram. I’ve never opened that folder again.' },
          { who: 'Junior UI designer', source: 'Survey', color: 'pink', real: true, quote: 'I actually forget that I even had something saved for that situation.' },
          { who: 'Product designer, 2.5 yrs', source: 'Interview', color: 'lilac', real: true, quote: 'For buttons it will be separate, for dropdown it will be separate… I can just go to buttons and search.' },
          { who: 'UI/UX designer', source: 'Interview', color: 'mint', quote: 'I remember the video, not where it is. So I just watch the whole thing again.' },
          { who: 'Visual designer', source: 'Survey', color: 'sky', quote: 'My screenshots folder has thousands of images. Finding one takes longer than making it.' },
          { who: 'Junior product designer', source: 'Interview', color: 'peach', quote: 'By the time I find the reference, I’ve lost the idea I had.' },
          { who: 'Design intern', source: 'Survey', color: 'mint', quote: 'When I can’t find it, I just ask ChatGPT to make something close.' },
          { who: 'Freelance designer', source: 'Survey', color: 'butter', quote: 'I saved it for a reason. I just don’t remember what the reason was.' },
        ],
        image: null,
        imageLabel: 'What designers told me',
      },
      {
        tag: 'Market research',
        title: 'Then I checked who’s already solving it',
        points: [
          'Most are separate apps. To find a save, you leave your work and go looking',
          'The ones inside Figma show boards or someone else’s library, not your saves matched to what you’re designing',
          'None keep why you saved it, or jump to the exact moment in a video',
        ],
        resultLabel: null,
        result: 'Organising is solved. Finding the right save while you work isn’t.',
        image: 'images/reyo/competitor-matrix.webp',
        imageLabel: 'Competitor matrix',
      },
      {
        tag: 'Synthesis',
        title: 'Patterns started repeating',
        points: ['Grouped survey answers and interview quotes into 6 themes, from “saved everywhere” to “AI fills in”', 'Three kinds of savers: Collectors, Organisers and Searchers'],
        resultLabel: 'Found',
        result: 'The need hits mid-design, but by then the save has lost its meaning.',
        image: 'images/reyo/affinity-map.webp',
        imageLabel: 'Affinity map',
      },
      {
        tag: 'Ideation',
        title: 'I framed the jobs, then the question',
        points: ['Four jobs: find it mid-design, remember why I saved it, one place for everything, jump to the moment that matters', 'How might we bring back the right save without making designers leave their work?'],
        resultLabel: 'Found',
        result: 'The product isn’t a better folder. It’s a better moment of recall.',
        image: 'images/reyo/jtbd.webp',
        imageLabel: 'Jobs to be done',
      },
      {
        tag: 'Design decisions',
        title: 'Every feature traces back to an insight',
        points: [
          'Seven insights from research, each turned into one decision',
          'For each one: what I chose not to build, and how I’d measure success',
        ],
        resultLabel: null,
        result: 'Every feature traces back to something designers told me.',
        // Shown as a readable, clickable table. `image` is the full board, opened via "View full table".
        decisions: [
          { insight: 'Saving is easy. Finding is broken.', decision: 'Universal search + command bar', detail: 'One search across all your saves, opened with a shortcut (⌘⇧R) from any app.', not: 'Another folder or tag organiser. Competitors already do that, and 80% said organising doesn’t last.', measure: 'Time to find a known save (goal: under 10 s) · % of searches ending in a click' },
          { insight: 'The real moment is mid-design.', decision: '“Look at what I’m working on”', detail: 'Reyo reads the current Figma file only when asked and suggests matching saves, labelled “Your picks” first.', not: 'Background screen scanning. It creates the privacy risk ScaleHouse flagged, and Rewind shut down after always-on capture.', measure: '% of finder opens using “Look at my screen” · opt-in rate for “do this automatically”' },
          { insight: 'A save without its reason is forgotten.', decision: '“Note to future you”', detail: 'On every save, AI suggests a short reason (“Sticky CTA button animation”) that you can accept or edit in one tap.', not: 'Forcing users to type a note. It slows saving, and people would skip it or quit.', measure: '% of saves with a note · % of AI notes kept vs edited' },
          { insight: 'Images are the core; video is for “how”.', decision: 'Images first; video saved by moment', detail: 'Saves “from 4:32” by default, with “Pick a range” or “Whole video” as options.', not: 'Storing full video files or rewatching whole tutorials. Expensive to store, YouTube limits deep analysis, and designers only need 30–40 seconds.', measure: 'Share of saves by type · timestamp-jump clicks per video save' },
          { insight: 'Designers think in components, not topics.', decision: 'Collections by UI part', detail: 'Defaults by role (buttons, navigation, forms, onboarding) plus “+ New” for custom collections.', not: 'Topic-only auto-categories. They don’t match how designers search while building.', measure: 'Saves found via collections vs search · custom collections created per user' },
          { insight: 'Saves are scattered across ~5 platforms.', decision: 'Connect sources + one-click save', detail: 'Auto-import from connected sources and a save button on each platform. Launching with one source done well.', not: 'Five integrations at launch. ScaleHouse and P3 both said scope down. Instagram goes last because of account-ban risk.', measure: 'Saves per user per week · % of users who connect a second source' },
          { insight: 'Search and AI are the fallback.', decision: 'Your picks first, then web results', detail: 'And later a Claude connector that brings your saves into AI chats.', not: 'Generic AI answers only. AI already does that; Reyo’s edge is your taste.', measure: 'Clicks on “Your picks” vs “From the web” · connector usage (later)' },
        ],
        image: 'images/reyo/decision-table.webp',
        imageLabel: 'Insight → decision table',
      },
      {
        tag: 'Design system',
        title: 'A system, not just screens',
        points: [
          '39 colours, 11 text styles, 10 spacing and 6 radius tokens, all built as Figma variables',
          'Berry and cream with DM Sans: warm, calm, and not another AI-purple tool',
        ],
        resultLabel: null,
        result: 'Dark mode was a mode switch, not a redesign.',
        // Rendered as a live snapshot card; these are the full Figma frames behind "View full system".
        system: [
          { name: 'Colour', image: 'images/reyo/ds-color.webp' },
          { name: 'Type', image: 'images/reyo/ds-type.webp' },
          { name: 'Spacing & radius', image: 'images/reyo/ds-spacing.webp' },
        ],
        image: null,
        imageLabel: 'Foundations + components',
      },
      {
        tag: 'Wireframes',
        title: 'I explored before I polished',
        points: ['Greyscale layouts for every key screen: save card, Reyo bar and results panel', 'Save card: save the exact moment, not the whole video', 'Results: list + preview, scan on the left, decide on the right'],
        resultLabel: 'Chose',
        result: 'Layouts that say “I know what you’re working on”, before any colour was added.',
        wirekit: true,
        image: null,
        imageLabel: 'Greyscale wireframe options',
      },
    ],
  },

  goals: {
    eyebrow: 'After the research',
    title: 'So I set two goals',
    items: [
      { label: 'User goal', text: 'Find the right save in seconds, without leaving Figma.', measure: 'Time to find a save' },
      { label: 'Business goal', text: 'Make Reyo a daily habit, so designers keep coming back. That’s what a paid plan is built on.', measure: 'Weekly returning users' },
    ],
  },

  userflow: {
    eyebrow: 'User flow',
    title: 'Two moments: saving and finding',
    sub: 'Saving takes one click. Finding happens right where you design, with no app switching.',
  },

  ia: {
    eyebrow: 'Information architecture',
    title: 'Organised by what you build',
    sub: 'Saves are grouped by category (the C in LATCH): buttons, colour, onboarding. Not by the app you saved them from.',
    root: 'Reyo',
    branches: [
      {
        name: 'Save',
        where: 'Browser extension',
        l3: { name: 'Save card', info: ['Exact timestamp', 'Why I saved it', 'Source + title', 'AI tags by UI part'] },
        l4: { name: 'Sign-in', info: ['First save only', 'One tap'] },
      },
      {
        name: 'Library',
        where: 'Web app',
        l3: { name: 'Home', info: ['Search', 'Recent saves', 'All saves by topic', 'Filters'] },
        l4: { name: 'Gathering dust', info: ['Unopened in a month', 'Tidy up'] },
      },
      {
        name: 'Collections',
        where: 'By UI part',
        l3: { name: 'Category', info: ['Components', 'Foundations', 'Patterns'] },
        l4: { name: 'Group page', info: ['e.g. Buttons', 'Videos, images, links', 'AI summary'] },
      },
      {
        name: 'Find',
        where: 'Panel in your design tool',
        l3: { name: 'Results', info: ['Matched saves', 'Why it matched', 'Search by name or UI part'] },
        l4: { name: 'Preview', info: ['Jump to timestamp', 'Paste image', 'Your past note'] },
      },
      {
        name: 'Settings',
        where: 'Account',
        l3: { name: 'Settings page', info: ['Sources', 'Privacy & screen access', 'Profile & shortcut'] },
      },
    ],
  },


  solution: {
    eyebrow: 'The solution',
    title: 'Three moments, each built on something designers told me',
    moments: [
      {
        label: 'Moment 01',
        title: 'Save it with a reason',
        insight: '“I actually forget that I even had something saved for that situation.”',
        image: 'images/reyo/moment-1-save.webp',
        imageLabel: 'Screen 1 · YouTube with the save card open',
        device: 'laptop',
        // Sharp copy of the save card, popped out over the screen so it stays readable.
        // x/y = card centre and w = width, in % of the screen.
        pop: { image: 'images/reyo/moment-1-card.webp', x: 57.7, y: 49.9, w: 31 },
        imageRatio: '16 / 9',
        notes: [
          { title: 'A note to future you', text: 'AI drafts why you saved it. Edit in a tap.', at: { x: 42.4, y: 40.9 }, box: { x: 19, y: 36.4, side: 'left', w: 21 } },
          { title: 'The moment, not the video', text: 'Save 5:56 – 6:40, not all 25 minutes.', at: { x: 73.4, y: 57.7 }, box: { x: 76.5, y: 53.2, side: 'right', w: 21 } },
          { title: 'Sorted by what it’s for', text: 'Filed by UI part, like a design system.', at: { x: 42.4, y: 71.4 }, box: { x: 19, y: 66.9, side: 'left', w: 21 } },
        ],
      },
      {
        label: 'Moment 02',
        title: 'It asks before it looks',
        insight: 'Designers want help mid-work. They don’t want something watching them.',
        image: 'images/reyo/moment-2-choice.webp',
        imageLabel: 'Screen 4 · Reyo asks how to find saves, over the selected pricing frame in Figma',
        imageRatio: '16 / 9',
        device: 'laptop',
        fit: 'figma',
        // Where the bar sits in the 1600×900 Figma scene. tag: false = Reyo hasn't been allowed to look yet.
        scene: { left: 800, top: 170, height: 440, tag: false, shadow: false },
        // Bigger, sharp copy of the bar popped out so the text is readable.
        pop: { image: 'images/reyo/moment-2-choice.webp', x: 58, y: 43.3, w: 40.2, flat: true },
        notes: [
          { title: 'Your call', text: 'Let Reyo look, or search yourself. Nothing runs until you choose.', at: { x: 73.3, y: 39.7 }, box: { x: 80, y: 31, side: 'right', w: 19 } },
          { title: 'Says what it does, and doesn’t', text: 'Looks once. Never stores your frame.', at: { x: 70, y: 48 }, box: { x: 80, y: 49, side: 'right', w: 19 } },
        ],
      },
      {
        label: 'Moment 03',
        title: 'The right save, at the right moment',
        insight: '84% of designers couldn’t find a save quickly when they needed it.',
        image: 'images/reyo/moment-3-results.webp',
        imageLabel: 'Screen 5 · Reyo results panel over the selected pricing frame in Figma',
        imageRatio: '16 / 9',
        big: true,
        device: 'laptop',
        fit: 'figma',
        scene: { left: 320, top: -7, height: 914, tag: true, shadow: false },
        pop: { image: 'images/reyo/moment-3-results.webp', x: 50, y: 50, w: 60, flat: true },
        notes: [
          { title: 'Knows your context', text: 'Reads the frame you’re on, only after you said yes.', at: { x: 59.9, y: 4.4 }, box: { x: 81.2, y: 2, side: 'right', w: 18 } },
          { title: 'Past you’s note comes back', text: 'You see why you saved it, not just a title.', at: { x: 20.3, y: 28.2 }, box: { x: 0.8, y: 23.7, side: 'left', w: 18 } },
          { title: 'Says why it matched', text: 'Points to your Pro card, so you can trust the pick.', at: { x: 70.9, y: 64.7 }, box: { x: 81.2, y: 60.2, side: 'right', w: 18 } },
        ],
      },
      {
        label: 'Moment 04',
        title: 'Not just videos. Whatever you saved.',
        insight: 'UI screenshots are the most saved type, at 68%. Designers save across 4.9 apps on average.',
        image: 'images/reyo/moment-4-image.webp',
        imageLabel: 'Screen 6 · the same results panel, now previewing a saved Pinterest screenshot',
        imageRatio: '16 / 9',
        big: true,
        device: 'laptop',
        fit: 'figma',
        scene: { left: 380, top: -8, height: 915, tag: true, shadow: false },
        pop: { image: 'images/reyo/moment-4-image.webp', x: 50, y: 50, w: 52.5, flat: true },
        notes: [
          { title: 'Image first', text: 'No player, no timeline. Paste it straight into Figma.', at: { x: 72.9, y: 31.9 }, box: { x: 77.5, y: 27.4, side: 'right', w: 21.5 } },
          { title: 'A save becomes a next step', text: 'Maps what works in the shot to your Pro card. Suggestions only.', at: { x: 73, y: 69.5 }, box: { x: 77.5, y: 65, side: 'right', w: 21.5 } },
        ],
      },
    ],
    chambers: {
      quote: '“For buttons it will be separate, for dropdown it will be separate… I can just go to buttons and search.”',
      who: 'Designer, 2.5 years',
      text: 'That one comment became Reyo’s collections: saves organised by UI part, the way a design system is.',
      image: 'images/reyo/library-home.webp',
      imageLabel: 'Reyo library home · saves organised by UI part',
      device: 'laptop',
      notes: [
        { title: 'Sorted like a design system', text: 'Components, Foundations, Patterns.', at: { x: 22.1, y: 29.6 }, box: { x: 71, y: 6, side: 'right', w: 34 } },
        { title: 'Search by UI part', text: 'Type “dropdown”, get every dropdown save.', at: { x: 60, y: 27 }, box: { x: 71, y: 38, side: 'right', w: 34 } },
        { title: 'One-line AI summary', text: 'What a group teaches, without opening it.', at: { x: 45.6, y: 69.8 }, box: { x: 71, y: 70, side: 'right', w: 34 } },
      ],
    },
  },

  validation: {
    eyebrow: 'Validation',
    title: 'Put in front of people who’d be honest',
    score: { value: 17.5, max: 25, source: 'ScaleHouse Season 1 review' },
    quote: '“I’d download this on day 1 if it shipped.”',
    changed: [
      { title: 'Organise by UI part', text: 'A designer’s design-system analogy became the collections.' },
      { title: '“Why I saved this”', text: 'Interviews showed the reason matters more than the link.' },
      { title: 'Start with one source', text: 'The review pushed YouTube first, with timestamp jumps as the hook.' },
    ],
    next: 'Next: usability tests with 5 designers on the save and find flows.',
  },

  tradeoffs: {
    eyebrow: 'Challenges & trade-offs',
    title: 'What I ran into. What I chose.',
    challenges: [
      'Teaching a system to understand a video, not just store it, took longer than I expected',
      'Building the backend myself meant learning fast, with AI tools as pair programmers',
      'Classification isn’t finished. Some saves are smarter than others right now',
    ],
    choices: [
      'YouTube first, not everything at once. Depth over breadth, for now',
      'Speed over perfect accuracy. A working v1 beats a flawless one that never ships',
      'Browser first. “Anywhere on your computer” needs a desktop app, and that comes later',
    ],
  },

  outcome: {
    eyebrow: 'The impact',
    title: 'What Reyo changes for a designer',
    numbers: [
      { from: '8 steps', to: '3', unit: 'steps', label: 'to find a saved tutorial', how: 'Counted on my flows: YouTube Saved vs Reyo' },
      { from: '25 min', to: '44 sec', unit: '', label: 'of video to watch', how: 'A real save from my library: jump to the moment, skip the rest' },
      { from: '4.9 apps', to: '1', unit: 'place', label: 'for every save', how: 'Survey average of apps used to save, now one library by UI part' },
      { from: '2 app switches', to: '0', unit: 'app switches', label: 'while designing', how: 'No leaving your design tool and coming back. The save comes to your screen' },
    ],
    diff: 'The tools I compared help you organise saves. None bring the right one back, at the exact moment, while you design. That’s the gap Reyo fills.',
  },

  learnings: [
    { title: 'Let research disagree with you', text: 'My survey pointed at Instagram. The technology pointed at YouTube. Saying that out loud made the product sharper.' },
    { title: 'Design and build aren’t separate', text: 'Building Reyo myself showed me which ideas were real and which only worked in Figma.' },
    { title: 'Constraints are design input', text: 'A 20-request daily AI limit shaped the whole experience: the queue, the status, the waiting states.' },
  ],
}
