import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Craftsmanship from './components/Craftsmanship';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { PhoneIcon, CalendarIcon } from './components/Icons';

function App() {
  const [selectedService, setSelectedService] = useState('steering-wheel');

  const handleSelectService = (serviceKey) => {
    setSelectedService(serviceKey);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Craftsmanship />
        <BookingForm selectedServiceKey={selectedService} />
      </main>
      <Footer />

      {/* Desktop Floating Hotline */}
      <a 
        href="tel:0903511111" 
        className="floating-hotline-btn desktop-only"
        title="Direct Call to Workshop"
      >
        <PhoneIcon size={20} color="#ffffff" />
        <span className="floating-text">Call 0903 51 11 11</span>
      </a>

      {/* Mobile Sticky Bottom Action Bar (Perfect Phone UX) */}
      <div className="mobile-bottom-bar">
        <a href="tel:0903511111" className="mobile-bar-btn mobile-call-btn">
          <PhoneIcon size={18} />
          <span>Call 0903 51 11 11</span>
        </a>
        <button type="button" onClick={scrollToBooking} className="mobile-bar-btn mobile-book-btn">
          <CalendarIcon size={18} />
          <span>Book Service</span>
        </button>
      </div>
    </div>
  );
}

export default App;
