import React, { useState } from 'react';
import { 
  CheckIcon, 
  ArrowRightIcon 
} from './Icons';
import { servicesData } from '../data/services';
import './Services.css';

const Services = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  const handleBookService = (serviceKey) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2>Our Services</h2>
          <p>
            Real photos of our own work. Browse below and select a service to book a spot.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="services-filter-bar">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Work ({servicesData.length})
          </button>
          <button 
            className={`filter-btn ${activeTab === 'seats' ? 'active' : ''}`}
            onClick={() => setActiveTab('seats')}
          >
            <span>Seats &amp; Interiors</span>
          </button>
          <button 
            className={`filter-btn ${activeTab === 'steering' ? 'active' : ''}`}
            onClick={() => setActiveTab('steering')}
          >
            <span>Steering Wheels</span>
          </button>
          <button 
            className={`filter-btn ${activeTab === 'doors' ? 'active' : ''}`}
            onClick={() => setActiveTab('doors')}
          >
            <span>Door Panels</span>
          </button>
          <button 
            className={`filter-btn ${activeTab === 'lighting' ? 'active' : ''}`}
            onClick={() => setActiveTab('lighting')}
          >
            <span>Starlight Roofs</span>
          </button>
        </div>

        {/* Services Showcase Cards */}
        <div className="services-grid-showcase">
          {filteredServices.map((service) => (
            <article key={service.id} className="service-showcase-card card-atelier">
              <div className="service-card-media">
                <img 
                  src={service.image} 
                  alt={`${service.title} - TEME UPHOLSTERY`} 
                  className="service-card-image" 
                  loading="lazy"
                />
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-specs-list">
                  <span className="specs-heading">WHAT YOU GET:</span>
                  <ul>
                    {service.features.map((feat, i) => (
                      <li key={i}>
                        <CheckIcon size={14} color="#e63946" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <button 
                    type="button" 
                    onClick={() => handleBookService(service.serviceKey)}
                    className="btn btn-primary book-service-btn"
                  >
                    <span>Book This Service</span>
                    <ArrowRightIcon size={14} />
                  </button>
                  <a href="tel:0903511111" className="service-call-link">
                    Call: 0903 51 11 11
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
