import React from "react";
import "../styles/CTAExperimental.css";

export default function CTAExperimental() {
  return (
    <section className="cta-section">
      
      {/* Background glow */}
      <div className="cta-glow"></div>

      <div className="cta-content">
        <h2>
          BOOK THE SOUND
          <br />
          <span>OF YOUR NIGHT</span>
        </h2>

        <p>
          Bring the energy. Control the atmosphere.  
          Let the night speak through sound.
        </p>

        <button className="cta-button">
          BOOK NOW
        </button>
      </div>

    </section>
  );
}