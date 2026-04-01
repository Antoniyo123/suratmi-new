import React from "react";
import "../styles/CTAExperimental.css";

export default function CTAExperimental() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        
        {/* Decorative line top */}
        <div className="cta-line-top"></div>

        {/* Main content */}
        <div className="cta-content">
          <h2 className="cta-heading">
            <span className="cta-line-1">Book the Sound</span>
            <span className="cta-line-2">
              Of <em>Your</em> Night
            </span>
          </h2>

          <p className="cta-subheading">
            Bring the energy. Control the atmosphere.
            <br />
            Let the night speak through sound.
          </p>

          <button className="cta-button">
            <span className="cta-button-text">Inquire Now</span>
            <span className="cta-button-arrow">→</span>
          </button>
        </div>

        {/* Decorative line bottom */}
        <div className="cta-line-bottom"></div>

      </div>
    </section>
  );
}