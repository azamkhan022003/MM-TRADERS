import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <div className="cta-content">

            <span>GET A FREE QUOTATION</span>

            <h2>
              Looking for High Quality Mild Steel Products?
            </h2>

            <p>
              Contact our sales team today for competitive prices,
              bulk orders and fast delivery anywhere in India.
            </p>

          </div>

          <div className="cta-buttons">

            <a
              href="tel:+918103326129"
              className="call-btn"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/918103326129"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="contact-btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;