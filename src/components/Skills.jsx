import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data.js'
import { Reveal } from './Reveal.jsx'
import { Sparkle } from './Icons.jsx'

// Where each skill floats above the table (desktop). x = % of width, y = px from top.
const spots = [
  { x: 6, y: 40 },
  { x: 29, y: 6 },
  { x: 53, y: 30 },
  { x: 75, y: 0 },
  { x: 1, y: 150 },
  { x: 33, y: 118 },
  { x: 60, y: 138 },
  { x: 81, y: 104 },
  { x: 9, y: 252 },
  { x: 74, y: 236 },
]

function useTyped(text) {
  const [out, setOut] = useState(text)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return setOut(text)
    setOut('')
    let i = 0
    const id = setInterval(() => {
      i += 2
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 22)
    return () => clearInterval(id)
  }, [text])
  return out
}

export default function Skills() {
  const [sel, setSel] = useState(1)
  const typed = useTyped(skills[sel].proof)

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">What I bring</p>
          <h2 className="section-title">
            What I bring to the <em className="em-violet">table</em>
          </h2>
          <p className="section-sub">Pick one. Each skill comes with the proof.</p>
        </Reveal>

        <div className="stage">
          <div className="stage__float">
            {skills.map((s, i) => (
              <motion.button
                key={s.label}
                className={`chip ${s.accent ? 'chip--accent' : ''} ${sel === i ? 'is-on' : ''}`}
                style={{ '--x': `${spots[i].x}%`, '--y': `${spots[i].y}px` }}
                onClick={() => setSel(i)}
                aria-pressed={sel === i}
                animate={{ y: [0, -10 - (i % 3) * 3, 0], rotate: [i % 2 ? -2 : 2, i % 2 ? 1 : -1, i % 2 ? -2 : 2] }}
                transition={{ duration: 4 + (i % 4) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                {sel === i && <Sparkle size={12} className="chip__spark" />}
                {s.label}
              </motion.button>
            ))}
          </div>

          <div className="table" aria-live="polite">
            <div className="table__surface">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel}
                  className="placecard"
                  initial={{ y: -60, opacity: 0, rotate: -6 }}
                  animate={{ y: 0, opacity: 1, rotate: -1.5 }}
                  exit={{ y: 10, opacity: 0, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <span className="placecard__label">The proof</span>
                  <h3 className="placecard__title">{skills[sel].label}</h3>
                  <p className="placecard__text">
                    {typed}
                    <span className="placecard__caret" />
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="table__cup" aria-hidden="true">
                <span className="table__steam" />
                <span className="table__steam table__steam--2" />
              </div>
            </div>
            <div className="table__edge" />
            <div className="table__legs" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
