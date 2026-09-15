import React from 'react';
import { ShieldIcon, CheckIcon, CarIcon, ClockIcon, PhoneIcon } from './Icons';
import './Craftsmanship.css';

const Craftsmanship = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ABOUT TEME UPHOLSTERY</span>
          <h2>Why Car Owners Choose Us</h2>
          <p>
            We are known across Addis Ababa for clean work, honest prices, and fast turnaround.
          </p>
        </div>

        {/* 4 Simple Feature Cards */}
        <div className="features-grid-simple">
          <div className="simple-card card-atelier">
            <div className="card-number">01</div>
            <h3>100% Cars Only</h3>
            <p>
              We do not fix sofas or home chairs. Every tool and worker in our shop is dedicated only to cars, SUVs, and 4x4s.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">02</div>
            <h3>Real Quality Leather</h3>
            <p>
              We use strong automotive leather that does not crack, fade, or tear in the sun. Easy to clean and very comfortable.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">03</div>
            <h3>10+ Years Experience</h3>
            <p>
              Over 5,000 cars completed in Addis Ababa. Our master stitchers make sure every seam and cut fits your car perfectly.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">04</div>
            <h3>Fast Service</h3>
            <p>
              Steering wheels done the same day. Full seats done quickly with careful attention so you get your car back on time.
            </p>
          </div>
        </div>

        {/* Simple Frequently Asked Questions (Reference Style) */}
        <div className="simple-faq-section card-atelier">
          <div className="faq-header">
            <h3>Frequently Asked Questions</h3>
            <p>Common questions from our clients in Addis Ababa:</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>Where is your workshop in Addis Ababa?</h4>
              <p>Our workshop is in Addis Ababa, Ethiopia. Call us at <strong>0903 51 11 11</strong> and we will share our location or guide you directly.</p>
            </div>

            <div className="faq-item">
              <h4>Do you work on home furniture or sofas?</h4>
              <p><strong>No.</strong> TEME Upholstery works strictly on cars, SUVs, pickups, and vans. We do not do household furniture.</p>
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
