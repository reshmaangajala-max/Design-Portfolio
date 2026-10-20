import { tara } from '../content/tara.js'
import { Reveal } from '../components/Reveal.jsx'
import TwinPhones from '../components/TwinPhones.jsx'
import { TopBar, Hero, Process, Solution, Learnings, NextUp } from './ReyoCaseStudy.jsx'
import '../case-study.css'

const ease = [0.22, 1, 0.36, 1]

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
        <Learnings items={tara.learnings} />
        <NextUp to="/work/shuchify" title="Shuchify" sub="Making kitchen hygiene visible, every single day." />
      </main>
    </>
  )
}
