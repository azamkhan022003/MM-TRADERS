import { useState } from "react";
import "./InquiryForm.css";
import emailjs from "@emailjs/browser";
import { saveOrder } from "../services/adminService";

function InquiryForm({ product }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveOrder({
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      product: product?.name || "Steel Product",
      quantity: form.quantity,
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `
Product: ${product.name}

City: ${form.city}

Required Quantity: ${form.quantity}
          `,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Inquiry sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          city: "",
          quantity: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send inquiry.");
      });
  };

  const sendWhatsApp = () => {
    saveOrder({
      name: form.name || "WhatsApp User",
      email: form.email,
      phone: form.phone,
      city: form.city,
      product: product?.name || "Steel Product",
      quantity: form.quantity,
      message: "Requested quotation on WhatsApp",
    });

    const message = `Hello,

I am interested in:

Product: ${product.name}

Name: ${form.name}

Email: ${form.email}

Phone: ${form.phone}

City: ${form.city}

Required Quantity: ${form.quantity}

Please send me the quotation.`;

    window.open(
      `https://wa.me/918103326129?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="inquiry-box">
      <h2>Request a Quote</h2>

      <form onSubmit={handleSubmit}>
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
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="quantity"
          placeholder="Required Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Inquiry</button>

        <button
          type="button"
          onClick={sendWhatsApp}
          style={{ marginTop: "10px" }}
        >
          Get Quotation on WhatsApp
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;