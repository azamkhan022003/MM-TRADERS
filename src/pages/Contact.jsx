import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="container">

        <div className="contact-header">

          <span>CONTACT US</span>

          <h1>Get In Touch</h1>

          <p>
            We'd love to hear from you. Contact us for quotations,
            product information or bulk orders.
          </p>

        </div>

        <div className="contact-grid">

          {/* Contact Info */}

          <div className="contact-info">

            <div className="info-card">

              <FaPhoneAlt />

              <div>
                <h3>Call Us</h3>
                <p>+91 8103326129</p>
              </div>

            </div>

            <div className="info-card">

              <FaEnvelope />

              <div>
                <h3>Email</h3>
                <p>mmtraders.mp@gmail.com</p>
              </div>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>
                <h3>Address</h3>
                <p>
                  Gwalior, Madhya Pradesh,
                  India
                </p>

               <p className="gst-number">
                <strong>GSTIN</strong>23NZQPK1479H1ZQ
               </p>

              </div>

              

            </div>

            <a
              href="https://wa.me/918103326129"
              className="whatsapp-contact"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

          {/* Contact Form */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="text"
              placeholder="Product Name"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;