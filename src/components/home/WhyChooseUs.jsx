
import {
  FaAward,
  FaTruckMoving,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    text: "We supply high-quality Mild Steel products that meet industrial standards.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Fast Delivery",
    text: "Quick and reliable delivery across India for all project sizes.",
  },
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    text: "Years of experience serving industrial and construction businesses.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    text: "Our team is always available to assist with quotations and orders.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why">

      <div className="container">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>Trusted Steel Supplier</h2>

          <p>
            Delivering premium steel products with quality,
            reliability, and customer satisfaction.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (

            <div className="why-card" key={index}>

              <div className="icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;