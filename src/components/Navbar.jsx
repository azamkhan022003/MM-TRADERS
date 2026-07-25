import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="MM Traders" />
        </div>

       <nav>
  <ul className="nav-links">
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>

    <li>
      <Link to="/about">About</Link>
    </li>

    <li>
      <Link to="/contact">Contact</Link>
    </li>

    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
</nav>

      <Link to="/contact" className="quote-btn">
    <FaPhoneAlt />
    Get Quote
</Link>

      </div>
    </header>
  );
}