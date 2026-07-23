import {
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaRoad,
  FaCity,
  FaTools,
} from "react-icons/fa";
import "./Industries.css";

const industries = [
  {
    icon: <FaBuilding />,
    title: "Construction",
    text: "Steel products for residential and commercial buildings.",
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Plants",
    text: "Reliable steel for factories and manufacturing units.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouses",
    text: "Strong structural steel for warehouse construction.",
  },
  {
    icon: <FaRoad />,
    title: "Infrastructure",
    text: "Quality steel for bridges, roads and public projects.",
  },
  {
    icon: <FaCity />,
    title: "Commercial Projects",
    text: "Premium steel solutions for offices and malls.",
  },
  {
    icon: <FaTools />,
    title: "Fabrication",
    text: "Steel products suitable for fabrication industries.",
  },
];

function Industries() {
  return (
    <section className="industries">
      <div className="container">

        <div className="section-heading">
          <span>INDUSTRIES WE SERVE</span>
          <h2>Supplying Steel Across Multiple Industries</h2>
          <p>
            Our products are trusted by builders, contractors,
            fabricators and industries across India.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">
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

export default Industries;