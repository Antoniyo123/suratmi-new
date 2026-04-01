import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import ArtistsExperimental from './components/Artists'

import './App.css'
import SoundIdentity from './components/SoundIdentity'
import EventsExperimental from './components/EventsExperimental'
import CTAExperimental from './components/CTAExperimental'
import FooterExperimental from './components/FooterExperimental'

function App() {

  useEffect(() => {
  const sections = document.querySelectorAll('section')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-active')
        } else {
          entry.target.classList.remove('section-active')
        }
      })
    },
    { threshold: 0.6 }
  )

  sections.forEach((sec) => observer.observe(sec))
  return () => observer.disconnect()
}, [])
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ArtistsExperimental />
      <section>
  <SoundIdentity />
</section>
      <EventsExperimental />
      <CTAExperimental />
      <FooterExperimental />

    </div>
  )
}

export default App