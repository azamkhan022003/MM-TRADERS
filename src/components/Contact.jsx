import { useState } from "react";
import emailjs from "@emailjs/browser";
import { saveContact } from "../services/adminService";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gst: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Save to admin database
    saveContact({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });

    emailjs
      .send(
        "service_4gt3m5d", // Service ID
        "template_1qv0zlj", // Template ID
        form, // Form data state
        "QHDvLLS17PHV5VQGm" // Public Key
      )
      .then(() => {
        alert("Message Sent Successfully");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          gst: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something Went Wrong");
      });
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>📞 +91 8103326129</p>
        <p>📧 mmtraders.mp@gmail.com</p>
        <p>📍 Gwalior, Madhya Pradesh</p>
        <p className="gst-number">
          <strong>GSTIN: </strong>23NZQPK1479H1ZQ
        </p>
      </div>

      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81000.22617174867!2d78.17117851598113!3d26.205197405257845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42e23bbc785%3A0x948ef8ea18aede95!2sRoshni%20Ghar%20Mohalla%2C%20Lashkar%2C%20Gwalior%2C%20Madhya%20Pradesh%20474009!5e0!3m2!1sen!2sin!4v1783878073281!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;