import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Craftsmanship from './components/Craftsmanship';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { PhoneIcon } from './components/Icons';

function App() {
  const [selectedService, setSelectedService] = useState('steering-wheel');

  const handleSelectService = (serviceKey) => {
    setSelectedService(serviceKey);
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
    </div>
  );
}

export default App;
