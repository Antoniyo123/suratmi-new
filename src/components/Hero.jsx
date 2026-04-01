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

      {/* ── Video background ── */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={VIDEO_POSTER}
      >
        <source src={VIDEO_SRC}      type="video/mp4" />
        <source src={VIDEO_FALLBACK} type="video/mp4" />
      </video>

      {/* ── Atmosphere overlays ── */}
      <div className="hero-overlay" />
      <div className="hero-grain"   />

      {/* ── Logo ── */}
      <div className="hero-center">
        <div className="hero-logo-wrap">
          <img
            src={logo}
            alt="SuratMi FM"
            className="hero-logo"
          />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>

      {/* ── Bottom edge rule ── */}
      <div className="hero-bottom-bar" />

      {/* ── Search button ── */}
      <button className="hero-search-btn" aria-label="Search">
        <svg viewBox="0 0 24 24" strokeWidth="1.6" fill="none">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
      </button>

    </section>
  )
}