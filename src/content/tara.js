// ─────────────────────────────────────────────────────────────
// Tara case study content. Same shape as reyo.js, so the same sections render it.
// To add a screen: put it in public/images/tara/ and set `image: 'images/tara/<file>'`.
// Lines marked CONFIRM are my drafts: check them against your real brief / research.
// ─────────────────────────────────────────────────────────────

export const tara = {
  hero: {
    chips: ['Company project · Hanyaa', 'Android app'],
    badge: 'Concept → handover',
    title: 'How do you design an AI people trust with their life admin?',
    intro:
      'Insurance, car papers, subscriptions, bills. Tara reads the documents you already have, spots what’s due, and helps you act on it. It never acts without asking first.',
    meta: [
      { label: 'My role', value: 'Solo designer · research to UI' },
      { label: 'Timeline', value: '3 months' },
      { label: 'Company', value: 'Hanyaa Auto Technologies' },
    ],
    // Hero mockup: two phones (left light frame, right dark frame).
    // Drop exports in public/images/tara/ and set image: 'images/tara/<file>.png' (portrait, ~1170×2532).
    phones: [
      { image: 'images/tara/horizon.webp', label: 'Tara Horizon home: health insurance next up, then everything else ranked by days left' },
      { image: 'images/tara/detail.webp', label: 'Tara reminder detail: credit card annual fee with source, details and reminder schedule' },
    ],
    stats: [
      { value: '10', label: 'colleagues interviewed' },
      { value: '25+', label: 'survey responses' },
      { value: '15+', label: 'apps tested hands-on' },
    ],
  },

  brief: {
    label: 'The brief handed over',
    // CONFIRM: replace with the actual line you were given.
    ask: '“Build a smart reminder app.”',
    context: 'One line, no users, no scope. So before designing anything, I worked out what it was really about.',
    problemLabel: 'The main problem',
    problem:
      'People don’t miss renewals because they don’t care. They miss them because nothing tells them early enough, in a way they’ll actually act on.',
    personasLabel: 'Who it’s for',
    // CONFIRM: based on your 10 interviews (22–35, working professionals). Adjust to your real participants.
    personas: [
      {
        name: 'The busy professional',
        meta: '26 · works full-time, lives alone',
        needs: ['Insurance and phone bills due every month', 'Rent agreement and ID renewals', 'Remembers only when the late fee arrives'],
      },
      {
        name: 'The vehicle owner',
        meta: '30 · commutes by car or bike',
        needs: ['Vehicle insurance renewal every year', 'PUC check every 6 months', 'RC and licence renewals'],
      },
      {
        name: 'The family organiser',
        meta: '34 · handles paperwork for the whole house',
        needs: ['Family health insurance', 'Kids’ school fees', 'Parents’ medicines and policy renewals'],
      },
    ],
    goal: {
      label: 'Business goal',
      // CONFIRM: check this matches what the company wanted.
      text: 'An everyday app people trust with their documents, so Tara becomes the place they pay and renew, starting with bills and insurance.',
    },
  },

  process: {
    eyebrow: 'How I got there',
    steps: [
      {
        tag: 'User research',
        points: [
          '9 in 10 wanted Tara to pick up deadlines from their documents and messages, with no typing',
          'Trust split in half: “I love automation” vs “only if I can review it first”',
          '7 in 10 chose full control over their data, even the ones who wanted automation',
        ],
        result: 'Everyone wanted automation. Nobody wanted to be automated.',
        // Sticky notes = the answers people actually picked in the survey (Mar 2025).
        notes: [
          { who: 'Top challenge', source: 'Survey', color: 'butter', quote: 'I forget to set reminders in the first place.' },
          { who: 'Top frustration', source: 'Survey', color: 'pink', quote: 'Not smart enough. Needs too much manual input.' },
          { who: '9 in 10', source: 'Survey', color: 'lilac', quote: 'Detect tasks from my messages and documents automatically.' },
          { who: 'Half said', source: 'Survey', color: 'mint', quote: 'I love AI automation.' },
          { who: 'The other half', source: 'Survey', color: 'sky', quote: 'Only if I can review reminders before they’re set.' },
          { who: '7 in 10', source: 'Survey', color: 'peach', quote: 'I prefer full control over my data.' },
        ],
        image: null,
        imageLabel: 'Research insights / survey highlights',
      },
      {
        tag: 'Market research',
        points: [
          'Tested 15+ apps: reminder apps, all-in-one life admin apps, AI document tools and Indian bill apps',
          'Wrote down what each one does well, and where it stops',
        ],
        result: 'All-in-one apps still make you type everything. Indian apps each cover one slice. Nothing does both.',
        image: 'images/tara/competitor-matrix.webp',
        imageLabel: 'Competitor analysis',
      },
      {
        tag: 'What I had to figure out',
        points: ['Four questions shaped every decision after this', 'Each one comes from a finding in the survey'],
        result: 'Trust ran through all four.',
        questions: [
          { k: 'HMW 01', title: 'How might we track what’s due without asking people to type it in?', text: 'Because the top challenge was “I forget to set reminders in the first place.”' },
          { k: 'HMW 02', title: 'How might we let AI do the work while people stay in control?', text: 'Because trust split in half: automate it, or let me review first.' },
          { k: 'HMW 03', title: 'How might we show only what truly matters, so people don’t tune out?', text: 'Because notification overload made people ignore reminders.' },
          { k: 'HMW 04', title: 'How might we make people feel safe sharing personal documents?', text: 'Because 7 in 10 wanted full control over their data.' },
        ],
        image: null,
        imageLabel: 'How might we statements',
      },
      {
        tag: 'Jobs to be done',
        points: ['Turned the insights into the jobs people would hire Tara for'],
        result: 'The job isn’t “remind me”. It’s “handle this with me”.',
        jobs: [
          { k: 'JTBD 1', title: 'When a policy or bill lands in my email or WhatsApp, I want it tracked without typing, so I never have to remember it.' },
          { k: 'JTBD 2', title: 'When something is due, I want to hear early and act in one step, so I avoid fines and lapses.' },
          { k: 'JTBD 3', title: 'When I share a document, I want to know what’s read and kept, so I feel safe.' },
          { k: 'JTBD 4', title: 'When I’m busy, I want only what truly matters, so I don’t tune Tara out.' },
        ],
        image: null,
        imageLabel: 'Jobs to be done',
      },
      {
        tag: 'Design decisions',
        points: ['Seven insights from research, each turned into one decision', 'For each one: what I chose not to build, and how I’d measure success'],
        result: 'Every feature earns its place, or it’s out.',
        decisions: [
          { insight: 'People forget to set reminders in the first place.', decision: 'Capture from where documents already are', detail: 'Share a policy or bill to Tara from WhatsApp, Gmail or Files, or scan a paper copy with the camera. No forms.', not: 'Manual entry first. If you’re too busy to remember, you’re too busy to type. A short form stays only as a fallback.', measure: '% of items added by share or scan vs typed · time from share to saved (goal: under 10 s)' },
          { insight: 'The top frustration: needs too much manual input.', decision: 'Tara reads the document for you', detail: 'It pulls out the type, issuer, expiry date and amount, then fills the reminder in.', not: 'Asking users to tag or categorise. Every extra field is a reason to quit halfway.', measure: '% of reminders saved with no edits · fields corrected per save' },
          { insight: 'Trust in AI is split in half.', decision: '“Add this?” before anything is saved', detail: 'Tara shows what it read and waits for a yes. Unsure dates are flagged in amber with the reason.', not: 'Silent auto-saving. One wrong date saved without asking and people delete the app.', measure: '% of suggestions accepted vs edited · % of flagged dates corrected' },
          { insight: 'Notification overload makes people tune out.', decision: 'Horizon: one timeline, ranked', detail: 'Only high-stakes obligations, ordered by days left and what it costs to miss. One “Next up” at the top.', not: 'Every task and to-do. Tara isn’t a to-do app. Low-stakes items would drown the important ones.', measure: 'Notification open rate over time · uninstalls in the first 30 days' },
          { insight: 'A ping doesn’t get it done.', decision: 'Resolve, don’t remind', detail: 'Notifications carry the action: open the policy, copy the policy number, renew or snooze, right there.', not: 'Plain “due tomorrow” alerts. They hand the work back to the user.', measure: 'Items marked done straight from the notification · snoozes per item' },
          { insight: '7 in 10 want full control over their data.', decision: 'Private by default', detail: 'Documents are read and stored on the device. Sign-in is optional and only for syncing across devices.', not: 'Mandatory accounts or cloud storage of documents. Privacy decides whether people install at all.', measure: 'Opt-in rate for sync · install-to-first-save rate' },
          { insight: 'Life admin is often for the whole family.', decision: 'One place for every obligation', detail: 'Insurance, vehicle, IDs, bills and home, with clear categories and colour.', not: 'Five integrations at launch (banks, DigiLocker, email). Start with share and scan done well; add sources later.', measure: 'Items per user per month · % of users tracking 3+ categories' },
        ],
        image: 'images/tara/decision-table.webp',
        imageLabel: 'Insight → decision table',
      },
      {
        tag: 'Wireframes',
        points: ['Sketched capture, home and notification flows on paper first', 'Checked layouts against Android Material patterns'],
        result: 'Chose one timeline ranked by urgency, not folders by category.',
        image: null,
        imageLabel: 'Sketches + greyscale wireframes',
      },
      {
        tag: 'Design system',
        points: ['Built Tara’s identity from scratch: wordmark, palette, type and card language', 'Motion that stays calm, never alarming'],
        result: 'Calm by design, because life admin is stressful enough.',
        taraSystem: true,
        image: null,
        imageLabel: 'Tara foundations + components',
      },
    ],
  },

  solution: {
    eyebrow: 'The design',
    title: 'Five moments, each built on a decision',
    moments: [
      {
        label: 'Moment 01',
        title: 'Scan it. Tara reads it.',
        insight: '“I forget to set reminders in the first place.” So Tara sets them for you.',
        image: 'images/tara/m1-processing.webp',
        imageLabel: 'Processing Document · “Reading your document”',
        device: 'phone',
        notes: [
          { title: 'Reads on your phone', text: '“Nothing uploaded.” Privacy shown at the exact moment it matters.', at: { x: 88.1, y: 56.8 }, box: { x: 112, y: 51.8, side: 'right', w: 72 } },
          { title: 'Shows its work', text: 'Finding the text, spotting dates, setting reminders. No black box.', at: { x: 15.2, y: 67.1 }, box: { x: -84, y: 62.1, side: 'left', w: 72 } },
        ],
      },
      {
        label: 'Moment 02',
        title: 'It asks before it saves',
        insight: 'Half wanted automation. Half wanted to review first. This screen serves both.',
        image: 'images/tara/m2-review.webp',
        imageLabel: 'Review · Health insurance (date flagged)',
        device: 'phone',
        notes: [
          { title: 'Nothing is saved yet', text: 'Tara fills every field, then waits for your yes.', at: { x: 89.3, y: 15.4 }, box: { x: 112, y: 10.4, side: 'right', w: 72 } },
          { title: 'Flags what it isn’t sure of', text: 'Two dates on the policy? It says which one it picked, and why.', at: { x: 7.7, y: 23.1 }, box: { x: -84, y: 18.1, side: 'left', w: 72 } },
        ],
      },
      {
        label: 'Moment 03',
        title: 'Horizon: only what matters',
        insight: 'Too many alerts get ignored. One ranked view gets acted on.',
        image: 'images/tara/m3-horizon.webp',
        imageLabel: 'Home · Your horizon',
        device: 'phone',
        notes: [
          { title: 'One thing next', text: 'The most urgent obligation sits on top, policy number ready.', at: { x: 77.1, y: 21.9 }, box: { x: 112, y: 16.9, side: 'right', w: 72 } },
          { title: 'Ranked by days left', text: 'Everything else in order, colour-coded by category.', at: { x: 7.4, y: 60.4 }, box: { x: -84, y: 55.4, side: 'left', w: 72 } },
        ],
      },
      {
        label: 'Moment 04',
        title: 'Everything you need when it’s time',
        insight: 'A reminder only helps if the document and details come with it.',
        image: 'images/tara/m4-detail.webp',
        imageLabel: 'Detail · Car insurance renewal',
        device: 'phone',
        notes: [
          { title: 'The document, attached', text: 'Source, amount and policy PDF. No digging through WhatsApp.', at: { x: 77.1, y: 54.7 }, box: { x: 112, y: 49.7, side: 'right', w: 72 } },
          { title: 'Reminded three times', text: '30, 7 and 1 day before. Then mark it done.', at: { x: 7.4, y: 74.4 }, box: { x: -84, y: 69.4, side: 'left', w: 72 } },
        ],
      },
      {
        label: 'Moment 05',
        title: 'Permission is earned, not grabbed',
        insight: 'Asked after the first reminder is saved, not on first launch.',
        image: 'images/tara/m5-permission.webp',
        imageLabel: 'Notification permission',
        device: 'phone',
        notes: [
          { title: 'Asked at the right time', text: 'Right after your first reminder is saved, so the value is clear.', at: { x: 69.8, y: 10.5 }, box: { x: 112, y: 5.5, side: 'right', w: 72 } },
          { title: 'A promise in writing', text: '“Zero to one notification a week.” No news, no tips, no streaks.', at: { x: 90.5, y: 35.8 }, box: { x: 112, y: 30.8, side: 'right', w: 72 } },
        ],
      },
    ],
  },

  outcome: {
    eyebrow: 'Where it landed',
    title: 'What I delivered',
    delivered: ['Research and competitor analysis', 'Wireframes and full UI, following Material guidelines', 'Design system and handover docs for developers'],
  },

  learnings: [
    { title: 'An assigned idea can still be yours', text: 'The brief was one line. The research decided what Tara became.' },
    { title: 'Trust is a design material', text: 'Permission prompts, on-device reading and calm copy did more for trust than any badge.' },
    { title: 'Design for handover', text: 'Writing docs for developers made me design every state and edge case, not just the happy path.' },
  ],
}
