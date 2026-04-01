import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have questions or want to book an event?</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉</span>
              <div>
                <h4>Email</h4>
                <p>hello@suratmi-fm.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">◐</span>
              <div>
                <h4>Phone</h4>
                <p>+62 813 4567 8900</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">◆</span>
              <div>
                <h4>Location</h4>
                <p>Surabaya, Indonesia</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">♪</span>
              <div>
                <h4>Hours</h4>
                <p>24/7 Broadcasting</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}