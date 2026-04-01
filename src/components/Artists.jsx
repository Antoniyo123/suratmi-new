import { useEffect, useRef } from 'react'
import '../styles/Artists.css'

const artists = [
  {
    name: 'KAIRO',
    genre: 'Techno / Industrial',
    image: 'https://images.pexels.com/photos/1998906/pexels-photo-1998906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'NOVA',
    genre: 'House / Disco',
    image: 'https://images.pexels.com/photos/16378105/pexels-photo-16378105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'RAVEN',
    genre: 'Hard Techno',
    image: 'https://images.pexels.com/photos/10564671/pexels-photo-10564671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'LYRA',
    genre: 'Melodic Techno',
    image: 'https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export default function Artists() {
  const gridRef = useRef(null)

  /* Staggered clip-reveal as cards enter the viewport */
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.artist-item')
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = Number(el.dataset.delay || 0)
            setTimeout(() => el.classList.add('is-revealed'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="artist-section">
      <div className="artist-container">

        {/* ── Header ── */}
        <div className="artist-header">
          <div className="artist-header-left">
            <span className="artist-eyebrow">Our Roster</span>
            <h2 className="artist-title">
              The<br /><em>Artists</em>
            </h2>
          </div>
          <p className="artist-header-right">
            Kolektif kurator suara yang membentuk identitas<br />
            setiap ruang, setiap malam.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="artist-grid" ref={gridRef}>
          {artists.map((artist, i) => (
            <div
  className="artist-item"
  key={artist.name}
  data-delay={i * 120}
  data-parallax={0.04 + i * 0.015} // 🔥 beda speed tiap card
>
              {/* Ghost index */}
              <span className="artist-index-ghost" aria-hidden="true">
                0{i + 1}
              </span>

              {/* Image */}
              <div className="artist-image-wrapper">
  <img
    src={artist.image}
    alt={artist.name}
    loading="lazy"
    data-parallax="0.08"
  />
  <div className="artist-image-gradient" />
  <span className="artist-genre-tag">{artist.genre}</span>
</div>

              {/* Info row */}
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <span className="artist-info-index">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}