import { motion } from 'framer-motion'

// Two floating phones, one light and one dark, tilted like a product mockup.
// Pass `screens: [{ image, label }, { image, label }]`. Missing images show a placeholder.
function Screen({ s }) {
  if (s?.image) return <img src={s.image} alt={s.label || ''} />
  return (
    <div className="twin__empty">
      <span className="shot__badge">Add screen</span>
      <span className="shot__label">{s?.label}</span>
    </div>
  )
}

export default function TwinPhones({ screens = [] }) {
  const [a, b] = screens
  return (
    <div className="twin">
      <span className="twin__shadow twin__shadow--a" aria-hidden="true" />
      <span className="twin__shadow twin__shadow--b" aria-hidden="true" />
      <motion.div
        className="twin__phone twin__phone--light"
        initial={{ opacity: 0, y: 40, rotate: -14 }}
        animate={{ opacity: 1, y: [0, -10, 0], rotate: -12 }}
        transition={{ opacity: { duration: 0.8 }, rotate: { duration: 0.9 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="twin__island" />
        <div className="twin__screen">
          <Screen s={a} />
        </div>
      </motion.div>
      <motion.div
        className="twin__phone twin__phone--dark"
        initial={{ opacity: 0, y: 60, rotate: 14 }}
        animate={{ opacity: 1, y: [0, 10, 0], rotate: 10 }}
        transition={{ opacity: { duration: 0.8, delay: 0.15 }, rotate: { duration: 0.9, delay: 0.15 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 } }}
      >
        <span className="twin__island" />
        <div className="twin__screen">
          <Screen s={b} />
        </div>
      </motion.div>
    </div>
  )
}
