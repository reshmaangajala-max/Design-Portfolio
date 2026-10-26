// ─────────────────────────────────────────────────────────────
// Shuchify case study content. Same shape as reyo.js / tara.js.
// Shuchi (శుచి / शुचि) = cleanliness, purity.
// Research: 2026 inspection data, 20+ real diner posts (r/swiggy, r/Zomato), a restaurant owner,
// and a Telugu TV news report on TG-SAFE highway raids (translated).
// ─────────────────────────────────────────────────────────────

export const shuchify = {
  hero: {
    chips: ['Concept project', 'B2B + GovTech', 'AI'],
    badge: 'In progress',
    title: 'What does the kitchen behind your favourite restaurant actually look like?',
    intro:
      'Honestly? Nobody knows. Not you, not the delivery app, and most days not even the food inspector. Shuchify makes hygiene visible every day, to everyone who needs to see it.',
    features: ['Daily AI check-ins', 'Kitchen records', 'Public trust score', 'Verified reports', 'Inspector dashboard'],
    meta: [
      { label: 'My role', value: 'Solo designer · research to UI' },
      { label: 'Users', value: 'Restaurants · Diners · Food inspectors' },
      { label: 'Type', value: 'Concept · B2B + GovTech · 2026' },
    ],
    stats: [
      { value: '1 in 5', label: 'food samples in India failed safety tests (FY26)' },
      { value: '0', label: 'complaints officials received through the govt app' },
      { value: '3 sides', label: 'restaurant, diner and inspector, one loop' },
    ],
  },

  // What inspectors actually found inside kitchens in 2026.
  behind: {
    eyebrow: 'Behind the kitchen door',
    title: 'Let’s see what actually happens behind.',
    sub: 'Every point below was found by food inspectors in 2026. Not in one kitchen. Across states, highway dhabas to five-star hotels.',
    cards: [
      { kicker: 'Pests', title: 'Cockroaches, rats and flies', text: 'In store rooms and kitchens, from highway dhabas to five-star hotels.', where: 'Telangana · Maharashtra' },
      { kicker: 'Made over', title: 'Rotten veg, new look', text: 'Mouldy vegetables that belonged in the bin, cooked into a fresh-looking masala curry.', where: 'Telangana · NH-65' },
      { kicker: 'Reheated', title: 'Days-old food, served hot', text: 'Food stored for days, reheated and served. Officers called it slow poison.', where: 'Andhra Pradesh · Telangana' },
      { kicker: 'Expired stock', title: '429 kg of expired meat', text: 'Seized from 60+ star hotels in one Bengaluru drive. Plus rotten, mouldy vegetables.', where: 'Karnataka' },
      { kicker: 'Records', title: 'Expired licences, no records', text: 'Hotels running on expired FSSAI licences. No pest control logs, no staff health checks.', where: 'Every state' },
      { kicker: 'Reputation', title: 'Even the famous fail', text: 'A 122-year-old Mumbai cafe: cats, rat droppings and an open sewage manhole in the kitchen.', where: 'Maharashtra', highlight: true },
    ],
  },

  // 2026 inspection numbers.
  data: {
    eyebrow: '2026 inspection data',
    title: 'The numbers from this year.',
    national: [
      { value: '2.2 lakh', label: 'food samples tested in FY26' },
      { value: '40,023', label: 'failed safety tests (1 in 5)' },
      { value: '1,918', label: 'criminal convictions' },
      { value: '0', label: 'complaints via the govt app' },
    ],
    states: [
      { state: 'Telangana', when: 'Aug – Oct', stats: [['46', 'kitchens checked in one drive'], ['50%', 'had violations']], note: '7 highway eateries had licences suspended in a single day.' },
      { state: 'Maharashtra', when: 'Aug – Sep', stats: [['3,100+', 'kitchens checked in 2 months'], ['160+', 'licences suspended']], note: '₹1.19 crore of unsafe food seized in one festive drive.' },
      { state: 'Karnataka', when: 'Aug – Sep', stats: [['2,000+', 'outlets checked'], ['22%', 'shawarma samples unsafe']], note: 'Star hotels, PGs, hostels and bus stands all got notices.' },
      { state: 'Uttar Pradesh', when: 'Sep – Oct', stats: [['253', 'outlets checked'], ['29%', 'licences suspended']], note: '1,300 kg of adulterated paneer seized in one raid.' },
      { state: 'Gujarat', when: 'Sep', stats: [['1,407', 'hostels and canteens checked'], ['328', 'improvement notices']], note: '11,000+ businesses asked to show kitchen CCTV. Only a request.' },
    ],
    pattern: { label: 'The pattern', lines: ['Inspections come in bursts.', 'Shops shut the day they hear a raid is coming, pay the fine, and go back to normal.'] },
    source: 'Sources: Lok Sabha reply (Jul 2026), TG-SAFE, Maharashtra FDA, Karnataka FSDA, UP FSDA, Gujarat FDCA, news reports incl. a Telugu TV report on NH-65 raids.',
  },

  // Same pinned process layout as Reyo and Tara. Each step sets its own eyebrow.
  // Quotes are real: Reddit (r/swiggy, r/Zomato), lightly trimmed, usernames left out,
  // and a Telugu TV news report, translated.
  approach: {
    eyebrow: 'My process · Design Thinking',
    title: 'How I approached it',
    sub: 'No brief and no client, just a problem in the news. With three very different users, I needed to understand people first, so I followed Design Thinking.',
    stages: [
      { name: 'Empathise', items: ['2026 inspection data, 5 states', 'Reddit: r/swiggy, r/Zomato', 'Telugu TV raid report', 'Food Safety Connect reviews'] },
      { name: 'Define', items: ['Competitor matrix', 'Affinity map', '3 personas', 'The core problem'] },
      { name: 'Ideate', items: ['How might we', 'Jobs to be done', 'Anti-cheat ideas', 'Design decisions'] },
      { name: 'Prototype', items: ['Restaurant check-in flow', '4 screens in Figma'] },
      { name: 'Test', items: ['With restaurant owners in Hyderabad'], next: true },
    ],
    note: 'Test is next. I’ll take the check-in flow to owners before designing the diner and inspector sides.',
  },

  process: {
    phase: 'The research phase',
    eyebrow: 'Let’s see it from the user’s side',
    steps: [
      {
        tag: 'User research',
        eyebrow: 'Let’s see it from the user’s side',
        points: [
          '20+ diner posts on Reddit, a restaurant owner, and a Telugu news report',
          'Bad food is found only after it arrives',
          'Nobody can prove what really happened',
        ],
        resultLabel: 'What it comes down to',
        result: 'The problem isn’t just dirty kitchens. It’s that nobody can prove what happens inside.',
        notes: [
          { who: 'Me', source: 'My experience', color: 'pink', quote: 'Cockroach in my pulihora. Never ordered there again.' },
          { who: 'Diner', source: 'Reddit · r/Zomato', color: 'butter', quote: 'I can’t prove that the food was actually bad.' },
          { who: 'Diner', source: 'Reddit · r/swiggy', color: 'lilac', quote: 'The food was clearly spoiled. They refunded ₹11.' },
          { who: 'Diner', source: 'Reddit · r/Zomato', color: 'mint', quote: 'Didn’t know it was stale until I took a bite.' },
          { who: 'Restaurant owner', source: 'Reddit · r/swiggy', color: 'sky', quote: '…even when we have camera proof everything was packed.' },
          { who: 'News anchor', source: 'Telugu TV · translated', color: 'peach', quote: 'Who knows when the food was cooked? No one.' },
        ],
        image: null,
        imageLabel: 'Diner pain points',
      },
      {
        tag: 'Market research',
        eyebrow: 'What already exists',
        points: [
          'Studied 7 systems: Indian govt schemes, ratings abroad, and AI startups',
          'Govt systems check rarely. Startups watch daily, but only for chains, and diners never see it',
          'Nobody connects the kitchen, the diner and the inspector in one loop',
        ],
        resultLabel: 'The gap',
        result: 'Daily proof from the kitchen, a score diners actually see, and a fair way to settle complaints. No one does all three.',
        matrix: {
          firstCol: 'Solution',
          cols: ['Daily checks', 'AI checks', 'Records', 'Public score', 'Community reports', 'Officer follow-up'],
          rows: [
            { name: 'FSSAI Hygiene Rating', type: 'Govt · India', v: ['n', 'n', 'p', 'p', 'n', 'n'] },
            { name: 'Food Safety Connect', type: 'Govt app · India', v: ['n', 'n', 'n', 'n', 'p', 'n'] },
            { name: 'UK / NYC ratings', type: 'Govt · abroad', v: ['n', 'n', 'y', 'y', 'n', 'y'] },
            { name: 'Sunshine Kitchen', type: 'Govt · China', v: ['y', 'y', 'p', 'y', 'n', 'y'] },
            { name: 'DMChecked', type: 'Govt · Dubai', v: ['p', 'n', 'y', 'p', 'n', 'y'] },
            { name: 'OptiPro', type: 'Startup · India', v: ['y', 'y', 'n', 'n', 'n', 'n'] },
            { name: 'EyeGo.ai', type: 'Startup · Middle East', v: ['y', 'y', 'y', 'n', 'n', 'n'] },
          ],
          us: { name: 'Shuchify', type: 'This project', v: ['y', 'y', 'y', 'y', 'y', 'p'] },
        },
        image: null,
        imageLabel: 'Market research: who does what',
      },
      {
        tag: 'Research insights',
        eyebrow: 'What the research is really saying',
        points: [
          'Sorted 40+ notes from Reddit, inspection reports, a Telugu news report and my own experience',
          'Grouped them by what people felt and did, not by platform',
          'Five themes kept coming back',
        ],
        resultLabel: 'Under all five',
        result: 'Hygiene only improves when someone can see it. Right now, no one can.',
        affinity: [
          {
            theme: 'Found out too late',
            color: 'pink',
            notes: ['Stale only after the first bite', 'Sour smell on opening', 'Mould on a free custard'],
          },
          {
            theme: 'Nobody can prove anything',
            color: 'butter',
            notes: ['“Can’t prove it was bad”', '“Assured it was fresh. How?”', 'Owner had camera proof, still lost'],
          },
          {
            theme: 'Complaints go nowhere',
            color: 'lilac',
            notes: ['Bot couldn’t see the issue', '₹11 refund, ₹400 coupon', 'Only consumer court threats work'],
          },
          {
            theme: 'Kitchens behave when watched',
            color: 'mint',
            notes: ['Shops shut before raids', 'Expired licences, still serving', 'Same food again after fines'],
          },
          {
            theme: 'People quietly walk away',
            color: 'sky',
            notes: ['“Just blacklist the restaurant”', 'Deleted the app', '“Sharing so others are cautious”'],
          },
        ],
        image: null,
        imageLabel: 'Affinity map: research grouped into themes',
      },
    ],
  },

  // Composite personas built from the research (Reddit, news report, inspection data). Not real individuals.
  people: {
    eyebrow: 'Who it’s for',
    title: 'Three people. Same kitchen. Different fears.',
    note: 'Composites built from the research, not real individuals.',
    cards: [
      {
        side: 'Restaurant',
        tone: 'butter',
        initial: 'R',
        name: 'Ravi, 41',
        meta: 'Runs a tiffin centre · Kukatpally',
        quote: 'If I spend all day proving I’m clean, who will cook?',
        wants: ['More orders on Swiggy and Zomato', 'Proof when a complaint is fake'],
        fears: ['A surprise raid that shuts him for a day', 'One bad review sinking his rating'],
        time: 'Has 2 minutes a day',
      },
      {
        side: 'Diner',
        tone: 'pink',
        initial: 'S',
        name: 'Sneha, 26',
        meta: 'Orders in 4× a week · Gachibowli',
        quote: 'I don’t need a five-star kitchen. I just need to know it’s not lying to me.',
        wants: ['To know the food is fresh before ordering', 'To be heard when it isn’t'],
        fears: ['Falling sick before something important', 'Arguing with a bot for ₹11'],
        time: 'Decides in 10 seconds',
      },
      {
        side: 'Inspector',
        tone: 'mint',
        initial: 'L',
        name: 'Lakshmi, 38',
        meta: 'Food Safety Officer · Rangareddy',
        quote: 'Hundreds of kitchens, four visits a day. Just tell me where to go.',
        wants: ['To know which kitchens are risky before visiting', 'To see if notices were actually fixed'],
        fears: ['Chasing fake complaints', 'The same kitchens failing again after fines'],
        time: 'Manages ~4 visits a day',
      },
    ],
  },

  // Ideation phase: same pinned layout as research.
  ideation: {
    id: 'ideation',
    phase: 'The ideation phase',
    eyebrow: 'Turning problems into questions',
    steps: [
      {
        tag: 'How might we',
        eyebrow: 'Turning problems into questions',
        points: [
          'Took each research theme and turned it into one question to design for',
          'Kept the questions about behaviour, not features',
        ],
        resultLabel: 'The thread',
        result: 'Make honesty the easy, rewarding choice for everyone at the counter.',
        questions: [
          { k: 'HMW 01', title: 'How might we make kitchen hygiene visible every day, without CCTV?' },
          { k: 'HMW 02', title: 'How might we give diners and owners proof when food goes wrong?' },
          { k: 'HMW 03', title: 'How might we warn diners before they order, not after the first bite?' },
          { k: 'HMW 04', title: 'How might we make staying clean pay off for a small restaurant?' },
        ],
        image: null,
        imageLabel: 'How might we statements',
      },
      {
        tag: 'Jobs to be done',
        eyebrow: 'The jobs people need done',
        points: [
          'Wrote one job per person, straight from the research',
          'Each job says when it happens, what they want, and why it matters',
        ],
        resultLabel: 'What it comes down to',
        result: 'Nobody wants a hygiene app. They want proof, protection and a reason to trust.',
        jobs: [
          { title: 'When a customer complains, I want proof of what I cooked and packed, so I don’t lose money for something I didn’t do.' },
          { title: 'When I keep my kitchen clean, I want it to show on Swiggy and Zomato, so it brings me more orders.' },
          { title: 'When I’m choosing where to order, I want to know the kitchen is clean and the food is fresh, so I don’t fall sick or waste money.' },
          { title: 'When I plan my day, I want to know which kitchens are risky and which fixed their notices, so my four visits catch real problems.' },
        ],
        image: null,
        imageLabel: 'Jobs to be done',
      },
    ],
  },

  // Solution phase opener: what I chose, what I chose not to do, and why (each tied to research).
  decisions: {
    phase: 'The solution phase',
    eyebrow: 'Design decisions',
    title: 'Six choices that shaped Shuchify.',
    sub: 'Every idea had an easier, louder version. Here’s what I picked instead, and why.',
    items: [
      { not: '24/7 CCTV in every kitchen', chose: 'Random check-ins on a phone', why: 'Costs nothing extra, works for a tiffin centre, and doesn’t feel like being spied on.', from: 'Kitchens behave when watched' },
      { not: 'Typing in every ingredient', chose: 'One photo of the supplier bill', why: 'Staff won’t type mid-shift, but they’ll snap a bill. AI logs the dates and flags old stock.', from: 'Ravi has 2 minutes a day' },
      { not: 'Showing diners every video', chose: 'A one-line trust card', why: 'Sneha decides in 10 seconds. The proof is one tap away, not in her face.', from: 'Found out too late' },
      { not: 'Complaints as one word against another', chose: 'Complaints checked against the kitchen’s record', why: '“I can’t prove it was bad” and “we had camera proof, still lost” are the same problem.', from: 'Nobody can prove anything' },
      { not: 'Letting AI decide penalties', chose: 'AI flags, a person decides', why: 'Bots that “couldn’t see the issue” broke trust. Fairness keeps restaurants on board.', from: 'Complaints go nowhere' },
      { not: 'Only punishing dirty kitchens', chose: 'Rewarding clean ones first', why: 'A badge, a better ranking, fewer surprise raids. Staying clean has to pay.', from: 'People quietly walk away' },
    ],
  },

  // The design: phone screens with annotations (same component as Tara).
  impact: {
    eyebrow: 'The impact',
    title: 'If Shuchify existed tomorrow',
    sub: 'Today, kitchen hygiene is checked in bursts and hidden from everyone who eats there. Shuchify turns it into everyday proof that all three sides can see.',
    shifts: [
      { before: 'Checked a few times a year, in raids', after: 'Proof any day, at random' },
      { before: 'Diners find out after they fall sick', after: 'Diners see it before they order' },
      { before: 'Inspectors pick kitchens by guesswork', after: 'Inspectors visit the riskiest first' },
    ],
    sides: [
      {
        who: 'Restaurant owner',
        today: 'A surprise raid can shut the kitchen for a day, and a clean kitchen looks the same as a dirty one to customers.',
        gets: ['A 2-minute check-in with the phone camera', 'AI points out exactly what to fix, before an inspector does', 'A hygiene badge diners can see on the menu'],
        gain: 'Clean kitchens finally get credit, and more orders.',
      },
      {
        who: 'Diner',
        today: 'Chooses by ratings and food photos. The kitchen itself is invisible.',
        gets: ['Hygiene score and last check-in time, right inside Swiggy or Zomato', 'Reports checked against real check-ins, not rumours', 'Report a problem in one tap from the order'],
        gain: 'Choose with proof, not hope.',
      },
      {
        who: 'Food inspector',
        today: 'Thousands of outlets, a small team, and visits that happen in bursts.',
        gets: ['A list ranked by risk: who to visit first', 'Skipped check-ins and diner reports raise flags early', 'Small fixes followed up by video, no trip needed'],
        gain: 'Same team, more of the right visits.',
      },
    ],
    loop: ['Owner proves', 'Diner sees and reports', 'Inspector acts', 'Owner fixes'],
    measure: ['Check-ins done on time', 'Repeat violations per kitchen', 'Orders from badged kitchens'],
    close: '1 in 5 food samples failed safety tests this year. Shuchify can’t cook the food, but it makes the kitchen impossible to hide.',
  },

  solution: {
    eyebrow: 'For restaurant owners · the surprise check-in',
    title: 'The solution',
    sub: 'Three people need Shuchify. I started with the restaurant owner, because every proof starts in their kitchen.',
    scope: [
      { label: 'Designed here', value: 'Restaurant owners', on: true },
      { label: 'Coming next', value: 'Diners' },
      { label: 'Coming next', value: 'Food inspectors' },
    ],
    moments: [
      {
        label: 'Moment 01',
        title: 'A surprise, with the clock already running',
        insight: 'Kitchens behave when someone is watching. So the check-in arrives unannounced, outside rush hours.',
        image: 'images/shuchify/m1-prompt.webp',
        imageLabel: 'Surprise check-in · Inside your fridge',
        device: 'phone',
        notes: [
          { title: 'Starts when it’s sent', text: 'The timer runs from the alert, not from when the app is opened. No time to tidy up first.', at: { x: 34, y: 19.9 }, box: { x: -84, y: 14.9, side: 'left', w: 72 } },
          { title: 'AI picks the spot', text: 'Fridge today, drain tomorrow. Staff can’t keep one clean corner for the camera.', at: { x: 70, y: 40 }, box: { x: 112, y: 35, side: 'right', w: 72 } },
          { title: 'Snooze doesn’t stop the clock', text: 'One reminder, inside the same window. Delaying never buys extra time.', at: { x: 50, y: 92.7 }, box: { x: -84, y: 87.7, side: 'left', w: 72 } },
        ],
      },
      {
        label: 'Moment 02',
        title: 'Live camera, nothing to fake',
        insight: 'No gallery, no old videos. Just fifteen seconds of what’s there right now.',
        image: 'images/shuchify/m2-camera.webp',
        imageLabel: 'Camera · Recording the fridge',
        device: 'phone',
        notes: [
          { title: 'Short on purpose', text: 'Fifteen seconds, top shelf to bottom. Long enough to see, short enough not to resent.', at: { x: 69, y: 16 }, box: { x: 112, y: 11, side: 'right', w: 72 } },
          { title: 'Torch for dark corners', text: 'Fridges and store rooms are dim. Hidden areas count as not checked.', at: { x: 20, y: 79.8 }, box: { x: -84, y: 74.8, side: 'left', w: 72 } },
          { title: 'Record only, no upload', text: 'There’s no gallery button. Proof has to be live.', at: { x: 61, y: 79.8 }, box: { x: 112, y: 74.8, side: 'right', w: 72 } },
        ],
      },
      {
        label: 'Moment 03',
        title: 'It shows its work',
        insight: 'Five checks, each ticked in plain words. This is what diners see by lunch.',
        image: 'images/shuchify/m3-allclear.webp',
        imageLabel: 'Result · All clear',
        device: 'phone',
        notes: [
          { title: 'Every check has a name', text: 'Recorded by Suresh at 9:42 am. Accountability without blame.', at: { x: 31.4, y: 53.7 }, box: { x: -84, y: 48.7, side: 'left', w: 72 } },
          { title: 'Things that can’t be faked fast', text: 'Covered food, storage, temperature, old stock. Not just gloves and caps.', at: { x: 82.4, y: 76.2 }, box: { x: 112, y: 71.2, side: 'right', w: 72 } },
        ],
      },
      {
        label: 'Moment 04',
        title: 'Help, not a penalty',
        insight: 'When something’s wrong, it says what, why it matters, and how long there is to fix it.',
        image: 'images/shuchify/m4-issue.webp',
        imageLabel: 'Result · 1 thing to fix',
        device: 'phone',
        notes: [
          { title: 'Explains the why', text: 'Not “violation”. Raw meat drips, so it goes on the bottom shelf.', at: { x: 12.8, y: 67.3 }, box: { x: -84, y: 62.3, side: 'left', w: 72 } },
          { title: 'A window to fix it', text: 'Re-record by 10:30 am and the score recovers. The goal is a clean fridge, not a fine.', at: { x: 75, y: 81.3 }, box: { x: 112, y: 76.3, side: 'right', w: 72 } },
        ],
      },
    ],
  },

  problem: {
    eyebrow: 'The problem',
    lines: ['Kitchens get dirty every day. Inspectors visit a few times a year.', 'In between, nothing can be proven, so no one is held accountable.'],
  },
}
