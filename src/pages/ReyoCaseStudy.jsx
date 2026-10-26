import { useEffect, useRef, useState } from 'react'
import ReyoWireframes, { TaraWireframes } from '../components/ReyoWireframes.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { reyo } from '../content/reyo.js'
import { site } from '../data.js'
import { Reveal } from '../components/Reveal.jsx'
import { Sparkle, Arrow, Check } from '../components/Icons.jsx'
import '../case-study.css'
import FigmaScene from '../components/FigmaScene.jsx'

const ease = [0.22, 1, 0.36, 1]

// A laptop drawn in CSS. Drop a flat 16:9 screen export inside it.
// Numbered call-outs drawn over the laptop: a dot on the UI, a line, and a label box.
function Annotations({ notes }) {
  const W = 22 // label width, % of screen
  return (
    <div className="annos" aria-hidden="true">
      <svg className="annos__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        {notes.map((n, i) => {
          const bx = n.box.side === 'left' ? n.box.x + (n.box.w || W) : n.box.x
          const by = n.box.y + 4
          return (
            <motion.line
              key={i}
              x1={n.at.x}
              y1={n.at.y}
              x2={bx}
              y2={by}
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.15 }}
            />
          )
        })}
      </svg>
      {notes.map((n, i) => (
        <motion.span
          key={`d${i}`}
          className="annos__dot"
          style={{ left: `${n.at.x}%`, top: `${n.at.y}%` }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.8 + i * 0.15 }}
        >
          {i + 1}
        </motion.span>
      ))}
      {notes.map((n, i) => (
        <motion.div
          key={`b${i}`}
          className={`annos__box annos__box--${n.box.side}`}
          style={{ left: `${n.box.x}%`, top: `${n.box.y}%`, width: `${n.box.w || W}%` }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 1.1 + i * 0.15 }}
        >
          <b>
            <i>{i + 1}</i>
            {n.title}
          </b>
          <span>{n.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

// A phone frame for mobile screens. Annotations can sit outside the screen (x < 0 or > 100).
function Phone({ image, label, notes }) {
  return (
    <div className={`phone ${notes ? 'phone--annotated' : ''}`}>
      <div className="phone__stage">
        <div className="phone__body">
          <span className="phone__island" aria-hidden="true" />
          <div className="phone__screen">
            {image ? (
              <img src={image} alt={label} />
            ) : (
              <div className="phone__empty">
                <span className="shot__badge">Add screen</span>
                <span className="shot__label">{label}</span>
              </div>
            )}
          </div>
        </div>
        {notes && <Annotations notes={notes} />}
      </div>
    </div>
  )
}

function Laptop({ image, label, fit = 'cover', pop, notes, scene }) {
  return (
    <div className="laptop">
      <div className="laptop__lid">
        <span className="laptop__cam" aria-hidden="true" />
        <div className="laptop__stage">
        <div className={`laptop__screen ${fit === 'contain' ? 'laptop__screen--canvas' : ''}`}>
          {fit === 'figma' ? (
            <FigmaScene image={image} label={label} scene={scene} />
          ) : image ? (
            <img src={image} alt={label} className={fit === 'contain' ? 'laptop__panel' : ''} />
          ) : (
            <div className="laptop__empty">
              <span className="shot__badge">Add screen</span>
              <span className="shot__label">{label}</span>
            </div>
          )}
          <span className="laptop__glare" aria-hidden="true" />
        </div>
        {pop && (
          <motion.img
            className={`laptop__pop ${pop.flat ? 'laptop__pop--flat' : ''}`}
            src={pop.image}
            alt=""
            aria-hidden="true"
            style={{ left: `${pop.x}%`, top: `${pop.y}%`, width: `${pop.w}%` }}
            initial={{ opacity: 0, scale: 0.62, x: '-50%', y: '-50%' }}
            whileInView={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          />
        )}
        {notes && <Annotations notes={notes} />}
        </div>
      </div>
      <div className="laptop__base" aria-hidden="true">
        <span className="laptop__notch" />
      </div>
    </div>
  )
}

// Shows the image when there is one, otherwise a labelled drop-zone placeholder.
// Image that opens full-size on click, so dense tables stay readable.
// Full-screen image viewer, portalled to <body> so transformed parents can't trap it.

function AnnotShot({ image, label, notes }) {
  const [open, setOpen] = useState(false)
  const [hot, setHot] = useState(null)
  return (
    <div className="ashot">
      <div className="ashot__frame">
        <button className="ashot__img" onClick={() => setOpen(true)} aria-label={`Enlarge: ${label}`}>
          <img src={image} alt={label} loading="lazy" />
        </button>
        {notes.map((n) => (
          <span
            key={n.n}
            className={`ashot__pin ${hot === n.n ? 'is-hot' : ''}`}
            style={{ left: `${n.at.x}%`, top: `${n.at.y}%` }}
            onMouseEnter={() => setHot(n.n)}
            onMouseLeave={() => setHot(null)}
          >
            {n.n}
          </span>
        ))}
      </div>
      <ol className="ashot__notes">
        {notes.map((n) => (
          <li key={n.n} className={hot === n.n ? 'is-hot' : ''} onMouseEnter={() => setHot(n.n)} onMouseLeave={() => setHot(null)}>
            <span className="ashot__num">{n.n}</span>
            <div>
              <b>{n.title}</b>
              <p>{n.text}</p>
            </div>
          </li>
        ))}
      </ol>
      {open && <Lightbox image={image} label={label} onClose={() => setOpen(false)} />}
    </div>
  )
}

function Lightbox({ image, label, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
  return createPortal(
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={image} alt={label} initial={{ scale: 0.96 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} />
      <button className="lightbox__close" onClick={onClose} aria-label="Close" autoFocus>
        ×
      </button>
    </motion.div>,
    document.body
  )
}

// Image that opens full-size on click, so dense boards stay readable.
function ZoomShot({ image, label, className }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={`shot shot--zoom ${className}`} onClick={() => setOpen(true)} aria-label={`Enlarge: ${label}`}>
        <img src={image} alt={label} loading="lazy" />
        <span className="shot__hint">Click to enlarge</span>
      </button>
      {open && <Lightbox image={image} label={label} onClose={() => setOpen(false)} />}
    </>
  )
}

function Shot({ image, label, ratio = '16 / 10', className = '', device, fit, pop, notes, scene }) {
  if (device === 'laptop') return <Laptop image={image} label={label} fit={fit} pop={pop} notes={notes} scene={scene} />
  if (device === 'phone') return <Phone image={image} label={label} notes={notes} />
  if (image) return <ZoomShot image={image} label={label} className={className} />

  return (
    <div className={`shot shot--empty ${className}`} style={{ aspectRatio: ratio }}>
      <span className="shot__badge">Add screen</span>
      <span className="shot__label">{label}</span>
    </div>
  )
}

export function TopBar({ title = 'Reyo' }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  return (
    <header className="cs-bar">
      <motion.span className="cs-bar__progress" style={{ scaleX }} />
      <div className="cs-bar__inner">
        <Link to="/" className="cs-bar__back">
          <span aria-hidden="true">←</span> All work
        </Link>
        <span className="cs-bar__title">
          {title} <Sparkle size={11} />
        </span>
        <a className="btn btn--violet cs-bar__cta" href={`mailto:${site.email}`}>
          Let’s talk
        </a>
      </div>
    </header>
  )
}

export function Hero({ h = reyo.hero, visual }) {
  return (
    <section className="cs-hero">
      <div className="wrap">
        <motion.div className="cs-hero__chips" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          {h.chips.map((c) => (
            <span key={c} className="cs-chip">
              {c}
            </span>
          ))}
          <span className="cs-chip cs-chip--badge">{h.badge}</span>
        </motion.div>
        <motion.h1 className="cs-hero__title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }}>
          {h.title}
        </motion.h1>
        <motion.p className="cs-hero__intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.25 }}>
          {h.intro}
        </motion.p>
        {h.features && (
          <motion.ul className="cs-features" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.33 }}>
            {h.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </motion.ul>
        )}
        <motion.dl className="cs-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {h.meta.map((m) => (
            <div key={m.label} className={m.items ? 'cs-meta__role' : undefined}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
              {m.items && (
                <ul className="cs-meta__did">
                  {m.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div className="wrap wrap--wide" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.45 }}>
        {visual || <Shot image={h.image} label={h.imageLabel} device={h.device} fit={h.fit} className="shot--hero" />}
      </motion.div>

      <div className="wrap">
        <div className="cs-stats">
          {h.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="cs-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const p = reyo.problem
  const tilt = [-3, 2, -1.5, 3]
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="section-title">{p.title}</h2>
        </Reveal>
        <div className="pcards">
          {p.cards.map((c, i) => (
            <motion.div
              key={c.kicker}
              className={`pcard ${c.highlight ? 'pcard--hl' : ''}`}
              style={{ rotate: tilt[i] }}
              initial={{ y: 30, opacity: 0.35 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ rotate: 0, y: -6 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <span className="pcard__kicker">{c.kicker}</span>
              <p>{c.text}</p>
            </motion.div>
          ))}
        </div>
        <Reveal className="pfoot">
          <div className="pfoot__stat">
            <strong>{p.stat.value}</strong>
            <span>{p.stat.text}</span>
          </div>
          <blockquote className="pfoot__quote">
            <p>{p.quote.text}</p>
            <cite>{p.quote.who}</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function Loop() {
  const l = reyo.loop
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{l.eyebrow}</p>
          <h2 className="section-title">{l.title}</h2>
        </Reveal>
        <div className="loop">
          {l.steps.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1} className="loop__step">
              <span className="loop__num">{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
          <svg className="loop__line" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M60 20 H940"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        <p className="loop__back">
          <span aria-hidden="true">↺</span> and every find teaches it what to bring back next time
        </p>
      </div>
    </section>
  )
}


function Journey() {
  const j = reyo.journey
  if (!j) return null
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{j.eyebrow}</p>
          <h2 className="section-title">{j.title}</h2>
          <p className="cs-head__text">{j.sub}</p>
        </Reveal>
        <div className="jrny">
          {j.stages.map((st, i) => (
            <Reveal key={st.name} delay={i * 0.1} className={`jrny__stage jrny__stage--${i}`}>
              <div className="jrny__top">
                <span className="jrny__num">{String(i).padStart(2, '0')}</span>
                <h3>{st.name}</h3>
              </div>
              <p className="jrny__q">{st.q}</p>
              <p className="jrny__text">{st.text}</p>
              <ul className="jrny__tools">
                {st.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {i < j.stages.length - 1 && <span className="jrny__arrow" aria-hidden="true">→</span>}
            </Reveal>
          ))}
        </div>
        <Reveal className="jrny__back">
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M875 4 V30 Q875 52 853 52 H397 Q375 52 375 30 V4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 7"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.path
              d="M366 16 L375 4 L384 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.3 }}
            />
          </svg>
          <p>
            <span aria-hidden="true">↺</span> {j.back}
          </p>
        </Reveal>
      </div>
    </section>
  )
}


function Personas() {
  const pp = reyo.personas
  if (!pp) return null
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{pp.eyebrow}</p>
          <h2 className="section-title">{pp.title}</h2>
          <p className="cs-head__text">{pp.sub}</p>
        </Reveal>
        <div className="persona-list">
          {pp.cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className="prs">
              <figure className="prs__photo">
                {c.image ? (
                  <img src={c.image} alt={`${c.name}, persona`} loading="lazy" />
                ) : (
                  <div className="prs__ph">
                    <span>{c.initial}</span>
                    <small>Add photo</small>
                  </div>
                )}
                <figcaption>
                  <b>{c.name}</b>
                  <span>{c.meta}</span>
                  <em>{c.type}</em>
                </figcaption>
              </figure>
              <div className="prs__body">
                <p className="prs__quote">“{c.quote}”</p>
                <div className="prs__cols">
                  <div>
                    <span className="prs__label">Lifestyle</span>
                    <ul>
                      {c.lifestyle.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="prs__label prs__label--pain">Pain points</span>
                    <ul>
                      {c.pains.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="prs__problem">
                  <span className="prs__label">The problem</span>
                  <p>{c.problem}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


function Goals() {
  const g = reyo.goals
  if (!g) return null
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 className="section-title">{g.title}</h2>
        </Reveal>
        <div className="goals">
          {g.items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1} className={`goal goal--${i}`}>
              <span className="goal__label">{it.label}</span>
              <p className="goal__text">{it.text}</p>
              <span className="goal__measure">Measured by: {it.measure}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


// FigJam-style flow: pill = start/end, rectangle = step, diamond = decision.
const FLOWS = [
  {
    name: 'Save',
    h: 290,
    nodes: [
      { id: 's1', t: 'pill', cx: 90, cy: 80, w: 156, h: 52, lines: ['Watching a tutorial'] },
      { id: 's2', t: 'box', cx: 275, cy: 80, w: 150, h: 66, lines: ['Clicks', 'Save to Reyo'] },
      { id: 's3', t: 'dia', cx: 445, cy: 80, w: 124, h: 100, lines: ['Signed in?'] },
      { id: 's4', t: 'box', cx: 625, cy: 80, w: 160, h: 66, lines: ['Exact moment', 'captured'] },
      { id: 's5', t: 'box', cx: 810, cy: 80, w: 160, h: 66, lines: ['Adds why they', 'saved it'], tag: 'optional' },
      { id: 's6', t: 'box', cx: 990, cy: 80, w: 150, h: 66, lines: ['AI sorts it', 'by UI part'], ai: true },
      { id: 's7', t: 'end', cx: 1140, cy: 80, w: 104, h: 52, lines: ['Saved ✓'] },
      { id: 's8', t: 'box', cx: 445, cy: 220, w: 150, h: 56, lines: ['Quick sign-in'] },
    ],
    edges: [
      { d: 'M168 80 H200' },
      { d: 'M350 80 H383' },
      { d: 'M507 80 H545', label: 'Yes', lx: 524, ly: 70 },
      { d: 'M705 80 H730' },
      { d: 'M890 80 H915' },
      { d: 'M1065 80 H1088' },
      { d: 'M445 130 V192', label: 'No', lx: 460, ly: 165 },
      { d: 'M520 220 H625 V113' },
    ],
  },
  {
    name: 'Find',
    h: 300,
    nodes: [
      { id: 'f1', t: 'pill', cx: 90, cy: 80, w: 156, h: 52, lines: ['Stuck mid-design'] },
      { id: 'f2', t: 'box', cx: 275, cy: 80, w: 150, h: 66, lines: ['Opens Reyo with', 'one shortcut'] },
      { id: 'f3', t: 'dia', cx: 445, cy: 80, w: 134, h: 108, lines: ['Let Reyo see', 'the screen?'] },
      { id: 'f4', t: 'box', cx: 630, cy: 80, w: 170, h: 72, lines: ['Saves matched', 'to their screen'], ai: true },
      { id: 'f5', t: 'dia', cx: 810, cy: 80, w: 118, h: 96, lines: ['Found it?'] },
      { id: 'f6', t: 'box', cx: 985, cy: 80, w: 156, h: 72, lines: ['Jumps to the moment', 'or pastes the image'] },
      { id: 'f7', t: 'end', cx: 1140, cy: 80, w: 104, h: 52, lines: ['Back to', 'work'] },
      { id: 'f8', t: 'box', cx: 445, cy: 232, w: 160, h: 60, lines: ['Searches by name', 'or UI part'] },
      { id: 'f9', t: 'box', cx: 810, cy: 232, w: 160, h: 60, lines: ['Browses the library', 'by UI part'] },
    ],
    edges: [
      { d: 'M168 80 H200' },
      { d: 'M350 80 H378' },
      { d: 'M512 80 H545', label: 'Yes', lx: 528, ly: 70 },
      { d: 'M715 80 H751' },
      { d: 'M869 80 H907', label: 'Yes', lx: 888, ly: 70 },
      { d: 'M1063 80 H1088' },
      { d: 'M445 134 V202', label: 'No', lx: 460, ly: 172 },
      { d: 'M525 232 H630 V116' },
      { d: 'M798 128 V202', label: 'No', lx: 772, ly: 172 },
      { d: 'M822 202 V128' },
    ],
  },
]

function FlowNode({ n }) {
  const x = n.cx - n.w / 2
  const y = n.cy - n.h / 2
  const lh = 16
  const top = n.cy - ((n.lines.length - 1) * lh) / 2 + 5
  let shape
  if (n.t === 'dia') {
    shape = <polygon className="uf__dia" points={`${n.cx},${y} ${n.cx + n.w / 2},${n.cy} ${n.cx},${y + n.h} ${x},${n.cy}`} />
  } else {
    const r = n.t === 'box' ? 12 : n.h / 2
    shape = <rect className={`uf__${n.t}${n.ai ? ' uf__box--ai' : ''}`} x={x} y={y} width={n.w} height={n.h} rx={r} />
  }
  return (
    <g>
      {shape}
      <text className={`uf__txt uf__txt--${n.t}`} textAnchor="middle">
        {n.lines.map((l, i) => (
          <tspan key={l} x={n.cx} y={top + i * lh - (n.tag ? 6 : 0)}>
            {l}
          </tspan>
        ))}
      </text>
      {n.tag && (
        <text className="uf__tag" x={n.cx} y={n.cy + 26} textAnchor="middle">
          {n.tag}
        </text>
      )}
      {n.ai && (
        <text className="uf__spark" x={x + n.w - 14} y={y + 18} textAnchor="middle">
          ✦
        </text>
      )}
    </g>
  )
}

function UserFlow() {
  const u = reyo.userflow
  if (!u) return null
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{u.eyebrow}</p>
          <h2 className="section-title">{u.title}</h2>
          <p className="cs-head__text">{u.sub}</p>
        </Reveal>
        <Reveal className="uf">
          <div className="uf__legend">
            <span><i className="uf__k uf__k--pill" /> Start / end</span>
            <span><i className="uf__k uf__k--box" /> Step</span>
            <span><i className="uf__k uf__k--dia" /> Decision</span>
            <span><i className="uf__k uf__k--ai">✦</i> Reyo’s AI does it</span>
          </div>
          {FLOWS.map((f, i) => (
            <div key={f.name} className="uf__flow">
              <span className="uf__name">
                <b>{String(i + 1).padStart(2, '0')}</b> {f.name}
              </span>
              <div className="uf__scroll">
                <svg viewBox={`0 0 1200 ${f.h}`} role="img" aria-label={`${f.name} flow`}>
                  <defs>
                    <marker id={`uf-arrow-${i}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M0 0 L10 5 L0 10 z" className="uf__head" />
                    </marker>
                  </defs>
                  {f.edges.map((e) => (
                    <g key={e.d}>
                      <path d={e.d} className="uf__edge" markerEnd={`url(#uf-arrow-${i})`} />
                      {e.label && (
                        <text x={e.lx} y={e.ly} className="uf__lbl" textAnchor="middle">
                          {e.label}
                        </text>
                      )}
                    </g>
                  ))}
                  {f.nodes.map((n) => (
                    <FlowNode key={n.id} n={n} />
                  ))}
                </svg>
              </div>
            </div>
          ))}
          <p className="uf__hint">Scroll sideways to see the full flow →</p>
        </Reveal>
      </div>
    </section>
  )
}


function InfoArch() {
  const a = reyo.ia
  if (!a) return null
  const levels = ['Level 1 · Product', 'Level 2 · Area', 'Level 3 · Screen', 'Level 4 · Sub-screen']
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="section-title">{a.title}</h2>
          <p className="cs-head__text">{a.sub}</p>
        </Reveal>
        <Reveal className="iat">
          <div className="iat__legend">
            {levels.map((l, i) => (
              <span key={l}>
                <i className={`iat__k iat__k--${i + 1}`} /> {l}
              </span>
            ))}
            <span>
              <i className="iat__k iat__k--info" /> What’s inside
            </span>
          </div>
          <div className="iat__scroll">
            <div className="iat__tree">
              <div className="iat__root">{a.root}</div>
              <div className="iat__cols" style={{ '--n': a.branches.length }}>
                {a.branches.map((b) => (
                  <div key={b.name} className="iat__col">
                    <div className="iat__l2">
                      <b>{b.name}</b>
                      <span>{b.where}</span>
                    </div>
                    {[b.l3, b.l4].filter(Boolean).map((lv, k) => (
                      <div key={lv.name} className="iat__step">
                        <div className={`iat__node iat__node--${k + 3}`}>{lv.name}</div>
                        <ul className={`iat__info iat__info--${k + 3}`}>
                          {lv.info.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function DecisionTable({ rows, image, label }) {
  const [open, setOpen] = useState(0)
  const [full, setFull] = useState(false)
  const r = rows[open]
  return (
    <div className="dtable">
      <div className="dtable__head">
        <span>Insight</span>
        <span>Decision</span>
        {image && (
          <button className="dtable__full" onClick={() => setFull(true)}>
            View full table ↗
          </button>
        )}
      </div>
      <ul className="dtable__rows">
        {rows.map((row, i) => (
          <li key={row.insight} className={i === open ? 'is-open' : ''}>
            <button className="dtable__row" onClick={() => setOpen(i)} aria-expanded={i === open}>
              <span className="dtable__insight">{row.insight}</span>
              <span className="dtable__decision">{row.decision}</span>
            </button>
          </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={open}
          className="dtable__detail"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <p className="dtable__what">{r.detail}</p>
          <div className="dtable__cols">
            <div>
              <span>Chose not to</span>
              <p>{r.not}</p>
            </div>
            <div>
              <span>How I’d measure it</span>
              <p>{r.measure}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {image && full && <Lightbox image={image} label={label} onClose={() => setFull(false)} />}
    </div>
  )
}

const berryRamp = ['#FBE7EC', '#F5B8C8', '#F2A9BD', '#F0A3B7', '#E88AA4', '#A63D5B', '#8E2F4C', '#7A2841', '#3D2330']
const keyColours = [
  { name: 'Berry', token: 'berry/700', hex: '#8E2F4C' },
  { name: 'Cream', token: 'neutral/25', hex: '#FAF5F4' },
  { name: 'Ink', token: 'neutral/ink', hex: '#2A2320' },
  { name: 'Peach', token: 'peach/200', hex: '#F7C9A8' },
]
const statusColours = ['#4F6136', '#E8B455', '#B42318']
const typeScale = [
  { token: 'display/32-bold', size: 32, weight: 700, track: '-0.01em', sample: 'Nice find.' },
  { token: 'heading/20-medium', size: 20, weight: 500 },
  { token: 'body/14-regular', size: 14, weight: 400 },
  { token: 'caption/11-regular', size: 11, weight: 400 },
]
const spaceScale = [4, 8, 12, 16, 24, 32, 48, 64]
const radiusScale = [
  { name: 'xs', v: 4 },
  { name: 'sm', v: 8 },
  { name: 'md', v: 12 },
  { name: 'lg', v: 16 },
  { name: 'pill', v: 999 },
]

function SystemSnapshot({ frames }) {
  const [view, setView] = useState(null)
  return (
    <div className="ds">
      <div className="ds__head">
        <span className="ds__title">Reyo foundations</span>
        <span className="ds__links">
          {frames.map((f) => (
            <button key={f.name} onClick={() => setView(f)}>
              {f.name} ↗
            </button>
          ))}
        </span>
      </div>

      <div className="ds__grid">
        <section className="ds__tile ds__tile--colour">
          <span className="ds__label">Colour</span>
          <div className="ds__keys">
            {keyColours.map((c) => (
              <div key={c.token} className="ds__key">
                <span className="ds__swatch" style={{ background: c.hex }} />
                <b>{c.name}</b>
                <small>{c.hex}</small>
              </div>
            ))}
          </div>
          <div className="ds__ramp" aria-label="Berry ramp, 50 to 950">
            {berryRamp.map((h) => (
              <span key={h} style={{ background: h }} />
            ))}
          </div>
          <div className="ds__status">
            {statusColours.map((h, i) => (
              <span key={h} style={{ background: h }} />
            ))}
            <small>Success · Warning · Error</small>
          </div>
        </section>

        <section className="ds__tile ds__tile--type">
          <span className="ds__label">Type · DM Sans</span>
          {typeScale.map((t) => (
            <div key={t.token} className="ds__type">
              <span style={{ fontSize: t.size, fontWeight: t.weight, letterSpacing: t.track || 0 }}>{t.sample || 'Note to future you'}</span>
              <small>{t.token}</small>
            </div>
          ))}
        </section>

        <section className="ds__tile ds__tile--space">
          <span className="ds__label">Spacing · 4px rhythm</span>
          <div className="ds__space">
            {spaceScale.map((v) => (
              <div key={v}>
                <span style={{ width: v * 1.1 }} />
                <small>{v}</small>
              </div>
            ))}
          </div>
          <span className="ds__label ds__label--sub">Radius</span>
          <div className="ds__radius">
            {radiusScale.map((r) => (
              <div key={r.name}>
                <span style={{ borderRadius: Math.min(r.v, 999) }} />
                <small>{r.name}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ds__tile ds__tile--modes">
          <span className="ds__label">Light + dark</span>
          <div className="ds__modes">
            <div className="ds__card ds__card--light">
              <b>Saved. Nice find.</b>
              <p>A useful thought, ready when you need it.</p>
              <span className="ds__chip">Colour &amp; type</span>
            </div>
            <div className="ds__card ds__card--dark">
              <b>Saved. Nice find.</b>
              <p>A useful thought, ready when you need it.</p>
              <span className="ds__chip">Colour &amp; type</span>
            </div>
          </div>
        </section>
      </div>
      {view && <Lightbox image={view.image} label={`Reyo design system: ${view.name}`} onClose={() => setView(null)} />}
    </div>
  )
}


const taraKeys = [
  { name: 'Night', hex: '#110B16' },
  { name: 'Surface', hex: '#1C1321' },
  { name: 'Plum', hex: '#592670' },
  { name: 'Orchid', hex: '#C785F2' },
]
const taraRamp = ['#F3E6FC', '#E2C6F9', '#C785F2', '#B682D5', '#9A5BC0', '#7D3B9C', '#592670', '#34213E', '#1C1321']
const taraType = [
  { token: 'display/32 · Fraunces', cls: 'serif', size: 30, weight: 600, sample: 'Your horizon' },
  { token: 'title/22 · Fraunces', cls: 'serif', size: 21, weight: 600, sample: 'Insurance renewal' },
  { token: 'body/16 · Figtree', size: 15, weight: 400, sample: 'Vehicle · ICICI Lombard' },
  { token: 'label/11 · Figtree', size: 11, weight: 500, track: '0.14em', upper: true, sample: 'Next up · in 7 days' },
]
const taraRadius = [
  { name: 'sm', v: 8 },
  { name: 'md', v: 12 },
  { name: 'lg', v: 16 },
  { name: 'xl', v: 24 },
  { name: 'pill', v: 999 },
]
const taraCats = [
  { name: 'Identity', item: 'Passport expires', days: '58d', hex: '#C785F2' },
  { name: 'Vehicle', item: 'Car insurance renewal', days: '78d', hex: '#6CA9F4' },
  { name: 'Home', item: 'Rent agreement renewal', days: '121d', hex: '#DF7EAF' },
  { name: 'Finance', item: 'Credit card annual fee', days: '160d', hex: '#5ED5A8' },
]

function TaraSystem() {
  return (
    <div className="ds ds--tara">
      <div className="ds__head">
        <span className="ds__title">Tara foundations</span>
        <span className="ds__tag">Dark first · calm by default</span>
      </div>
      <div className="ds__grid">
        <section className="ds__tile">
          <span className="ds__label">Colour</span>
          <div className="ds__keys">
            {taraKeys.map((c) => (
              <div key={c.hex} className="ds__key">
                <span className="ds__swatch" style={{ background: c.hex }} />
                <b>{c.name}</b>
                <small>{c.hex}</small>
              </div>
            ))}
          </div>
          <div className="ds__ramp" aria-label="Orchid to plum ramp">
            {taraRamp.map((h) => (
              <span key={h} style={{ background: h }} />
            ))}
          </div>
          <small className="ds__note">One accent. Urgency comes from the date, not from red.</small>
        </section>

        <section className="ds__tile">
          <span className="ds__label">Type · Fraunces + Figtree</span>
          {taraType.map((t) => (
            <div key={t.token} className="ds__type">
              <span
                className={t.cls === 'serif' ? 'ds__serif' : undefined}
                style={{ fontSize: t.size, fontWeight: t.weight, letterSpacing: t.track || 0, textTransform: t.upper ? 'uppercase' : 'none' }}
              >
                {t.sample}
              </span>
              <small>{t.token}</small>
            </div>
          ))}
        </section>

        <section className="ds__tile">
          <span className="ds__label">Spacing · 4px rhythm</span>
          <div className="ds__space">
            {spaceScale.map((v) => (
              <div key={v}>
                <span style={{ width: v * 1.1 }} />
                <small>{v}</small>
              </div>
            ))}
          </div>
          <span className="ds__label ds__label--sub">Radius</span>
          <div className="ds__radius">
            {taraRadius.map((r) => (
              <div key={r.name}>
                <span style={{ borderRadius: r.v }} />
                <small>{r.name}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ds__tile">
          <span className="ds__label">Category colours</span>
          <div className="ds__cats">
            {taraCats.map((c) => (
              <div key={c.name} className="ds__cat">
                <span className="ds__cat-dot" style={{ '--c': c.hex }} />
                <div>
                  <b>{c.item}</b>
                  <small>{c.name}</small>
                </div>
                <em style={{ color: c.hex }}>{c.days}</em>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function QuestionCards({ cards, variant }) {
  return (
    <div className={`qcards qcards--${variant || 'q'}`}>
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          className="qcard"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: i * 0.07 }}
        >
          <span className="qcard__num">{c.k || String(i + 1).padStart(2, '0')}</span>
          <strong>{c.title}</strong>
          {c.text && <p>{c.text}</p>}
        </motion.div>
      ))}
    </div>
  )
}

function Compare({ data }) {
  return (
    <div className="compare">
      <div className="compare__col">
        <span className="compare__label">What already exists</span>
        <ul>
          {data.exists.map((x) => (
            <li key={x.title}>
              <strong>{x.title}</strong>
              <span>{x.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="compare__col compare__col--gap">
        <span className="compare__label">What’s missing</span>
        <ul>
          {data.missing.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Affinity map: research notes clustered into themes, each with the insight it led to.
function AffinityMap({ groups }) {
  return (
    <div className="amap">
      {groups.map((g, i) => (
        <motion.div
          key={g.theme}
          className={`amap__group amap__group--${g.color}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: i * 0.07 }}
        >
          <div className="amap__head">
            <span>{String(i + 1).padStart(2, '0')}</span>
            <strong>{g.theme}</strong>
          </div>
          <ul className="amap__notes">
            {g.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function ResearchBoard({ data }) {
  return (
    <div className="rboard">
      <div className="rboard__stats">
        {data.stats.map((x, i) => (
          <motion.div key={x.label} className="rboard__stat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease, delay: i * 0.06 }}>
            <strong>{x.value}</strong>
            <span>{x.label}</span>
            <small>{x.sub}</small>
          </motion.div>
        ))}
      </div>
      <span className="rboard__label">What kept coming up</span>
      <ol className="rboard__list">
        {data.findings.map((f, i) => (
          <motion.li key={f.title} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease, delay: 0.12 + i * 0.07 }}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <strong>{f.title}</strong>
              <p>{f.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

const MARK = { y: '✓', p: '~', n: '✕' }
const MARK_LABEL = { y: 'Yes', p: 'Partly', n: 'No' }

function MatrixTable({ m }) {
  const Row = ({ r, us }) => (
    <tr className={us ? 'is-us' : ''}>
      <th scope="row">
        <strong>{r.name}</strong>
        <span>{r.type}</span>
      </th>
      {r.v.map((v, i) => (
        <td key={i}>
          <span className={`mx mx--${v}`} aria-label={MARK_LABEL[v]}>
            {MARK[v]}
          </span>
        </td>
      ))}
    </tr>
  )
  return (
    <div className="mtable">
      <table>
        <thead>
          <tr>
            <th scope="col">{m.firstCol || 'App'}</th>
            {m.cols.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {m.rows.map((r) => (
            <Row key={r.name} r={r} />
          ))}
          {m.us && <Row r={m.us} us />}
        </tbody>
      </table>
      <p className="mtable__key">
        <span className="mx mx--y">✓</span> Yes <span className="mx mx--p">~</span> Partly <span className="mx mx--n">✕</span> No
      </p>
    </div>
  )
}

function CompTable({ t }) {
  return (
    <div className="ctable">
      <table>
        <thead>
          <tr>
            {t.cols.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((r) => (
            <tr key={r.name}>
              <th scope="row">
                <strong>{r.name}</strong>
                <span>{r.type}</span>
              </th>
              <td>{r.does}</td>
              <td className="ctable__gap">{r.stops}</td>
            </tr>
          ))}
          {t.us && (
            <tr className="is-us">
              <th scope="row">
                <strong>{t.us.name}</strong>
                <span>{t.us.type}</span>
              </th>
              <td colSpan={2}>
                {t.us.does}. {t.us.stops}.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}


function WireBoard({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="wfb">
      <span className="wfb__title">Wireframes · greyscale <em>Click any to zoom</em></span>
      <div className="wfb__grid">
        {items.map((w) => (
          <button key={w.image} className={`wfb__item wfb__item--${w.area}`} onClick={() => setOpen(w)}>
            <img src={w.image} alt={w.label} loading="lazy" />
            <span>{w.label}</span>
          </button>
        ))}
      </div>
      {open && <Lightbox image={open.image} label={open.label} onClose={() => setOpen(null)} />}
    </div>
  )
}

export function StepVisual({ s }) {
  if (s.table) return <CompTable t={s.table} />
  if (s.matrix) return <MatrixTable m={s.matrix} />
  if (s.wireframes)
    return (
      <div
        className="wfstack"
        style={{ gridTemplateColumns: `repeat(${Math.min(s.wireframes.length, 3)}, minmax(0, ${s.wireframes.length === 1 ? '300px' : '1fr'}))`, justifyContent: 'center' }}
      >
        {s.wireframes.map((w) => (
          <img key={w.image} src={w.image} alt={w.label} loading="lazy" />
        ))}
      </div>
    )
  if (s.wirekit) return s.wirekit === 'tara' ? <TaraWireframes /> : <ReyoWireframes />
  if (s.wireboard) return <WireBoard items={s.wireboard} />
  if (s.affinity) return <AffinityMap groups={s.affinity} />
  if (s.research) return <ResearchBoard data={s.research} />
  if (s.questions) return <QuestionCards cards={s.questions} />
  if (s.jobs) return <QuestionCards cards={s.jobs} variant="jobs" />
  if (s.compare) return <Compare data={s.compare} />
  if (s.system) return <SystemSnapshot frames={s.system} />
  if (s.taraSystem) return <TaraSystem />
  if (s.decisions) return <DecisionTable rows={s.decisions} image={s.image} label={s.imageLabel} />
  if (s.notes) return <QuoteWall notes={s.notes} label={s.imageLabel} />
  return <Shot image={s.image} label={s.imageLabel} ratio="4 / 3" />
}

function useIsNarrow(q = '(max-width: 960px)') {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const on = () => setM(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [q])
  return m
}

// Pinned scrollytelling: the section is tall, the stage stays put,
// and scroll progress picks ONE step. Left text and right visual swap together.
export function Process({ pr = reyo.process }) {
  const n = pr.steps.length
  const narrow = useIsNarrow()
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useEffect(
    () =>
      scrollYProgress.on('change', (v) => {
        setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
      }),
    [scrollYProgress, n]
  )

  const goTo = (i) => {
    const el = ref.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + ((i + 0.5) / n) * travel, behavior: 'smooth' })
  }

  if (narrow) {
    return (
      <section className="cs-section process" id={pr.id || 'process'}>
        <div className="wrap">
          {pr.phase && <span className="process__phase">{pr.phase}</span>}
          <p className="eyebrow">{pr.eyebrow}</p>
          <div className="process__list">
            {pr.steps.map((s, i) => (
              <div key={s.tag} className="process__step">
                <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="pstep">
                  <StepText s={s} />
                </div>
                <StepVisual s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const step = pr.steps[active]
  return (
    <section className="process process--pinned" id={pr.id || 'process'} ref={ref} style={{ height: `calc(${n} * 100vh)` }}>
      <div className="process__pin">
        <div className="wrap process__frame">
          <div className="process__top">
            <div className="process__labels">
              {pr.phase && <span className="process__phase">{pr.phase}</span>}
              <p className="eyebrow">{step.eyebrow || pr.eyebrow}</p>
            </div>
            <ol className="process__nav" aria-label="Steps">
              {pr.steps.map((s, i) => (
                <li key={s.tag} className={i === active ? 'is-on' : ''}>
                  <button onClick={() => goTo(i)} aria-label={s.tag} aria-current={i === active ? 'step' : undefined}>
                    {String(i + 1).padStart(2, '0')}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="process__grid">
            <div className="process__text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="pstep"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <StepText s={step} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="process__visual">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="process__visual-inner"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <StepVisual s={step} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const tilts = [-2, 1.5, -1, 2, 1, -1.8, 1.6, -1.2]

export function QuoteWall({ notes, label }) {
  return (
    <figure className="qwall" aria-label={label}>
      {notes.map((n, i) => (
        <motion.blockquote
          key={i}
          className={`qnote sticky--${n.color}`}
          style={{ rotate: tilts[i % tilts.length] }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20, delay: i * 0.05 }}
        >
          <span className="qnote__pin" aria-hidden="true" />
          <footer className="qnote__who">
            {n.who} <span>{n.source}</span>
          </footer>
          <p className="qnote__quote">“{n.quote}”</p>
        </motion.blockquote>
      ))}
    </figure>
  )
}

function StepText({ s, i }) {
  return (
    <>
      <h3 className="section-title pstep__heading">{s.tag}</h3>
      <ul className="pstep__points">
        {s.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="pstep__result">
        {s.resultLabel && <span>{s.resultLabel}</span>}
        <p>{s.result}</p>
      </div>
    </>
  )
}

export function Solution({ so = reyo.solution }) {
  return (
    <section className="cs-section solution">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow eyebrow--light">{so.eyebrow}</p>
          <h2 className="section-title">{so.title}</h2>
          {so.sub && <p className="cs-head__text solution__sub">{so.sub}</p>}
          {so.scope && (
            <div className="scope">
              {so.scope.map((x) => (
                <span key={x.value} className={`scope__item ${x.on ? 'is-on' : ''}`}>
                  <small>{x.label}</small>
                  {x.value}
                </span>
              ))}
            </div>
          )}
        </Reveal>

        <div className="moments">
          {so.moments.map((m) => (
            <article key={m.label} className={`moment ${m.big ? 'moment--big' : ''}`}>
              <Reveal className="moment__head">
                <span className="moment__label">{m.label}</span>
                <h3 className="moment__title">{m.title}</h3>
                <p className="moment__insight">{m.insight}</p>
              </Reveal>
              <Reveal>
                <Shot image={m.image} label={m.imageLabel} ratio={m.imageRatio} device={m.device} fit={m.fit} pop={m.pop} scene={m.scene} notes={m.notes?.[0]?.at ? m.notes : undefined} className="shot--dark" />
              </Reveal>
              <ol className={`notes notes--${m.notes.length} ${m.notes[0]?.at ? 'notes--annotated' : ''}`}>
                {m.notes.map((n, i) => (
                  <Reveal as="li" key={n.title} delay={i * 0.06} className="note-item">
                    <span className="note-item__num">{i + 1}</span>
                    <div>
                      <strong>{n.title}</strong>
                      <p>{n.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </article>
          ))}

          {so.chambers && (
          <article className="chambers chambers--device">
            <Reveal className="chambers__copy">
              <span className="moment__label">Organised by what you build</span>
              <blockquote>
                <p>{so.chambers.quote}</p>
                <cite>{so.chambers.who}</cite>
              </blockquote>
              <p className="chambers__text">{so.chambers.text}</p>
            </Reveal>
            <Reveal>
              {so.chambers.device ? (
                <Shot image={so.chambers.image} label={so.chambers.imageLabel} device={so.chambers.device} fit="cover" notes={so.chambers.notes} />
              ) : (
                <Shot image={so.chambers.image} label={so.chambers.imageLabel} ratio="4 / 3" className="shot--dark" />
              )}
            </Reveal>
          </article>
          )}
        </div>
      </div>
    </section>
  )
}

function Validation() {
  const v = reyo.validation
  const pct = v.score.value / v.score.max
  const C = 2 * Math.PI * 52
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{v.eyebrow}</p>
          <h2 className="section-title">{v.title}</h2>
        </Reveal>
        <div className="valid">
          <Reveal className="valid__score">
            <svg viewBox="0 0 120 120" className="ring" aria-hidden="true">
              <circle cx="60" cy="60" r="52" className="ring__track" />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                className="ring__fill"
                strokeDasharray={C}
                initial={{ strokeDashoffset: C }}
                whileInView={{ strokeDashoffset: C * (1 - pct) }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease }}
              />
            </svg>
            <div className="valid__num">
              <strong>{v.score.value}</strong>
              <span>/ {v.score.max}</span>
            </div>
            <p className="valid__src">{v.score.source}</p>
            <p className="valid__quote">{v.quote}</p>
          </Reveal>
          <div className="valid__changed">
            <p className="valid__label">What feedback changed</p>
            {v.changed.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="valid__item">
                <Check />
                <div>
                  <strong>{c.title}</strong>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
            <p className="valid__next">{v.next}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tradeoffs() {
  const t = reyo.tradeoffs
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </Reveal>
        <div className="trade">
          <Reveal className="trade__card">
            <h3>Challenges I faced</h3>
            <ul>
              {t.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="trade__card trade__card--violet" delay={0.1}>
            <h3>Trade-offs I chose</h3>
            <ul>
              {t.choices.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Outcome() {
  const o = reyo.outcome
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head cs-head--center">
          <p className="eyebrow">{o.eyebrow}</p>
          <h2 className="section-title">{o.title}</h2>
        </Reveal>
        <div className="imp">
          {o.numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.08} className="imp__card">
              <span className="imp__from">
                Before: <s>{n.from}</s>
              </span>
              <div className="imp__nums">
                <strong>{n.to}</strong>
                {n.unit && <em>{n.unit}</em>}
              </div>
              <p className="imp__label">{n.label}</p>
              <p className="imp__how">{n.how}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="imp__diff">
          <span>Why it’s different</span>
          <p>{o.diff}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Learnings({ items = reyo.learnings }) {
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">Reflection</p>
          <h2 className="section-title">What I learned</h2>
        </Reveal>
        <div className="learn">
          {items.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.08} className="learn__card">
              <span className="learn__num">0{i + 1}</span>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NextUp({ to = '/work/tara', title = 'Tara', sub = 'Life admin, handled before it becomes a deadline.' }) {
  const navigate = useNavigate()
  return (
    <section className="cs-next">
      <div className="wrap cs-next__inner">
        <p className="eyebrow eyebrow--light">Next project</p>
        <button className="cs-next__title" onClick={() => navigate(to)}>
          {title} <Arrow />
        </button>
        <p className="cs-next__sub">{sub}</p>
        <Link to="/" className="cs-next__home">
          ← Back to all work
        </Link>
      </div>
    </section>
  )
}

export default function ReyoCaseStudy() {
  return (
    <>
      <TopBar />
      <main className="cs">
        <Hero />
        <Problem />
        <Loop />
        <Journey />
        <Personas />
        <Process />
        <Goals />
        <UserFlow />
        <InfoArch />
        <Solution />
        <Validation />
        <Tradeoffs />
        <Outcome />
        <Learnings />
        <NextUp />
      </main>
    </>
  )
}
