import { FaStar } from "react-icons/fa";
import "./Testimonials.css";



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
                "{item.review}"
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