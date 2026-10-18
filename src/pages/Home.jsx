import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Work from '../components/Work.jsx'
import Skills from '../components/Skills.jsx'
import Board from '../components/Board.jsx'
import Trips from '../components/Trips.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Board />
        <Trips />
        <Contact />
      </main>
    </>
  )
}
