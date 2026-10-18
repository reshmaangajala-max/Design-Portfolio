import { useState } from 'react'
import { motion } from 'framer-motion'
import { stickies, bugNote, polaroid } from '../data.js'
import { Reveal } from './Reveal.jsx'

// Small differences in tilt and offset make the wall feel hand-pinned.
const scatter = [
  { r: -4, x: 0, y: 8, pinX: 50 },
  { r: 3, x: 6, y: -6, pinX: 42 },
  { r: -2, x: -4, y: 14, pinX: 56 },
  { r: 2.5, x: 4, y: 0, pinX: 48 },
  { r: -3.5, x: -6, y: 10, pinX: 54 },
  { r: 4, x: 2, y: -4, pinX: 45 },
]

function Pin({ color, x = 50 }) {
  return <span className={`pin pin--${color}`} style={{ left: `${x}%` }} aria-hidden="true" />
}

function Sticky({ s, i }) {
  const sc = scatter[i % scatter.length]
  return (
    <motion.div
      className={`sticky sticky--${s.color}`}
      style={{ rotate: sc.r, x: sc.x }}
      initial={{ opacity: 0.3, y: sc.y - 24 }}
      whileInView={{ opacity: 1, y: sc.y }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, delay: (i % 3) * 0.08 }}
    >
      <Pin color={s.pin} x={sc.pinX} />
      <span className="sticky__label">{s.label}</span>
      <p className="sticky__text">{s.text}</p>
    </motion.div>
  )
}

function BugSticky() {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      className="sticky-wrap"
      style={{ rotate: 3 }}
      initial={{ opacity: 0.3, y: -18 }}
      whileInView={{ opacity: 1, y: 6 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <Pin color="ink" x={50} />
      <button className="flip" onClick={() => setFlipped((f) => !f)} aria-pressed={flipped} aria-label={flipped ? `${bugNote.fixLabel}: ${bugNote.fix}` : `${bugNote.label}: ${bugNote.text}. Tap to see the workaround.`}>
        <motion.span className="flip__inner" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <span className="sticky sticky--bug flip__face">
            <span className="sticky__label">{bugNote.label}</span>
            <span className="sticky__text">{bugNote.text}</span>
            <span className="sticky__hint">tap to flip →</span>
          </span>
          <span className="sticky sticky--fix flip__face flip__face--back">
            <span className="sticky__label">{bugNote.fixLabel}</span>
            <span className="sticky__text sticky__text--sm">{bugNote.fix}</span>
            <span className="sticky__hint">← tap to flip back</span>
          </span>
        </motion.span>
      </button>
    </motion.div>
  )
}

export default function Board() {
  return (
    <section className="board" id="about">
      <div className="wrap">
        <Reveal className="section-head section-head--dark section-head--center">
          <h2 className="section-title">
            Working with <em>me</em>
          </h2>
          <p className="section-sub section-sub--light">A few honest notes, pinned to my wall.</p>
        </Reveal>

        <div className="about">
          <aside className="about__side">
            <motion.figure
              className="polaroid"
              initial={{ rotate: -3 }}
              animate={{ rotate: [-3, 1, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="polaroid__pin" />
              <img src={polaroid.photo} alt="Reshma smiling, resting her chin on her hand" loading="lazy" />
              <figcaption>{polaroid.caption}</figcaption>
            </motion.figure>
          </aside>

          <div className="wall">
            {stickies.map((s, i) => (
              <Sticky key={s.label} s={s} i={i} />
            ))}
            <BugSticky />
          </div>
        </div>
      </div>
    </section>
  )
}
