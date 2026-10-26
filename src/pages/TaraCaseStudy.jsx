import { tara } from '../content/tara.js'
import { Reveal } from '../components/Reveal.jsx'
import TwinPhones from '../components/TwinPhones.jsx'
import { TopBar, Hero, Process, Solution, Learnings, NextUp } from './ReyoCaseStudy.jsx'
import '../case-study.css'

const ease = [0.22, 1, 0.36, 1]


function DoubleDiamond({ a }) {
  return (
    <div className="dd">
      <Reveal className="cs-head cs-head--center">
        <p className="eyebrow">{a.eyebrow}</p>
        <h2 className="section-title">{a.title}</h2>
        <p className="cs-head__text">{a.sub}</p>
      </Reveal>
      <Reveal className="dd__board">
        <div className="dd__halves">
          {a.halves.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        <svg className="dd__svg" viewBox="0 0 1000 240" role="img" aria-label="Double Diamond: Discover, Define, Develop, Deliver">
          <line x1="0" y1="120" x2="1000" y2="120" className="dd__axis" />
          <polygon points="40,120 270,14 500,120 270,226" className="dd__d1" />
          <polygon points="500,120 730,14 960,120 730,226" className="dd__d2" />
          <line x1="270" y1="14" x2="270" y2="226" className="dd__mid" />
          <line x1="730" y1="14" x2="730" y2="226" className="dd__mid" />
          {[['Discover', 160], ['Define', 385], ['Develop', 615], ['Deliver', 845]].map(([t, x]) => (
            <text key={t} x={x} y="128" textAnchor="middle" className="dd__lbl">
              {t}
            </text>
          ))}
          <circle cx="40" cy="120" r="9" className="dd__dot" />
          <circle cx="960" cy="120" r="9" className="dd__dot dd__dot--end" />
        </svg>
        <div className="dd__ends">
          <span>{a.start}</span>
          <span>{a.end}</span>
        </div>
        <div className="dd__cols">
          {a.stages.map((st, i) => (
            <div key={st.name} className="dd__col">
              <span className="dd__mode">
                {String(i + 1).padStart(2, '0')} · {st.mode}
              </span>
              <b>{st.name}</b>
              <ul>
                {st.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

function Brief() {
  const b = tara.brief
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="brief-ask">
          <p className="eyebrow">{b.label}</p>
          <p className="brief-ask__quote">{b.ask}</p>
          <p className="brief-ask__context">{b.context}</p>
        </Reveal>

        <Reveal className="brief-problem">
          <span className="brief__label">{b.problemLabel}</span>
          <p>{b.problem}</p>
        </Reveal>

        {b.approach && <DoubleDiamond a={b.approach} />}

        <Reveal className="brief-sub">
          <span className="brief__label">{b.personasLabel}</span>
        </Reveal>
        <div className="personas">
          {b.personas.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="persona">
              <h3>{p.name}</h3>
              <p className="persona__meta">{p.meta}</p>
              <span className="persona__when">Needs Tara for</span>
              <ul>
                {p.needs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="brief-goal">
          <span className="brief__label">{b.goal.label}</span>
          <p>{b.goal.text}</p>
        </Reveal>
      </div>
    </section>
  )
}


function Impact() {
  const o = tara.impact
  if (!o) return null
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

function Outcome() {
  const o = tara.outcome
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{o.eyebrow}</p>
          <h2 className="section-title">{o.title}</h2>
        </Reveal>
        <div className="delivered">
          {o.delivered.map((x, i) => (
            <Reveal key={x} delay={i * 0.08} className="delivered__item">
              <span>0{i + 1}</span>
              <p>{x}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TaraCaseStudy() {
  return (
    <>
      <TopBar title="Tara" />
      <main className="cs cs--tara">
        <Hero
          h={tara.hero}
          visual={
            <div className="tara-hero">
              <TwinPhones screens={tara.hero.phones} />
            </div>
          }
        />
        <Brief />
        <Process pr={tara.process} />
        <Solution so={tara.solution} />
        <Outcome />
        <Impact />
        <Learnings items={tara.learnings} />
        <NextUp to="/work/shuchify" title="Shuchify" sub="Making kitchen hygiene visible, every single day." />
      </main>
    </>
  )
}
