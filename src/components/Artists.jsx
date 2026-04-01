import React from "react";
import '../styles/Artists.css'

const artists = [
  {
    name: "KAIRO",
    genre: "Techno / Industrial",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200",
  },
  {
    name: "NOVA",
    genre: "House / Disco",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    name: "RAVEN",
    genre: "Hard Techno",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200",
  },
  {
    name: "LYRA",
    genre: "Melodic Techno",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=1200",
  },
];

export default function ArtistExperimental() {
  return (
    <section className="artist-section">
      <div className="artist-container">
        
        <h2 className="artist-title">Artists</h2>

        <div className="artist-grid">
          {artists.map((artist, index) => (
            <div className="artist-item" key={index}>
              
              {/* IMAGE */}
              <div className="artist-image-wrapper">
                <img src={artist.image} alt={artist.name} />
              </div>

              {/* TEXT */}
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p>{artist.genre}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}