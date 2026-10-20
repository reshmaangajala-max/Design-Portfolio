import { shuchify } from '../content/shuchify.js'
import { Reveal } from '../components/Reveal.jsx'
import ShuchifyTrio from '../components/ShuchifyMock.jsx'
import { TopBar, Hero, NextUp, Process } from './ReyoCaseStudy.jsx'
import '../case-study.css'

function Behind() {
  const b = shuchify.behind
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{b.eyebrow}</p>
          <h2 className="section-title">{b.title}</h2>
          <p className="cs-head__text">{b.sub}</p>
        </Reveal>
        <div className="sx-finds">
          {b.cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08} className={`sx-find ${c.highlight ? 'sx-find--hl' : ''}`}>
              <span className="sx-find__kicker">{c.kicker}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="sx-find__where">{c.where}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Data() {
  const d = shuchify.data
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 className="section-title">{d.title}</h2>
        </Reveal>
        <div className="sx-national">
          {d.national.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.08} className="sx-national__item">
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </Reveal>
          ))}
        </div>
        <div className="sx-states">
          {d.states.map((s, i) => (
            <Reveal key={s.state} delay={(i % 3) * 0.08} className="sx-state">
              <div className="sx-state__head">
                <h3>{s.state}</h3>
                <span>{s.when}</span>
              </div>
              <div className="sx-state__stats">
                {s.stats.map(([v, l]) => (
                  <div key={l}>
                    <strong>{v}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <p>{s.note}</p>
            </Reveal>
          ))}
        </div>
        <p className="sx-source">{d.source}</p>
      </div>
    </section>
  )
}

function Pattern() {
  const p = shuchify.data.pattern
  return (
    <section className="cs-section sx-problem sx-pattern">
      <div className="wrap">
        <Reveal className="sx-problem__inner">
          <p className="eyebrow">{p.label}</p>
          <p className="sx-problem__line">{p.lines[0]}</p>
          <p className="sx-problem__line sx-problem__line--em">{p.lines[1]}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Problem() {
  const p = shuchify.problem
  return (
    <section className="cs-section sx-problem">
      <div className="wrap">
        <Reveal className="sx-problem__inner">
          <p className="eyebrow">{p.eyebrow}</p>
          <p className="sx-problem__line">{p.lines[0]}</p>
          <p className="sx-problem__line sx-problem__line--em">{p.lines[1]}</p>
        </Reveal>
      </div>
    </section>
  )
}

function People() {
  const p = shuchify.people
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="section-title">{p.title}</h2>
        </Reveal>
        <div className="sx-people">
          {p.cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className={`sx-person sx-person--${c.tone}`}>
              <span className="sx-person__side">{c.side}</span>
              <div className="sx-person__who">
                <span className="sx-person__avatar">{c.initial}</span>
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.meta}</p>
                </div>
              </div>
              <p className="sx-person__quote">“{c.quote}”</p>
              <div className="sx-person__lists">
                <div>
                  <span className="sx-person__label">Wants</span>
                  <ul>
                    {c.wants.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="sx-person__label sx-person__label--fear">Fears</span>
                  <ul>
                    {c.fears.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="sx-person__time">⏱ {c.time}</span>
            </Reveal>
          ))}
        </div>
        <p className="sx-source">{p.note}</p>
      </div>
    </section>
  )
}

function Decisions() {
  const d = shuchify.decisions
  return (
    <section className="cs-section cs-section--tint">
      <div className="wrap">
        <Reveal className="cs-head">
          <span className="process__phase sx-phase">{d.phase}</span>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 className="section-title">{d.title}</h2>
          <p className="cs-head__text">{d.sub}</p>
        </Reveal>
        <div className="sx-decisions">
          {d.items.map((x, i) => (
            <Reveal key={x.chose} delay={(i % 2) * 0.08} className="sx-dec">
              <span className="sx-dec__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="sx-dec__body">
                <p className="sx-dec__not">
                  <span>Instead of</span>
                  <s>{x.not}</s>
                </p>
                <p className="sx-dec__chose">
                  <span>I chose</span>
                  {x.chose}
                </p>
                <p className="sx-dec__why">{x.why}</p>
                <span className="sx-dec__from">From research: {x.from}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComingNext() {
  return (
    <section className="cs-section">
      <div className="wrap">
        <Reveal className="sx-soon">
          <p className="eyebrow">Case study in progress</p>
          <p>Next: how the system works, the key screens, and what happens if a kitchen tries to cheat.</p>
        </Reveal>
      </div>
    </section>
  )
}

export default function ShuchifyCaseStudy() {
  return (
    <>
      <TopBar title="Shuchify" />
      <main className="cs cs--shuchify">
        <Hero h={shuchify.hero} visual={<ShuchifyTrio />} />
        <Behind />
        <Data />
        <Pattern />
        <Process pr={shuchify.process} />
        <Problem />
        <People />
        <Process pr={shuchify.ideation} />
        <Decisions />
        <ComingNext />
        <NextUp to="/work/reyo" title="Reyo" sub="The right save, at the right moment, without leaving Figma." />
      </main>
    </>
  )
}
