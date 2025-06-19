// src/components/CardComponent.jsx
import '../assets/css/CardComponent.css';

export default function CardComponent({ image, title, description }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4"> {/* Grid class here */}
      <div className="gallery-card">
        <img src={image} alt={title} className="gallery-image" />
        <div className="overlay">
          <h3 className="overlay-title">{title}</h3>
          <p className="overlay-text">{description}</p>
          <a href="#" className="overlay-btn">Explore More</a>
        </div>
      </div>
    </div>
  );
}
