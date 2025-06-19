// src/pages/Home.jsx
import { destinations } from "../data/destinations";
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Contact from '../components/Contact';
import CardComponent from "../components/CardComponent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />

      {/* Gallery Section */}
      <section className="gallery-wrapper py-5 mt-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Top Travel Destinations</h2>
          <div className="row">
            {destinations.map((item) => (
              <CardComponent
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
  <Contact />
    </div>

  );
}
