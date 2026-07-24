import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../assets/images/ms-steel.jpg"; // Use a working image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <span className="hero-tag">
            PREMIUM MILD STEEL SUPPLIER
          </span>

          <h1>
            Premium Mild Steel Products
            <span> For Industrial & Construction Projects</span>
          </h1>

          <p>
            MM Traders is a trusted supplier of premium quality MS Steel,
            MS Structure, MS Pipe, MS Flat, MS Angle, MS Channel,
            Base Plate and Profile Sheet with competitive prices and
            fast delivery across India.
          </p>

          <ul className="hero-list">
            <li>✔ MS Steel</li>
            <li>✔ MS Structure</li>
            <li>✔ MS Pipe</li>
            <li>✔ MS Flat</li>
            <li>✔ MS Channel</li>
            <li>✔ Profile Sheet</li>
          </ul>

          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">
              Explore Products
            </Link>

            <a href="tel:+918103326129" className="btn-secondary">
              Call Now
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image">
          <img src={heroImage} alt="Steel Products" />
        </div>
        </div>

    </section>
  );
}

export default Hero;