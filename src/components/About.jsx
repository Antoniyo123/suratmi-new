import { useEffect, useRef } from 'react'
import '../styles/AboutUs.css'

const stats = [
  { value: '2019', label: 'Est.' },
  { value: '40+',  label: 'Artists' },
  { value: '200+', label: 'Shows' },
  { value: '12',   label: 'Cities' },
]

export default function AboutUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>

      {/* Noise grain overlay */}
      <div className="about-grain" />

      {/* Metallic orb glows */}
      <div className="about-glow" />
      <div className="about-glow-secondary" />

      {/* Top metallic hairline */}
      <div className="about-line-accent" />

      <div className="about-inner">

        {/* ── Label row ── */}
        <div className="about-label-row">
          <span className="about-label">About Us</span>
          <div className="about-label-line" />
        </div>

        {/* ── Main content grid ── */}
        <div className="about-grid">

          {/* Left — editorial typographic mark */}
          <div className="about-left">
            <span className="about-big-year">
              SU<br />
              RAT<br />
              MI
            </span>
          </div>

          {/* Right — text content */}
          <div className="about-right">

            <h2 className="about-headline">
              Suara yang<br />
              <em>menggerakkan</em><br />
              malam.
            </h2>

            {/* Glass card */}
            <div className="about-body-card">
              <p className="about-body">
                SuratMi FM lahir dari satu keyakinan sederhana — bahwa musik bukan sekadar hiburan,
                melainkan bahasa paling jujur yang pernah ada. Kami adalah kolektif DJ, produser,
                dan kurator suara yang bergerak di ruang-ruang gelap kota, membawa frekuensi
                yang membuat tubuh dan pikiran bergerak beriringan.
              </p>
              <p className="about-body" style={{ marginBottom: 0 }}>
                Dari underground Jakarta hingga panggung festival, kami percaya setiap set
                adalah percakapan antara artis dan pendengar — intim, jujur, tak terduga.
              </p>
            </div>

            <div className="about-cta-row">
              <a
                className="about-cta"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Us
              </a>
              <span className="about-cta-line" />
            </div>

          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="about-stats">
          {stats.map(({ value, label }) => (
            <div className="about-stat" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}