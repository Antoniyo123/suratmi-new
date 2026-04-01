import React from "react";
import "../styles/FooterExperimental.css";

export default function FooterExperimental() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* BIG BRAND (lebih raw) */}
        <div className="footer-brand">
          <h1>
            SURATMI
            <br />
            FM
          </h1>
        </div>

        {/* Statement (lebih dingin, ga lebay) */}
        <div className="footer-statement">
          <p>
            Sound is not heard.
            <br />
            It is felt.
          </p>
        </div>

        {/* Links (loose, ga terlalu rapi) */}
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Booking</a>
          <a href="#">Email</a>
        </div>

        {/* Bottom kecil banget */}
        <div className="footer-bottom">
          <span>© 2026</span>
        </div>

      </div>

    </footer>
  );
}