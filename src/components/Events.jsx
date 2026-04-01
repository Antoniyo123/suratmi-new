import '../styles/Events.css'

export default function Events() {
  const events = [
    {
      id: 1,
      date: 'FRI, APR 15',
      title: 'Deep House Vibes',
      artist: 'DJ Luna',
      time: '10:00 PM - 2:00 AM',
      attendees: '2.3K'
    },
    {
      id: 2,
      date: 'SAT, APR 16',
      title: 'Techno Underground',
      artist: 'DJ Nova',
      time: '11:00 PM - 3:00 AM',
      attendees: '3.1K'
    },
    {
      id: 3,
      date: 'SUN, APR 17',
      title: 'Electronic Sunset',
      artist: 'DJ Echo & Rhythm',
      time: '7:00 PM - 11:00 PM',
      attendees: '1.8K'
    }
  ]

  return (
    <section id="events" className="events">
      <div className="events-container">
        <div className="events-header">
          <h2>Upcoming Events</h2>
          <p>Discover our latest live performances and DJ sets</p>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="date-badge">{event.date}</span>
              </div>

              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-artist">
                  <span className="artist-icon">●</span>
                  {event.artist}
                </p>
                <p className="event-time">
                  <span className="time-icon">◐</span>
                  {event.time}
                </p>
              </div>

              <div className="event-right">
                <div className="event-attendees">
                  <span className="attendees-count">{event.attendees}</span>
                  <span className="attendees-label">listening</span>
                </div>
                <button className="event-btn">Listen</button>
              </div>
            </div>
          ))}
        </div>

        <div className="events-footer">
          <button className="btn-more">View All Events</button>
        </div>
      </div>
    </section>
  )
}