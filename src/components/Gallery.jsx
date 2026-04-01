import { useState } from 'react'
import '../styles/Gallery.css'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleries = [
    { id: 1, title: 'Electric Night 2024', category: 'events' },
    { id: 2, title: 'DJ Night Vibes', category: 'performances' },
    { id: 3, title: 'Crowd Energy', category: 'events' },
    { id: 4, title: 'Studio Session', category: 'performances' },
    { id: 5, title: 'Festival Moments', category: 'events' },
    { id: 6, title: 'Live Recording', category: 'performances' },
  ]

  const filtered = selectedCategory === 'all' 
    ? galleries 
    : galleries.filter(g => g.category === selectedCategory)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <p>Moments from our most incredible events</p>
        </div>

        <div className="gallery-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'events' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('events')}
          >
            Events
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'performances' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('performances')}
          >
            Performances
          </button>
        </div>

        <div className="gallery-grid">
          {filtered.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">◆</span>
                </div>
              </div>
              <div className="gallery-info">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}