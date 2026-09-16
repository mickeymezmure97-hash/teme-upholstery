import React from 'react';
import { PhoneIcon, ArrowRightIcon, CheckIcon } from './Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-logo-badge">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="TEME Upholstery Logo" 
                className="hero-logo-emblem" 
              />
              <span className="hero-badge-text">Cars, SUVs &amp; Pickups Specialists</span>
            </div>

            <h1 className="hero-title">
              Premium Car Upholstery in Addis Ababa
            </h1>

            <p className="hero-description">
              We upgrade and restore car interiors. From custom leather seats and hand-stitched steering wheels to starlight roofs, we deliver clean work using durable materials.
            </p>

            <div className="hero-simple-points">
              <div className="simple-point">
                <CheckIcon size={16} color="#e63946" />
                <span>Factory-fit finish for any make and model</span>
              </div>
              <div className="simple-point">
                <CheckIcon size={16} color="#e63946" />
                <span>Durable, easy-to-clean automotive leather</span>
              </div>
              <div className="simple-point">
                <CheckIcon size={16} color="#e63946" />
                <span>Fast turnaround right here in Addis</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#booking" className="btn btn-primary hero-btn-main">
                <span>Book a Spot</span>
                <ArrowRightIcon size={16} />
              </a>
              <a href="tel:0903511111" className="btn btn-call">
                <PhoneIcon size={16} />
                <span>Call 0903 51 11 11</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card card-atelier">
              <div className="hero-image-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}services/bespoke-seats-green.jpg`} 
                  alt="Custom Car Leather Seats by TEME Upholstery" 
                  className="hero-featured-image" 
                />
              </div>
              <div className="hero-floating-badge">
                <span className="badge-title">REAL WORK FROM OUR SHOP</span>
                <span className="badge-subtitle">Full Car Leather Seats &amp; Center Console</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Reference-Style Facts Bar */}
        <div className="hero-stats-bar card-atelier">
          <div className="stat-box">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">5,000+</span>
            <span className="stat-label">Happy Car Owners</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Automotive Focus</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">0903 51 11 11</span>
            <span className="stat-label">Direct Phone / Call Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
