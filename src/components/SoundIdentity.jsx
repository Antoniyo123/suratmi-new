import React, { useState, useEffect } from "react";
import "../styles/SoundIdentity.css";

export default function SoundIdentity() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="sound-section">
      {/* Subtle grain overlay */}
      <div className="sound-grain"></div>

      {/* Main content */}
      <div className={`sound-content ${isVisible ? "loaded" : ""}`}>
        <div className="sound-container">
          
          {/* Decorative line top */}
          <div className="sound-line-top"></div>

          {/* Header section */}
          <div className="sound-header">
            <div className="sound-eyebrow">Welcome</div>
            <h1 className="sound-title">
              We Shape
              <br />
              <em>The Night</em>
            </h1>
          </div>

          {/* Description section */}
          <div className="sound-description-block">
            <p className="sound-description">
              A collective of sound, energy, and atmosphere crafted for moments you don't forget.
            </p>
          </div>

          {/* CTA Section */}
          <div className="sound-cta">
            <button className="sound-btn sound-btn-primary">
              <span>Explore</span>
              <span className="sound-btn-arrow">→</span>
            </button>
            <button className="sound-btn sound-btn-secondary">
              <span>Book Now</span>
            </button>
          </div>

          {/* Decorative line bottom */}
          <div className="sound-line-bottom"></div>

        </div>
      </div>
    </section>
  );
}