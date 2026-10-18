import { marquee } from '../data.js'
import { Sparkle } from './Icons.jsx'

// Endless strip of traits. The list is doubled so the loop is seamless.
export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap">
      <div className="marquee" aria-label={marquee.join(', ')}>
        <div className="marquee__track" aria-hidden="true">
          {items.map((t, i) => (
            <span className="marquee__item" key={i}>
              {t}
              <Sparkle size={12} className="marquee__spark" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
