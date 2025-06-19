// src/components/Footer.jsx
import '../assets/css/Footer.css'; // Make sure this CSS file exists

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="fw-bold text-uppercase mb-4">Wanderlust Journeys</h5>
            <p>
              Explore hand-picked destinations with curated travel experiences
              tailored just for you. Adventure starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/destinations" className="text-white text-decoration-none">Destinations</a></li>
              <li><a href="/tours" className="text-white text-decoration-none">Tours</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Islamabad, Pakistan</p>
            <p><i className="bi bi-envelope-fill me-2"></i> info@wanderlust.com</p>
            <p><i className="bi bi-phone-fill me-2"></i> +92 300 1234567</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
            <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter-x fs-5"></i></a>
            <a href="#" className="text-white"><i className="bi bi-youtube fs-5"></i></a>
          </div>

        </div>

        <hr className="my-4 border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Wanderlust Journeys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
