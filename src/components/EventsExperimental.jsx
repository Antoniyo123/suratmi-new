import React from "react";
import "../styles/EventsExperimental.css";

const events = [
  {
    title: "MIDNIGHT RITUAL",
    date: "12 APR 2026",
    venue: "Jakarta",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200",
  },
  {
    title: "RED FREQUENCY",
    date: "18 APR 2026",
    venue: "Bali",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    title: "DARK ROOM",
    date: "25 APR 2026",
    venue: "Bandung",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200",
  },
  {
    title: "SONIC WAVES",
    date: "02 MAY 2026",
    venue: "Surabaya",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=1200",
  },
];

export default function EventsExperimental() {
  return (
    <section className="events-section">
      <div className="events-container">

        <h2 className="events-title">Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className={`event-item event-${index}`} key={index}>
              
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>

              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <span>{event.venue}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}