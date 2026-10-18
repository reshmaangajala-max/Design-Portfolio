import { useEffect, useRef, useState } from 'react'

// A Figma editor drawn in HTML at 1600 × 900, scaled to fit its box.
// The Reyo panel image floats on top, next to the selected pricing frame.
const W = 1600
const H = 900

function PricingFrame({ tag = true }) {
  const plans = [
    { name: 'Starter', price: '₹0', dark: false },
    { name: 'Pro', price: '₹499', dark: true },
    { name: 'Team', price: '₹1,499', dark: false },
  ]
  return (
    <div className="fg-frame">
      <span className="fg-frame__label">Pricing page</span>
      {tag && (
        <span className="fg-tag">
          <b>R</b> Reyo can see this
        </span>
      )}
      <div className="fg-page">
        <div className="fg-page__nav">
          <span className="fg-page__logo" />
          <span className="fg-page__links">
            <i />
            <i />
            <i />
          </span>
          <span className="fg-page__btn" />
        </div>
        <p className="fg-page__h">Simple, honest pricing</p>
        <p className="fg-page__sub">Start free. Upgrade when your team grows.</p>
        <div className="fg-page__cards">
          {plans.map((p) => (
            <div key={p.name} className={`fg-card ${p.dark ? 'fg-card--dark' : ''}`}>
              <span className="fg-card__name">{p.name}</span>
              <span className="fg-card__price">{p.price}</span>
              <span className="fg-card__line" />
              <span className="fg-card__line" />
              <span className="fg-card__line fg-card__line--short" />
              <span className="fg-card__btn" />
            </div>
          ))}
        </div>
      </div>
      <span className="fg-sel" />
      <span className="fg-h fg-h--tl" />
      <span className="fg-h fg-h--tr" />
      <span className="fg-h fg-h--bl" />
      <span className="fg-h fg-h--br" />
      <span className="fg-size">480 × 380</span>
    </div>
  )
}

export default function FigmaScene({ image, label, scene }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(0.5)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="fg-fit" ref={ref}>
      <div className="fg" style={{ width: W, height: H, transform: `scale(${scale})` }} aria-hidden="true">
        <div className="fg-top">
          <span className="fg-top__logo">
            <i style={{ background: '#F24E1E' }} />
            <i style={{ background: '#FF7262' }} />
            <i style={{ background: '#A259FF' }} />
            <i style={{ background: '#1ABCFE' }} />
            <i style={{ background: '#0ACF83' }} />
          </span>
          <span className="fg-top__tools">
            <i className="is-on" />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="fg-top__file">
            Reyo – Client site <em>/</em> Pricing
          </span>
          <span className="fg-top__right">
            <i className="fg-av" style={{ background: '#c9a7f0' }} />
            <i className="fg-av" style={{ background: '#f2b8a2' }} />
            <span className="fg-share">Share</span>
            <span className="fg-zoom">75%</span>
          </span>
        </div>

        <div className="fg-left">
          <div className="fg-tabs">
            <b>Layers</b> <span>Assets</span>
          </div>
          <div className="fg-layer is-on">▾ ▢ Pricing page</div>
          {['Nav', 'Hero', 'Card / Starter', 'Card / Pro', 'Card / Team', 'Footer'].map((l) => (
            <div key={l} className="fg-layer fg-layer--child">
              ▢ {l}
            </div>
          ))}
          {['Checkout', 'Onboarding / 01', 'Onboarding / 02'].map((l) => (
            <div key={l} className="fg-layer">
              ▸ ▢ {l}
            </div>
          ))}
        </div>

        <div className="fg-right">
          <div className="fg-tabs">
            <b>Design</b> <span>Prototype</span>
          </div>
          {['Frame', 'Auto layout', 'Fill', 'Stroke', 'Effects'].map((s) => (
            <div key={s} className="fg-prop">
              <span>{s}</span>
              <i />
              <i className="fg-prop__half" />
            </div>
          ))}
        </div>

        <div className="fg-canvas">
          <PricingFrame tag={scene?.tag ?? true} />
        </div>

        {image && (
          <img
            className={`fg-reyo ${scene?.shadow === false ? 'fg-reyo--flat' : ''}`}
            src={image}
            alt={label}
            style={scene ? { left: scene.left, top: scene.top, height: scene.height } : undefined}
          />
        )}
      </div>
    </div>
  )
}
