import React, { useState } from "react";
import "../styles/EventsExperimental.css";

const events = [
  {
    title: "MIDNIGHT RITUAL",
    date: "12 APR 2026",
    venue: "Jakarta",
    genre: "House",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200",
  },
  {
    title: "RED FREQUENCY",
    date: "18 APR 2026",
    venue: "Bali",
    genre: "Techno",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    title: "DARK ROOM",
    date: "25 APR 2026",
    venue: "Bandung",
    genre: "Deep",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200",
  },
  {
    title: "SONIC WAVES",
    date: "02 MAY 2026",
    venue: "Surabaya",
    genre: "Ambient",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=1200",
  },
];

export default function EventsExperimental() {
  const [revealedItems, setRevealedItems] = useState(new Set());

  const toggleReveal = (index) => {
    setRevealedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="event-section">
      <div className="event-container">
        {/* Header */}
        <div className="event-header">
          <div className="event-header-left">
            <p className="event-eyebrow">Upcoming</p>
            <h2 className="event-title">
              Events<em>.</em>
            </h2>
          </div>
          <div className="event-header-right">
            <p>
              Join us for exclusive nights of sound and atmosphere. Each event
              curated for unforgettable moments.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="event-grid">
          {events.map((event, index) => (
            <div
              className={`event-item ${revealedItems.has(index) ? "is-revealed" : ""}`}
              key={index}
              onMouseEnter={() => toggleReveal(index)}
              onMouseLeave={() => toggleReveal(index)}
            >
              {/* Ghost index */}
              <div className="event-index-ghost">{String(index + 1).padStart(2, "0")}</div>

              {/* Image wrapper with reveal overlay */}
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} />
                <div className="event-image-gradient"></div>

                {/* Genre tag */}
                <div className="event-genre-tag">{event.genre}</div>
              </div>

              {/* Info */}
              <div className="event-info">
                <h3 className="event-name">{event.title}</h3>
                <div className="event-meta">
                  <div className="event-details">
                    <p className="event-date">{event.date}</p>
                    <p className="event-venue">{event.venue}</p>
                  </div>
                  <div className="event-info-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}