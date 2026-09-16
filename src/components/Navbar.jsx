import React, { useState } from 'react';
import { PhoneIcon, LocationIcon, ClockIcon } from './Icons';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      {/* Reference site top info bar (hidden on mobile) */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-info-left">
            <span className="top-info-item">
              <LocationIcon size={14} color="#e63946" />
              Addis Ababa, Ethiopia
            </span>
            <span className="top-info-divider">•</span>
            <span className="top-info-item">
              <ClockIcon size={14} color="#e63946" />
              Mon – Sat: 8:00 AM – 6:00 PM
            </span>
          </div>
          <div className="top-info-right">
            <a href="tel:0903511111" className="top-hotline">
              <PhoneIcon size={14} color="#ff5722" />
              Call Us: <strong>0903 51 11 11</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="brand-logo" onClick={closeMenu}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="TEME UPHOLSTERY" 
              className="exact-logo-img" 
            />
            <div className="brand-titles">
              <span className="brand-name">TEME</span>
              <span className="brand-tagline">CAR UPHOLSTERY</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-menu">
            <a href="#services" className="nav-link">Our Services</a>
            <a href="#about" className="nav-link">Why Choose Us</a>
            <a href="#booking" className="nav-link">Book Now</a>
          </div>

          {/* Desktop & Tablet Actions */}
          <div className="nav-cta-group">
            <a href="tel:0903511111" className="btn btn-outline nav-call-btn">
              <PhoneIcon size={16} color="#e63946" />
              <span>0903 51 11 11</span>
            </a>
            <a href="#booking" className="btn btn-primary nav-book-btn">
              Book Now
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button 
              type="button" 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <div className="mobile-drawer-links">
            <a href="#services" className="mobile-drawer-link" onClick={closeMenu}>
              Our Services &amp; Photos
            </a>
            <a href="#about" className="mobile-drawer-link" onClick={closeMenu}>
              Why Choose TEME (About &amp; FAQ)
            </a>
            <a href="#booking" className="mobile-drawer-link highlight-link" onClick={closeMenu}>
              Book an Appointment
            </a>
            <a href="tel:0903511111" className="mobile-drawer-call">
              <PhoneIcon size={18} />
              <span>Call 0903 51 11 11</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
