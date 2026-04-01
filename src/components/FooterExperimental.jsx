import React from "react";
import "../styles/FooterExperimental.css";

export default function FooterExperimental() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top border */}
        <div className="footer-divider"></div>

        {/* Main content grid */}
        <div className="footer-grid">
          
          {/* Brand column */}
          <div className="footer-col footer-brand">
            <h2 className="footer-brand-title">
              Suratmi
              <br />
              FM
            </h2>
          </div>

          {/* Statement column */}
          <div className="footer-col footer-statement">
            <p className="footer-statement-text">
              Sound is not heard.
              <br />
              It is felt.
            </p>
          </div>

          {/* Navigation column */}
          <div className="footer-col footer-nav">
            <nav className="footer-links">
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Booking</a>
              <a href="#" className="footer-link">Email</a>
            </nav>
          </div>

        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Suratmi FM</p>
          <p className="footer-credit">
            <span className="footer-credit-label">Studio</span>
            <span className="footer-credit-slash">/</span>
            <span className="footer-credit-name">Editorial</span>
          </p>
        </div>

      </div>
    </footer>
  );
}