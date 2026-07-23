import { Link } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="container about-container">

    
        <div className="about-content">

          <span>ABOUT OUR COMPANY</span>

          <h2>
            Trusted Supplier of Premium Mild Steel Products
          </h2>

          <p>
            We are one of the leading suppliers of Mild Steel products,
            serving industrial, commercial, and construction projects
            across India.
          </p>

          <p>
            Our commitment to quality, timely delivery, and competitive
            pricing has helped us build long-term relationships with our
            customers.
          </p>

          <div className="stats">

            <div>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>

            <div>
              <h3>150+</h3>
              <p>Happy Customers</p>
            </div>

          </div>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;