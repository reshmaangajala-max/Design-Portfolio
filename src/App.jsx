import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CaseStudyPlaceholder from './pages/CaseStudyPlaceholder.jsx'
import ReyoCaseStudy from './pages/ReyoCaseStudy.jsx'
import TaraCaseStudy from './pages/TaraCaseStudy.jsx'
import ShuchifyCaseStudy from './pages/ShuchifyCaseStudy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/reyo" element={<ReyoCaseStudy />} />
        <Route path="/work/tara" element={<TaraCaseStudy />} />
        <Route path="/work/shuchify" element={<ShuchifyCaseStudy />} />
        <Route path="/work/:id" element={<CaseStudyPlaceholder />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
