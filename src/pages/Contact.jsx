import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { saveContact, saveOrder } from "../services/adminService";

import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.product && form.product.trim() !== "") {
      saveOrder({
        name: form.name,
        email: form.email,
        phone: form.phone,
        product: form.product,
        message: form.message,
      });
    } else {
      saveContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
    }

    const text = `Hello MM Traders,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/918103326129?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="product"
              placeholder="Product Name"
              value={form.product}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
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