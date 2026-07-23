import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="about-page">

        <div className="about-content">

          <h1>About MM Traders</h1>

          <p>
            MM Traders is  the trusted suppliers of Mild Steel
            products. We specialize in supplying premium quality steel
            materials for industrial, commercial and construction projects.
          </p>

          <p>
            Our goal is to provide excellent customer service,
            competitive pricing and timely delivery.
          </p>

          <div className="about-boxes">

            <div className="box">
              <h2>3+</h2>
              <p>Years Experience</p>
            </div>

            <div className="box">
              <h2>150+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="box">
              <h2>100+</h2>
              <p>Projects</p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default AboutPage;