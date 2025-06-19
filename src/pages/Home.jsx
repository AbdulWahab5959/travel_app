// src/pages/Home.jsx
import { destinations } from "../data/destinations";
import HeroSection from '../components/HeroSection'; // adjust path if needed
import CardComponent from "../components/CardComponent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="card-grid">
        {destinations.map((item) => (
          <CardComponent
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
}
