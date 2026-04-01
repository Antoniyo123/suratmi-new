import '../styles/Hero.css'
import logo from '../assets/suratmi logo.png'
import heroBg from '../assets/suratmi hero.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>

      <div className="hero-center">
        <div className="hero-logo-wrap">
          <img
            src={logo}
            alt="SuratMi FM"
            className="hero-logo"
          />
        </div>
      </div>

      <button className="hero-search-btn" aria-label="Search">
        <svg viewBox="0 0 24 24" strokeWidth="1.8" fill="none">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
      </button>

    </section>
  )
}