// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
