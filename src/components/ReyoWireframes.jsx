import { useEffect, useRef, useState } from 'react'

// Greyscale wireframes of Reyo's key screens, drawn in code so spacing stays exact.

function Ph({ play, className = '' }) {
  return (
    <div className={`wk-ph ${className}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      {play && (
        <span className="wk-play">
          <svg viewBox="0 0 10 10" aria-hidden="true">
            <path d="M3 2 L8 5 L3 8 z" />
          </svg>
        </span>
      )}
    </div>
  )
}

const Icon = {
  tick: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 8.5 L7 11 L12 5" />
    </svg>
  ),
  chev: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 6 L8 10 L12 6" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 4 L12 12 M12 4 L4 12" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2 L9.4 6.6 L14 8 L9.4 9.4 L8 14 L6.6 9.4 L2 8 L6.6 6.6 z" />
    </svg>
  ),
  dot: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" />
    </svg>
  ),
  img: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.5" y="3.5" width="11" height="9" rx="1.5" />
      <path d="M3 11 L6.5 7.5 L9 10 L10.5 8.5 L13 11" />
    </svg>
  ),
}

function Slider() {
  return (
    <div className="wk-slider">
      <div className="wk-slider__track">
        <span className="wk-slider__range" />
        <i style={{ left: '23%' }} />
        <i style={{ left: '43%' }} />
      </div>
      <div className="wk-slider__labels">
        <span>0:00</span>
        <b>5:56 – 6:40</b>
        <span>25:58</span>
      </div>
    </div>
  )
}

export function WfSaveCard() {
  return (
    <div className="wk wk-card wk-save">
      <div className="wk-row wk-gap8">
        <span className="wk-circle">{Icon.tick}</span>
        <b className="wk-h">Saved. Nice find.</b>
      </div>
      <div className="wk-row wk-gap10 wk-top">
        <Ph play className="wk-thumb-lg" />
        <div className="wk-col wk-gap2">
          <b className="wk-t">Video title goes here, on two lines</b>
          <span className="wk-s">Channel name</span>
        </div>
      </div>
      <div className="wk-field">
        <span className="wk-label">Note to future you</span>
        <div className="wk-input">
          <span>Why did you save this?</span>
          <span className="wk-chip">{Icon.spark} AI</span>
        </div>
      </div>
      <div className="wk-field">
        <span className="wk-label">Which part?</span>
        <div className="wk-seg">
          <span className="is-on">From 5:56</span>
          <span>Pick a range</span>
          <span>Whole video</span>
        </div>
        <Slider />
      </div>
      <div className="wk-field">
        <span className="wk-label">Put it in</span>
        <div className="wk-input">
          <span className="wk-ink">Colour &amp; type</span>
          <span className="wk-ico">{Icon.chev}</span>
        </div>
      </div>
      <span className="wk-link">+ Save another bit</span>
      <span className="wk-btn wk-btn--dark wk-btn--sm">Done</span>
    </div>
  )
}

function BarTop() {
  return (
    <>
      <span className="wk-pill">
        <i /> You’re in your design tool
      </span>
      <div className="wk-row wk-gap8">
        <span className="wk-ico wk-ico--lg">{Icon.spark}</span>
        <b className="wk-t">Reyo</b>
      </div>
    </>
  )
}

export function WfBarChoose() {
  return (
    <div className="wk wk-card wk-bar">
      <BarTop />
      <b className="wk-h">How should we find it?</b>
      <div className="wk-col wk-gap8">
        <span className="wk-btn wk-btn--dark">Find saves for me</span>
        <span className="wk-note">Looks at your selected frame once · Never stored</span>
        <span className="wk-btn">I’ll search myself</span>
      </div>
      <div className="wk-row wk-gap8">
        <span className="wk-toggle" />
        <span className="wk-s">Remember my choice</span>
      </div>
    </div>
  )
}

export function WfBarReading({ text = 'You’re working on Pricing page…' }) {
  return (
    <div className="wk wk-card wk-bar">
      <BarTop />
      <b className="wk-h wk-center">{text}</b>
      <span className="wk-btn wk-btn--dark">
        <span className="wk-spin" />
      </span>
      <span className="wk-note">Reading this frame only</span>
    </div>
  )
}

const VIDEO_PICKS = [
  ['Color Theory Crash Course', '60-30-10 colour rule'],
  ['Pricing cards, dark middle tier', 'Make the middle plan pop'],
  ['Linear pricing page', 'Feature list spacing is perfect'],
  ['SaaS pricing toggle', 'Clean toggle, steal this'],
]
const WEB = ['3-tier pricing cards, highlighted', 'Monthly / yearly price toggle', '30 SaaS pricing pages']

export function WfResults({ kind = 'video' }) {
  const image = kind === 'image'
  const picks = image ? VIDEO_PICKS.slice(1) : VIDEO_PICKS
  return (
    <div className="wk wk-card wk-results">
      <div className="wk-row wk-gap10">
        <span className="wk-avatar">R</span>
        <b className="wk-h">Past you saved these for this</b>
        <span className="wk-tag">Looking at: Pricing page</span>
        <span className="wk-ico wk-push">{Icon.close}</span>
      </div>
      <div className="wk-row wk-gap6">
        <span className="wk-chip2 is-on">All · 4</span>
        <span className="wk-chip2">Colour · 1</span>
        <span className="wk-chip2">Pricing · 2</span>
        <span className="wk-chip2">Cards · 1</span>
      </div>
      <hr className="wk-hr" />
      <div className="wk-cols">
        <div className="wk-col wk-gap6">
          <div className="wk-row">
            <span className="wk-label wk-ink">Your picks</span>
            <span className="wk-select wk-push">
              {image ? 'Image' : 'All'} {Icon.chev}
            </span>
          </div>
          {picks.map(([t, n], i) => (
            <div key={t} className={`wk-item ${i === 0 ? 'is-on' : ''}`}>
              <Ph className="wk-thumb" />
              <div className="wk-col wk-gap2">
                <b className="wk-t">{t}</b>
                <span className="wk-s">“{n}”</span>
              </div>
            </div>
          ))}
          <span className="wk-label wk-mt">From the web · not saved yet</span>
          {WEB.map((w, i) => (
            <div key={w} className={`wk-web ${i === 0 ? 'is-on' : ''}`}>
              <span className="wk-ico">{Icon.dot}</span>
              <span className="wk-s wk-ink">{w}</span>
              {i === 0 && <b className="wk-push wk-s wk-ink">+ Save</b>}
            </div>
          ))}
        </div>
        <div className="wk-preview">
          <Ph play={!image} className={image ? 'wk-media wk-media--img' : 'wk-media'} />
          {!image && <Slider />}
          <b className="wk-h">{image ? 'Make the middle plan pop' : '60-30-10 colour rule for UI'}</b>
          <div className="wk-col wk-gap4">
            <span className="wk-row wk-gap6 wk-s">
              <span className="wk-ico">{Icon.dot}</span> Source · Saved {image ? '1 week' : '3 weeks'} ago
            </span>
            <span className="wk-row wk-gap6 wk-s wk-ink">
              <span className="wk-ico">{Icon.spark}</span> Matched: your highlighted Pro card
            </span>
          </div>
          {image && (
            <div className="wk-try">
              <b className="wk-t">✦ Try this on your Pro card</b>
              <ul>
                <li>Make Pro dark so it stands out on a light page</li>
                <li>Lift it about 24px above Starter and Team</li>
                <li>Add a “Popular” badge, keep one bright button</li>
              </ul>
            </div>
          )}
          <span className="wk-btn wk-btn--dark wk-push-b">
            {image ? (
              <>
                <span className="wk-ico wk-ico--w">{Icon.img}</span> Paste into design
              </>
            ) : (
              '▶  Jump to 5:56'
            )}
          </span>
        </div>
      </div>
      <hr className="wk-hr" />
      <div className="wk-row">
        <span className="wk-s">✓ Done looking. Your frame wasn’t saved.</span>
        <span className="wk-s wk-push">↑↓ move · ⏎ open</span>
      </div>
    </div>
  )
}

// Scales a fixed-size design to whatever width it's given, keeping exact proportions.
export function Fit({ width, children }) {
  const outer = useRef(null)
  const inner = useRef(null)
  const [s, setS] = useState(1)
  const [h, setH] = useState(0)
  useEffect(() => {
    const el = outer.current
    if (!el) return
    const update = () => {
      const scale = Math.min(1, el.clientWidth / width)
      setS(scale)
      setH((inner.current?.offsetHeight || 0) * scale)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    if (inner.current) ro.observe(inner.current)
    return () => ro.disconnect()
  }, [width])
  return (
    <div ref={outer} className="wk-fit" style={{ height: h || undefined }}>
      <div ref={inner} style={{ width, transform: `scale(${s})`, transformOrigin: 'top center' }}>
        {children}
      </div>
    </div>
  )
}

const TABS = [
  { id: 'bar', label: 'Reyo bar', width: 640, render: () => (
    <div className="wk-pair">
      <WfBarChoose />
      <WfBarReading />
    </div>
  ) },
  { id: 'save', label: 'Save card', width: 340, render: () => <WfSaveCard /> },
  { id: 'video', label: 'Results · video', width: 680, render: () => <WfResults kind="video" /> },
  { id: 'image', label: 'Results · image', width: 680, render: () => <WfResults kind="image" /> },
]

export default function ReyoWireframes() {
  const [tab, setTab] = useState('bar')
  const t = TABS.find((x) => x.id === tab)
  return (
    <div className="wkb">
      <div className="wkb__head">
        <span className="wkb__title">Wireframes · greyscale</span>
        <div className="wkb__tabs" role="tablist">
          {TABS.map((x) => (
            <button key={x.id} role="tab" aria-selected={tab === x.id} className={tab === x.id ? 'is-on' : ''} onClick={() => setTab(x.id)}>
              {x.label}
            </button>
          ))}
        </div>
      </div>
      <div className="wkb__stage">
        <Fit key={t.id} width={t.width}>
          {t.render()}
        </Fit>
      </div>
    </div>
  )
}

// ---------- Tara (mobile) ----------
const TIcon = {
  bell: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 11 V7.5 a4 4 0 0 1 8 0 V11 l1 1.2 H3 z M6.5 13.5 a1.6 1.6 0 0 0 3 0" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10 3.5 L5.5 8 L10 12.5" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 4.5 H12.5 M6 4.5 V3 H10 V4.5 M4.5 4.5 L5.2 13 H10.8 L11.5 4.5" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 2.5 H9.5 L12 5 V13.5 H4 z M6 8 H10 M6 10.5 H10" />
    </svg>
  ),
  cal: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
      <path d="M2.5 6.5 H13.5 M5.5 2 V4.5 M10.5 2 V4.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2 L13 4 V8 C13 11 10.8 13 8 14 C5.2 13 3 11 3 8 V4 z" />
    </svg>
  ),
  warn: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.5 L14 13 H2 z M8 6.5 V9.5 M8 11.3 V11.5" />
    </svg>
  ),
}

function Phone({ children }) {
  return (
    <div className="wk wk-phone">
      <div className="wk-phone__bar">
        <span>12:30</span>
        <span className="wk-phone__island" />
        <span className="wk-phone__icons">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="wk-phone__body">{children}</div>
    </div>
  )
}

const Check = () => <span className="wk-check">{Icon.tick}</span>

export function WfTaraReading() {
  return (
    <Phone>
      <div className="wk-col wk-tcenter wk-grow">
        <div className="wk-doc">
          <span style={{ width: '78%' }} />
          <span style={{ width: '60%' }} />
          <span className="is-dark" style={{ width: '46%' }} />
          <span style={{ width: '70%' }} />
          <span style={{ width: '40%' }} />
          <span className="wk-doc__badge">{TIcon.shield}</span>
        </div>
        <b className="wk-hh">Reading your document</b>
        <span className="wk-s">Reading on this phone, nothing uploaded</span>
        <div className="wk-col wk-gap10 wk-checks">
          {['Finding the text', 'Spotting dates', 'Setting reminders'].map((t) => (
            <span key={t} className="wk-row wk-gap8 wk-t wk-n">
              <Check /> {t}
            </span>
          ))}
        </div>
      </div>
      <span className="wk-btn wk-btn--soft">
        <span className="wk-ico">{TIcon.shield}</span> Processed on this phone
      </span>
    </Phone>
  )
}

export function WfTaraReview() {
  return (
    <Phone>
      <div className="wk-row">
        <span className="wk-s">Discard</span>
        <b className="wk-t wk-abs-c">Check what we read</b>
      </div>
      <span className="wk-s">Nothing is saved yet. Edit anything that looks off, then confirm.</span>
      <div className="wk-warn">
        <b className="wk-row wk-gap6 wk-t">
          <span className="wk-ico wk-ink">{TIcon.warn}</span> One field needs your eyes
        </b>
        <span className="wk-s">Two dates appear on this document. We picked the one labelled “Policy expires”. Please check it.</span>
      </div>
      <div className="wk-group">
        <div>
          <span className="wk-s">What is it</span>
          <b className="wk-t wk-n">Health insurance policy</b>
        </div>
        <div>
          <span className="wk-s">Policy number</span>
          <b className="wk-t wk-n">P/181100/01/2026/012384</b>
        </div>
        <div>
          <span className="wk-s">Expires on</span>
          <span className="wk-hl">Mon, 10 August</span>
          <span className="wk-s wk-ink">Please check this</span>
        </div>
        <div>
          <span className="wk-s">Amount</span>
          <b className="wk-t wk-n">₹9,120 renewal</b>
        </div>
      </div>
      <span className="wk-label wk-caps">From your document</span>
      <span className="wk-btn wk-btn--dark wk-btn--round wk-push-b">Confirm anyway</span>
    </Phone>
  )
}

export function WfTaraDetail() {
  return (
    <Phone>
      <div className="wk-row">
        <span className="wk-roundbtn">{TIcon.back}</span>
        <b className="wk-t wk-abs-c">Vehicle</b>
        <span className="wk-roundbtn wk-push">{TIcon.trash}</span>
      </div>
      <div className="wk-hero">
        <span className="wk-label wk-caps">In 78 days</span>
        <b className="wk-hh">Car insurance renewal</b>
        <span className="wk-row wk-gap6 wk-s">
          <span className="wk-ico">{TIcon.cal}</span> Fri, 3 October
        </span>
      </div>
      <div className="wk-group">
        <div>
          <span className="wk-s">Source</span>
          <b className="wk-t wk-n">ICICI Lombard</b>
        </div>
        <div>
          <span className="wk-s">Details</span>
          <b className="wk-t wk-n">₹14,200 · comprehensive</b>
        </div>
        <div className="wk-row wk-gap10">
          <span className="wk-roundbtn">{TIcon.doc}</span>
          <div className="wk-col">
            <b className="wk-t wk-n">Attached document</b>
            <span className="wk-s">Policy PDF included</span>
          </div>
        </div>
      </div>
      <span className="wk-label wk-caps">Reminder schedule</span>
      <div className="wk-group wk-group--rows">
        {['30 days before', '7 days before', '1 day before'].map((t) => (
          <div key={t} className="wk-row wk-gap10">
            <span className="wk-ico">{TIcon.bell}</span>
            <span className="wk-t wk-n">{t}</span>
            <span className="wk-push">
              <Check />
            </span>
          </div>
        ))}
      </div>
      <span className="wk-btn wk-btn--round wk-push-b">Mark as done</span>
    </Phone>
  )
}

export function TaraWireframes() {
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.innerWidth < 700)
  useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 700)
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  const screens = [
    ['01', 'Reading on the phone', <WfTaraReading key="a" />],
    ['02', 'Check what we read', <WfTaraReview key="b" />],
    ['03', 'Reminder detail', <WfTaraDetail key="c" />],
  ]
  return (
    <div className="wkb">
      <div className="wkb__head">
        <span className="wkb__title">Wireframes · greyscale</span>
        <span className="wkb__title wkb__title--soft">Read → Check → Track</span>
      </div>
      <div className="wkb__stage">
        {narrow ? (
          <div className="wk-strip">
            {screens.map(([n, l, el]) => (
              <figure key={n} className="wk-fig wk-strip__item">
                <Fit width={300}>{el}</Fit>
                <figcaption>
                  <b>{n}</b> {l}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <Fit width={1000}>
            <div className="wk-trio">
              {screens.map(([n, l, el]) => (
                <figure key={n} className="wk-fig">
                  {el}
                  <figcaption>
                    <b>{n}</b> {l}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Fit>
        )}
      </div>
    </div>
  )
}
