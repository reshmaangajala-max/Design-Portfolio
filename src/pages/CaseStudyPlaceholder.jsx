import { Link, useParams } from 'react-router-dom'
import { projects } from '../data.js'

// Temporary page until each case study is built.
export default function CaseStudyPlaceholder() {
  const { id } = useParams()
  const p = projects.find((x) => x.id === id)
  return (
    <main className="cs-soon">
      <div className="wrap">
        <Link to="/" className="cs-soon__back">
          ← Back to work
        </Link>
        <p className="eyebrow">{p ? p.eyebrow : 'Case study'}</p>
        <h1 className="section-title">{p ? p.title : 'Case study'}</h1>
        <p className="section-sub">{p ? p.headline : ''} The full case study is being rebuilt and lands here next.</p>
      </div>
    </main>
  )
}
