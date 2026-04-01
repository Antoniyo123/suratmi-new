import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Artists from './components/Artists'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import SoundIdentity from './components/SoundIdentity'
import EventsExperimental from './components/EventsExperimental'
import CTAExperimental from './components/CTAExperimental'
import FooterExperimental from './components/FooterExperimental'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Artists />
      <SoundIdentity />
      <EventsExperimental />
      <CTAExperimental />
      <FooterExperimental />

    </div>
  )
}

export default App