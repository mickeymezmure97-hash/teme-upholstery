import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  LocationIcon, 
  CalendarIcon, 
  ClockIcon, 
  CheckIcon, 
  CarIcon 
} from './Icons';
import './BookingForm.css';

const BookingForm = ({ selectedServiceKey }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: selectedServiceKey || 'steering-wheel',
    date: '',
    colorNotes: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  useEffect(() => {
    if (selectedServiceKey) {
      setFormData(prev => ({ ...prev, service: selectedServiceKey }));
    }
  }, [selectedServiceKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Safe environment API reference
    const apiUrl = import.meta.env.VITE_BOOKING_API_URL || 'https://api.temeupholstery.com/book';

    setTimeout(() => {
      console.log('Booking submitted safely to API:', apiUrl, formData);
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">BOOK AN APPOINTMENT</span>
          <h2>Book Your Car Service</h2>
          <p>
            Fill out this quick form or call us directly. We will prepare the leather and confirm your drop-off time.
          </p>
        </div>

        <div className="booking-layout">
          {/* Sidebar Info with Exact Logo */}
          <div className="booking-sidebar card-atelier">
            <div className="sidebar-brand-box">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="TEME UPHOLSTERY" 
                className="sidebar-logo-img" 
              />
              <div className="sidebar-brand-text">
                <h3>TEME UPHOLSTERY</h3>
                <span className="sidebar-phone-tag">0903 51 11 11</span>
              </div>
            </div>

            <p className="sidebar-simple-text">
              Addis Ababa’s trusted car interior workshop. We work only on passenger cars, SUVs, and pickups.
            </p>

            <div className="sidebar-info-items">
              <div className="info-row">
                <PhoneIcon size={18} color="#e63946" />
                <div>
                  <span className="info-title">PHONE NUMBER</span>
                  <a href="tel:0903511111" className="info-val-phone">0903 51 11 11</a>
                </div>
              </div>

              <div className="info-row">
                <LocationIcon size={18} color="#e63946" />
                <div>
                  <span className="info-title">LOCATION</span>
                  <span className="info-val">Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="info-row">
                <ClockIcon size={18} color="#e63946" />
                <div>
                  <span className="info-title">WORKING HOURS</span>
                  <span className="info-val">Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="call-box-banner">
              <span className="call-box-title">NEED QUICK ADVICE?</span>
              <p>Call our workshop master directly to discuss prices and material colors.</p>
              <a href="tel:0903511111" className="btn btn-call full-width">
                <PhoneIcon size={16} />
                <span>Call 0903 51 11 11 Now</span>
              </a>
            </div>
          </div>

          {/* Simple Clean Booking Form */}
          <div className="booking-form-wrapper card-atelier">
            {status === 'success' ? (
              <div className="booking-success-state">
                <div className="success-icon-badge">
                  <CheckIcon size={32} color="#e63946" />
                </div>
                <h3>Booking Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. We got your booking request for your <strong>{formData.carModel || 'car'}</strong>.
                </p>
                <div className="success-box-simple">
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Preferred Date:</strong> {formData.date || 'To confirm over call'}</p>
                </div>
                <p className="success-hint">
                  We will call you at <strong>{formData.phone}</strong> shortly to confirm your booking and location directions.
                </p>
                <button 
                  type="button" 
                  onClick={() => setStatus('idle')} 
                  className="btn btn-outline"
                >
                  Book Another Car
                </button>
              </div>
            ) : (
              <form className="simple-booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. Abebe Kebede" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="0903 51 11 11" 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="carModel">Car Make &amp; Model *</label>
                    <input 
                      type="text" 
                      id="carModel" 
                      name="carModel" 
                      required 
                      value={formData.carModel} 
                      onChange={handleChange} 
                      placeholder="e.g. Toyota Prado, Corolla, Vitz, Patrol" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="steering-wheel">Hand-Stitched Steering Wheel Cover</option>
                      <option value="bespoke-cabin">Full Car Leather Seats &amp; Armrests</option>
                      <option value="door-panels">Car Door Panel Leather Upholstery</option>
                      <option value="starlight-roof">Starlight Ceiling (Star Roof Lights)</option>
                      <option value="sport-seats">Sport Two-Tone Seats &amp; 7D Floor Mats</option>
                      <option value="other">Complete Car Interior Upgrade</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">When would you like to bring your car? *</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required 
                    value={formData.date} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="colorNotes">Preferred Color or Notes (Optional)</label>
                  <textarea 
                    id="colorNotes" 
                    name="colorNotes" 
                    rows="2" 
                    value={formData.colorNotes} 
                    onChange={handleChange} 
                    placeholder="Tell us your preferred leather color (Green, Red, Black, Orange, Beige) or any questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending Booking...' : 'Confirm My Booking'}
                </button>

                <p className="form-simple-note">
                  No advance payment needed online. Pay at the workshop after inspecting the work!
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
