import { motion } from 'framer-motion'
import { Reveal } from './Reveal.jsx'

// Life outside design: trip polaroids, scattered like they were dropped on a table.
const trips = [
  { img: 'images/trips/trip-1.webp', note: 'above the clouds, finally quiet', wide: true, r: -4, y: 10 },
  { img: 'images/trips/trip-2.webp', note: 'chasing waterfalls, literally', r: 3, y: -16 },
  { img: 'images/trips/trip-3.webp', note: 'tiny me, big rocks', r: -2, y: 22 },
  { img: 'images/trips/trip-4.webp', note: 'loud water, louder happy', wide: true, r: 4, y: -6 },
  { img: 'images/trips/trip-5.webp', note: 'no signal, no problem', r: -3, y: 14 },
]

export default function Trips() {
  return (
    <section className="trips" id="life">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Off the grid</p>
          <h2 className="section-title">Chapters from the road</h2>
          <p className="trips__sub">Places that changed how I see things. Mountains, mostly.</p>
        </Reveal>
        <div className="trips__row">
          {trips.map((t, i) => (
            <motion.figure
              key={t.img}
              className={`trip ${t.wide ? 'trip--wide' : ''}`}
              style={{ rotate: t.r }}
              initial={{ opacity: 0, y: t.y + 40 }}
              whileInView={{ opacity: 1, y: t.y }}
              whileHover={{ rotate: 0, y: t.y - 10, scale: 1.04, zIndex: 5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, delay: i * 0.08 }}
            >
              <span className="trip__tape" aria-hidden="true" />
              <img src={t.img} alt="" loading="lazy" />
              <figcaption>{t.note}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
