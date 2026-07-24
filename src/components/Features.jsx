import { FaAward, FaTruck, FaUserCheck, FaPhoneAlt } from "react-icons/fa";
import "./Features.css";

const featureList = [
  {
    icon: <FaAward />,
    title: "ISI Certified",
    text: "All our steel products meet ISI standards for quality assurance.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "Quick and reliable delivery across Madhya Pradesh and India.",
  },
  {
    icon: <FaUserCheck />,
    title: "Trusted Supplier",
    text: "Serving 150+ happy clients across construction and industrial sectors.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "24×7 Support",
    text: "Our team is always available for quotations and order assistance.",
  },
];

function Features() {
  return (
    <section className="features">
      {featureList.map((item, index) => (
        <div className="feature-card" key={index}>
          <span>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;