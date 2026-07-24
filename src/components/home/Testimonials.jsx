import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Gupta",
    company: "Gupta Construction",
    review:
      "Excellent quality MS Steel and very timely delivery. Highly recommended for any construction project.",
  },
  {
    id: 2,
    name: "Suresh Patel",
    company: "Patel Fabricators",
    review:
      "Best supplier in Gwalior. Competitive pricing and top-grade Mild Steel products every time.",
  },
  {
    id: 3,
    name: "Anil Sharma",
    company: "Sharma Infra",
    review:
      "MM Traders never disappoints. Fast delivery and genuinely high-quality MS Pipe and MS Angle.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-heading">
          <span>CLIENT TESTIMONIALS</span>
          <h2>What Our Customers Say</h2>
          <p>
            We are proud to have earned the trust of customers across
            construction, fabrication, and industrial sectors.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div className="testimonial-card" key={item.id}>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="client">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;