// src/components/Contact.jsx
import '../assets/css/Contact.css';

export default function Contact() {
  return (
    <section className="contact-wrapper py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">Get a Travel Quote</h2>
        <div className="row">
          
          {/* Left side - Dummy Location Info */}
          <div className="col-md-3 mb-4">
    
          </div>

          {/* Right side - Quotation Form */}
          <div className="col-md-6">
            <form
              onSubmit={e => {
                e.preventDefault();
                alert("Quotation request submitted!");
              }}
              className="bg-white p-4 shadow-sm rounded"
            >
              <div className="mb-3">
                <select className="form-select" required>
                  <option value="">Select Destination</option>
                  <option value="Paris">Paris, France</option>
                  <option value="Bali">Bali, Indonesia</option>
                  <option value="Peru">Machu Picchu, Peru</option>
                  <option value="Greece">Santorini, Greece</option>
                  <option value="Japan">Kyoto, Japan</option>
                </select>
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="Number of Days" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Contact Number" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Additional Message" required></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary px-3 py-2">Request Quote</button>
              </div>
            </form>
          </div>
          <div className="col-md-3 mb-4">
    
          </div>
        </div>
      </div>
    </section>
  );
}
