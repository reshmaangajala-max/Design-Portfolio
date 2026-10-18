import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { hero, site } from '../data.js'
import { scrollToId } from '../lib/scroll.js'
import { Sparkle, Arrow, Book } from './Icons.jsx'

const ease = [0.22, 1, 0.36, 1]

// Splits a word into letters that rise into place one after another.
function RiseWord({ text, delay = 0 }) {
  return (
    <span className="rise" aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="rise__ch"
          aria-hidden="true"
          initial={{ y: '105%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.8, ease, delay: delay + i * 0.035 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

function PhotoCard() {
  // Card tilts gently toward the cursor.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      className="hero__visual"
      initial={{ opacity: 0, y: 40, rotate: 6 }}
      animate={{ opacity: 1, y: 0, rotate: 3 }}
      transition={{ duration: 1, ease, delay: 0.35 }}
    >
      <motion.div className="hero__book" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <Book />
        <motion.span
          className="hero__book-spark"
          animate={{ scale: [1, 1.35, 1], rotate: [0, 90, 0], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkle size={18} />
        </motion.span>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`hero__float hero__float--${i}`}
            aria-hidden="true"
            animate={{ y: [0, -22, -40], x: [0, i === 1 ? -10 : 8, i === 1 ? -16 : 14], opacity: [0, 1, 0], scale: [0.6, 1, 0.7] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: i * 1.05 }}
          >
            <Sparkle size={i === 2 ? 9 : 12} />
          </motion.span>
        ))}
      </motion.div>

      {/* Clapperboard peeking out from behind the card */}
      <motion.svg className="hero__clap" viewBox="-6 -24 132 124" aria-hidden="true" initial={{ rotate: 14 }} animate={{ rotate: [14, 10, 14] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="8" y="34" width="104" height="60" rx="8" fill="#fff" stroke="currentColor" strokeWidth="3" />
        <path d="M8 34 L112 34" stroke="currentColor" strokeWidth="3" />
        <g transform="rotate(-14 8 34)">
          <rect x="8" y="12" width="104" height="22" rx="5" fill="#e5d8f6" stroke="currentColor" strokeWidth="3" />
          <path d="M28 12 L20 34 M50 12 L42 34 M72 12 L64 34 M94 12 L86 34" stroke="currentColor" strokeWidth="3" />
        </g>
        <path d="M24 56 H70 M24 72 H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
      </motion.svg>

      {/* Pen tool, like Figma's */}
      <motion.svg className="hero__pen" viewBox="0 0 64 64" aria-hidden="true" animate={{ rotate: [-8, 4, -8] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M32 6 L46 34 L38 50 H26 L18 34 Z" fill="#8f68c9" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <circle cx="32" cy="30" r="4" fill="#fff" stroke="currentColor" strokeWidth="2.4" />
        <path d="M32 6 V26" stroke="currentColor" strokeWidth="2.4" />
        <rect x="24" y="50" width="16" height="8" rx="2" fill="#fff" stroke="currentColor" strokeWidth="2.6" />
      </motion.svg>

      {/* Hand-drawn heart and squiggle */}
      <svg className="hero__doodle" viewBox="0 0 160 70" aria-hidden="true">
        <motion.path
          d="M6 46 C 20 26, 30 62, 46 42 S 72 22, 86 44 S 112 62, 124 40"
          fill="none" stroke="#8f68c9" strokeWidth="3.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease, delay: 1.2 }}
        />
        <motion.path
          d="M142 30 C 136 20, 124 24, 128 34 C 131 41, 142 48, 142 48 C 142 48, 153 41, 156 34 C 160 24, 148 20, 142 30 Z"
          fill="#f2a9bd" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"
          initial={{ scale: 0 }} animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity, delay: 2 }}
          style={{ transformOrigin: '142px 36px' }}
        />
      </svg>

      <motion.div className="hero__card" onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX: rx, rotateY: ry }}>
        <img src={hero.photo} alt={`Portrait of ${site.name}`} width="580" height="365" />
        <span className="hero__card-glare" />
      </motion.div>

    </motion.div>
  )
}

export default function Hero() {
  const [first, last] = site.name.toUpperCase().split(' ')
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Sparkle /> {hero.eyebrow}
          </motion.p>

          <h1 className="hero__name">
            <RiseWord text={first} delay={0.1} />
            <RiseWord text={last} delay={0.3} />
          </h1>

          <svg className="hero__underline" viewBox="0 0 340 14" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M3 8C70 3 150 4 220 6s90 2 117-1M8 11c80-3 170-3 250-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.9 }}
            />
          </svg>

          <motion.p className="hero__intro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.7 }}>
            {hero.intro}
          </motion.p>

          <motion.div className="hero__actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.85 }}>
            <button className="btn btn--ink btn--lg" onClick={() => scrollToId('work')}>
              View my work <Arrow />
            </button>
            <span className="status">
              <span className="status__dot" />
              {site.status}
            </span>
          </motion.div>
        </div>

        <PhotoCard />
      </div>
    </section>
  )
}
