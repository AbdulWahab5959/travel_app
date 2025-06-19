// src/components/About.jsx
import '../assets/css/About.css';
import aboutImage from '../assets/images/about.jpg'; // make sure image exists

export default function About() {
  return (
    <section className="about-wrapper py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImage} alt="About Us" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2 className="section-title mb-3">About Wanderlust Journeys</h2>
            <p className="section-subtitle">
              At Wanderlust Journeys, we believe travel is more than just sightseeing.
              It’s about stories, memories, and connections. Our mission is to inspire and guide you
              to your dream destinations with curated travel experiences.
            </p>
            <p className="section-subtitle">
              Whether you’re looking for a relaxing escape, an adventurous thrill, or a cultural discovery,
              we’re here to help you plan the journey of a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
