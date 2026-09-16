import React from 'react';
import { PhoneIcon, LocationIcon, ClockIcon } from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="TEME UPHOLSTERY" 
              className="footer-logo-img" 
            />
            <div className="footer-brand-text">
              <span className="footer-brand-name">TEME</span>
              <span className="footer-brand-sub">CAR UPHOLSTERY &amp; DETAILING</span>
            </div>
          </div>
          <p className="footer-about">
            Professional car interior upholstery and customization in Addis Ababa. We specialize exclusively in passenger cars, SUVs, and pickups.
          </p>
          <div className="footer-notice-tag">
            <span>Cars, SUVs &amp; Pickups Only</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">Steering Wheel Covers</a></li>
            <li><a href="#services">Full Car Leather Seats</a></li>
            <li><a href="#services">Door Panel Upholstery</a></li>
            <li><a href="#services">Starlight Roof Lights</a></li>
            <li><a href="#services">7D Diamond Floor Mats</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Real Work Photos</a></li>
            <li><a href="#about">Why Choose Us</a></li>
            <li><a href="#about">Frequently Asked Questions</a></li>
            <li><a href="#booking">Book an Appointment</a></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Contact &amp; Location</h4>
          <div className="footer-contact-item">
            <PhoneIcon size={16} color="#e63946" />
            <a href="tel:0903511111" className="footer-phone-highlight">0903 51 11 11</a>
          </div>
          <div className="footer-contact-item">
            <LocationIcon size={16} color="#e63946" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="footer-contact-item">
            <ClockIcon size={16} color="#e63946" />
            <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
          </div>
          <a href="#booking" className="btn btn-outline footer-book-btn">
            Book Service
          </a>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} TEME UPHOLSTERY. All rights reserved. Phone: 0903 51 11 11.
          </p>
          <p className="footer-city-tag">
            Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
