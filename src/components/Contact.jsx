// src/components/Contact.jsx
import '../assets/css/Contact.css';

export default function Contact() {
  return (
    <section className="contact-wrapper py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={e => {
                e.preventDefault();
                alert("Thank you for your message!");
              }}
            >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
