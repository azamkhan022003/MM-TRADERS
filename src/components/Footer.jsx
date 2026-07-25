import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
 
 
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Company */}

        <div className="footer-column">

          <h2>
            <span>MM</span> TRADERS
          </h2>

          <p>
            We supply premium quality Mild Steel products for
            construction, industrial and commercial projects across India.
          </p>

    </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/admin">Admin Portal</Link>

        </div>

        {/* Products */}

        <div className="footer-column">

          <h3>Products</h3>

          <p>MS Steel</p>

          <p>MS Structure</p>

          <p>MS Pipe</p>

          <p>MS Flat</p>

          <p>MS Angle</p>

          <p>MS Channel</p>

          <p>Base Plate</p>

          <p>Profile Sheet</p>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 8103326129
          </p>

          <p>
            <FaEnvelope /> mmtraders.mp@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Gwalior, Madhya Pradesh
          </p>

              <p className="footer-gst">
            <strong>GSTIN</strong>23NZQPK1479H1ZQ
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 MM Traders. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;