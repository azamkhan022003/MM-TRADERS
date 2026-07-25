import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { saveOrder } from "../services/adminService";
import "./InquiryPage.css";

function InquiryPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
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
      company: form.company,
      phone: form.phone,
      email: form.email,
      city: form.city,
      product: form.product,
      quantity: form.quantity,
      message: form.message,
    });

    const text = `
Hello,

New Product Inquiry

Name: ${form.name}

Company: ${form.company}

Phone: ${form.phone}

Email: ${form.email}

City: ${form.city}

Product: ${form.product}

Quantity: ${form.quantity}

Message:
${form.message}
`;

    window.open(
      `https://wa.me/918103326129?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />
      <section className="inquiry-page">

        <h1>Request a Quotation</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <select
            name="product"
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option>MS Steel</option>
            <option>MS Structure</option>
            <option>MS Pipe</option>
            <option>MS Flat</option>
            <option>MS Angle</option>
            <option>MS Channel</option>
            <option>Base Plate</option>
            <option>Profile Sheet</option>
          </select>

          <input
            type="text"
            name="quantity"
            placeholder="Required Quantity"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Additional Requirements"
            rows="5"
            onChange={handleChange}
          />

          <button type="submit">
            Send Inquiry on WhatsApp
          </button>

        </form>

      </section>
      <Footer />
    </>
  );
}

export default InquiryPage;