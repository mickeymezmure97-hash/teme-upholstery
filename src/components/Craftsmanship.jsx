import React from 'react';
import { ShieldIcon, CheckIcon, CarIcon, ClockIcon, PhoneIcon } from './Icons';
import './Craftsmanship.css';

const Craftsmanship = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ABOUT TEME UPHOLSTERY</span>
          <h2>Why Choose Us</h2>
          <p>
            Clean work. Honest prices. Done right.
          </p>
        </div>

        {/* 4 Simple Feature Cards */}
        <div className="features-grid-simple">
          <div className="simple-card card-atelier">
            <div className="card-number">01</div>
            <h3>Automotive Specialists</h3>
            <p>
              Every tool, machine, and technician in our workshop is dedicated exclusively to cars, SUVs, pickups, and 4x4s.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">02</div>
            <h3>Quality Materials</h3>
            <p>
              We use automotive-grade leather that won't crack or fade in the sun. Built to handle daily wear.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">03</div>
            <h3>10+ Years Experience</h3>
            <p>
              Thousands of cars completed in Addis Ababa. We make sure every seam fits perfectly.
            </p>
          </div>

          <div className="simple-card card-atelier">
            <div className="card-number">04</div>
            <h3>Fast Turnaround</h3>
            <p>
              Steering wheels done same day. Full interiors handled quickly without cutting corners.
            </p>
          </div>
        </div>

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
