import React from 'react';
import './Craftsmanship.css';

const Craftsmanship = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Simple Frequently Asked Questions (Reference Style) */}
        <div className="simple-faq-section card-atelier">
          <div className="faq-header">
            <h3>Common Questions</h3>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>Where are you located?</h4>
              <p>Our workshop is in Addis Ababa. Call us at <strong>0903 51 11 11</strong> for exact directions.</p>
            </div>

            <div className="faq-item">
              <h4>What types of vehicles do you work on?</h4>
              <p>We specialize exclusively in passenger cars, luxury sedans, 4x4s, SUVs, and commercial pickups of any make and model.</p>
            </div>

            <div className="faq-item">
              <h4>How long does the work take?</h4>
              <p>Steering wheels take about <strong>4 to 6 hours</strong> (same day). A full car interior or complete seat set takes <strong>2 to 4 days</strong>.</p>
            </div>

            <div className="faq-item">
              <h4>Can I choose my own colors and style?</h4>
              <p>Yes! You can choose any color (green, orange, red, black, beige, brown) and custom stitch patterns when you visit our shop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
