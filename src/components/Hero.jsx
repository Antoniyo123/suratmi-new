import { useRef, useEffect } from 'react'
import '../styles/Hero.css'
import logo from '../assets/suratmi logo.png'

/*
  Video source: Mixkit free stock (no watermark, free licence)
  Primary  → DJ playing music on stage (dark, moody atmosphere)
  Fallback → DJ turntable close-up

  💡 Swap VIDEO_SRC with your own hosted .mp4 for production.
     Recommended: compress to ~4–8 MB WebM/MP4 for fast load.
*/
const VIDEO_SRC      = 'https://assets.mixkit.co/videos/4026/4026-720.mp4'
const VIDEO_FALLBACK = 'https://assets.mixkit.co/videos/830/830-720.mp4'
const VIDEO_POSTER   = 'https://assets.mixkit.co/videos/4026/4026-thumb-360-0.jpg'

export default function Hero() {
  const videoRef = useRef(null)

  /* Ensure autoplay works across browsers after any user gesture */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {
      /* silent — browser blocked autoplay before interaction */
    })
  }, [])

  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">

  {/* 🎥 Video background (slow parallax) */}
  <video
    ref={videoRef}
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster={VIDEO_POSTER}
    data-parallax="-0.2"
  >
    <source src={VIDEO_SRC} type="video/mp4" />
    <source src={VIDEO_FALLBACK} type="video/mp4" />
  </video>

  {/* overlay ikut subtle */}
  <div className="hero-overlay" data-parallax="-0.15" />
  <div className="hero-grain" data-parallax="-0.1" />

  {/* 🧠 Logo (center focus) */}
  <div className="hero-center" data-parallax="-0.05">
    <div className="hero-logo-wrap">
      <img
        src={logo}
        alt="SuratMi FM"
        className="hero-logo"
      />
    </div>
  </div>

  {/* 👇 Scroll hint (foreground → lebih cepat dikit) */}
  <div className="hero-scroll" data-parallax="0.1" aria-hidden="true">
    <div className="hero-scroll-line" />
    <span className="hero-scroll-label">Scroll</span>
  </div>

  <div className="hero-bottom-bar" />

  <button className="hero-search-btn" aria-label="Search">
    <svg viewBox="0 0 24 24" strokeWidth="1.6" fill="none">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  </button>

</section>
  )
}