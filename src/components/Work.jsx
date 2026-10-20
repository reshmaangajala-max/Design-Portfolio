import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data.js'
import { Reveal } from './Reveal.jsx'
import { Arrow, ArrowUpRight } from './Icons.jsx'
import { KitchenPhone } from './ShuchifyMock.jsx'

export function TaraMock({ image }) {
  // A small phone mock so Tara has a visual until the real screens are ready.
  const items = [
    { t: 'Passport expires in 42 days', s: 'Renew now to avoid the rush', tag: 'Documents' },
    { t: 'Bike insurance due Friday', s: '₹2,340 · auto-pay is off', tag: 'Bills' },
    { t: 'PAN–Aadhaar link pending', s: 'Takes 5 minutes online', tag: 'Gov ID' },
  ]
  if (image)
    return (
      <div className="tara">
        <div className="tara__shot">
          <img src={image} alt="Tara Horizon home screen" loading="lazy" />
        </div>
      </div>
    )
  return (
    <div className="tara">
      <div className="tara__phone">
        <div className="tara__notch" />
        <p className="tara__hello">Good morning</p>
        <p className="tara__title">3 things before they become deadlines</p>
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            className="tara__item"
            initial={{ x: 24, opacity: 0.4 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tara__tag">{it.tag}</span>
            <strong>{it.t}</strong>
            <span>{it.s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ p, index }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 40 })
  const sy = useSpring(y, { stiffness: 500, damping: 40 })
  const ready = Boolean(p.route)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }

  const open = () => navigate(p.route)

  return (
    <Reveal>
      <article className={`project project--${p.tone} ${index % 2 ? 'project--flip' : ''}`}>
        <div className="project__copy">
          <p className="project__eyebrow">{p.eyebrow}</p>
          <h3 className="project__title">{p.title}</h3>
          <p className="project__summary">{p.summary}</p>

          <dl className="project__stats">
            {p.stats.map((s) => (
              <div key={s.label} className="project__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          {ready ? (
            <button className="btn btn--cream" onClick={open}>
              {p.cta} <Arrow />
            </button>
          ) : (
            <span className="project__soon">{p.cta}</span>
          )}
        </div>

        <div
          ref={ref}
          className={`project__media ${ready ? 'is-link' : ''}`}
          onMouseMove={onMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={ready ? open : undefined}
          role={ready ? 'link' : undefined}
          tabIndex={ready ? 0 : undefined}
          onKeyDown={(e) => ready && e.key === 'Enter' && open()}
          aria-label={ready ? `Open the ${p.title} case study` : undefined}
        >
          <div className="project__frame">
            <div className="project__chrome">
              <span />
              <span />
              <span />
            </div>
            {p.image ? (
              <img src={p.image} alt={p.imageAlt} loading="lazy" />
            ) : p.mock === 'shuchify' ? (
              <div className="sx-card">
                <KitchenPhone />
              </div>
            ) : (
              <TaraMock image={p.phoneImage} />
            )}
          </div>

          <AnimatePresence>
            {hover && ready && (
              <motion.span
                className="cursor-pill"
                style={{ left: sx, top: sy, x: '-50%', y: '-50%' }}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                View case study <ArrowUpRight />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <Reveal className="section-head section-head--dark">
          <p className="eyebrow eyebrow--light">Selected work</p>
          <h2 className="section-title">Things I’ve researched, designed and built</h2>
        </Reveal>
        <div className="work__list">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
