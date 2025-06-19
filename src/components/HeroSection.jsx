import '../assets/css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center text-white text-center">
      <div className="container">
        <div className="hero-content">
          <h1 className="display-3 fw-bold hero-title">Wanderlust Journeys</h1>
          <p className="lead hero-subtitle">Explore the world with us</p>
          <a href="#tours" className="btn btn-primary btn-lg mt-3 hero-button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
