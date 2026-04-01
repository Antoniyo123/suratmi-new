import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <ul className="nav-left">
          <li><a onClick={() => scrollToSection('artists')}>artists</a></li>
          <li><a onClick={() => scrollToSection('booking')}>booking</a></li>
        </ul>

        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-emblem">
            <span className="logo-icon">♪</span>
          </div>
        </div>

        <ul className="nav-right">
          <li><a onClick={() => scrollToSection('about')}>about us</a></li>
          <li><a onClick={() => scrollToSection('contact')}>contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}