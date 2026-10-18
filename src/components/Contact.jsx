import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from '../data.js'
import { Reveal } from './Reveal.jsx'
import { Copy, Check, Arrow, Sparkle } from './Icons.jsx'
import { scrollToId } from '../lib/scroll.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      // Fallback: select the visible address so it can be copied by hand.
      const el = document.getElementById('contact-email')
      const range = document.createRange()
      range.selectNodeContents(el)
      const s = window.getSelection()
      s.removeAllRanges()
      s.addRange(range)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact__inner">
        <Reveal>
          <h2 className="contact__title">
            Got a problem worth <em>dreaming</em> about?
          </h2>
          <p className="contact__sub">Let’s talk. I reply within a day.</p>
        </Reveal>

        <Reveal className="contact__actions" delay={0.1}>
          <button className="btn btn--violet btn--lg" onClick={copy}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'done' : 'copy'}
                className="btn__swap"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {copied ? (
                  <>
                    Email copied <Check />
                  </>
                ) : (
                  <>
                    Copy my email <Copy />
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="btn btn--outline btn--lg" href={site.resume} target="_blank" rel="noreferrer">
            View resume <Arrow />
          </a>
        </Reveal>

        <p className="contact__email">
          <a id="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>

      <footer className="footer">
        <div className="wrap footer__inner">
          <p>© 2026 {site.name}. Designed and built by me.</p>
          <nav className="footer__links" aria-label="Elsewhere">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <button onClick={() => scrollToId('top')}>
              Back to top <Sparkle size={11} />
            </button>
          </nav>
        </div>
      </footer>
    </section>
  )
}
