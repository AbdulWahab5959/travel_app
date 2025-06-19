import React from 'react';
import '../assets/css/HeroSection.css';
import heroImage from '../assets/images/hero-section/image-3.jpg'; // Replace with your actual image

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 75, 109, 0.5), rgba(26, 75, 109, 0.7)), url(${heroImage})`,
      }}
    >
      <div className="hero-content text-center text-white">
        <h1 className="hero-title display-4 fw-bold">Wanderlust Journeys</h1>
        <p className="hero-subtitle lead">Explore the world with us</p>
        <button className="hero-button btn btn-lg">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
