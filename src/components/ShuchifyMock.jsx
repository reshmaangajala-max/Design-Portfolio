import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Owner side: a random check-in with AI results.
export function KitchenPhone() {
  const checks = [
    { ok: true, t: 'Gloves and caps on' },
    { ok: true, t: 'Dustbin covered' },
    { ok: false, t: 'Standing water near drain' },
  ]
  return (
    <div className="sx-phone">
      <div className="sx-phone__notch" />
      <p className="sx-kicker">Random check-in</p>
      <p className="sx-phone__title">Show your drain area</p>
      <p className="sx-phone__timer">28:41 left · outside rush hours</p>
      <div className="sx-cam">
        <span className="sx-cam__rec">● LIVE</span>
        <span className="sx-cam__corner sx-cam__corner--tl" />
        <span className="sx-cam__corner sx-cam__corner--tr" />
        <span className="sx-cam__corner sx-cam__corner--bl" />
        <span className="sx-cam__corner sx-cam__corner--br" />
        <span className="sx-cam__flag">AI: water pooling</span>
      </div>
      <ul className="sx-checks">
        {checks.map((c, i) => (
          <motion.li
            key={c.t}
            className={c.ok ? 'is-ok' : 'is-warn'}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease }}
          >
            <span>{c.ok ? '✓' : '!'}</span>
            {c.t}
          </motion.li>
        ))}
      </ul>
      <div className="sx-streak">🔥 42-day streak</div>
    </div>
  )
}

// Diner side: trust score on a restaurant listing.
function DinerPhone() {
  return (
    <div className="sx-phone">
      <div className="sx-phone__notch" />
      <div className="sx-listing__img" />
      <p className="sx-listing__name">Annapurna Tiffins</p>
      <p className="sx-listing__meta">South Indian · 1.2 km</p>
      <div className="sx-score">
        <div className="sx-score__ring">
          <strong>92</strong>
          <span>/100</span>
        </div>
        <div>
          <p className="sx-score__badge">Shuchified ✓</p>
          <p className="sx-score__line">Kitchen checked today, 9:10 am</p>
        </div>
      </div>
      <ul className="sx-rows">
        <li><span>Staff health checks</span><b>Valid</b></li>
        <li><span>Pest control</span><b>12 days ago</b></li>
        <li><span>Verified reports</span><b>0</b></li>
      </ul>
    </div>
  )
}

// Inspector side: AI-ranked visit list.
function InspectorBoard() {
  const rows = [
    { n: 'Hotel Sai Ruchi', a: 'Kukatpally', r: 86, why: '3 skipped check-ins · 2 reports', lvl: 'high' },
    { n: 'Biryani Point', a: 'Ameerpet', r: 64, why: 'Pest control expired', lvl: 'mid' },
    { n: 'Café Nimbu', a: 'Kondapur', r: 31, why: 'Notice fixed · re-check by video', lvl: 'low' },
  ]
  return (
    <div className="sx-board">
      <div className="sx-board__bar">
        <span />
        <span />
        <span />
        <p>Shuchify Inspect</p>
      </div>
      <div className="sx-board__body">
        <p className="sx-kicker">Today’s visits · ranked by AI</p>
        <p className="sx-board__title">Visit these first</p>
        {rows.map((r, i) => (
          <motion.div
            key={r.n}
            className="sx-risk"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease }}
          >
            <span className={`sx-risk__score sx-risk__score--${r.lvl}`}>{r.r}</span>
            <div>
              <strong>{r.n}</strong>
              <span>{r.a} · {r.why}</span>
            </div>
          </motion.div>
        ))}
        <p className="sx-board__note">AI ranks. The officer decides.</p>
      </div>
    </div>
  )
}

export default function ShuchifyTrio() {
  return (
    <div className="sx-trio">
      <figure className="sx-trio__item sx-trio__item--left">
        <KitchenPhone />
        <figcaption>Restaurant · proves it</figcaption>
      </figure>
      <figure className="sx-trio__item sx-trio__item--mid">
        <InspectorBoard />
        <figcaption>Inspector · acts on it</figcaption>
      </figure>
      <figure className="sx-trio__item sx-trio__item--right">
        <DinerPhone />
        <figcaption>Diner · sees it</figcaption>
      </figure>
    </div>
  )
}
