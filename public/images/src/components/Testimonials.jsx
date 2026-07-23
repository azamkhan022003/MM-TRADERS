import "./Testimonials.css";

const testimonials = [
  {
    name: "Moosa Khan",
    company: "MM - TRADERS",
    review:
      "Excellent quality MS Steel and timely delivery. Highly recommended.",
  },

];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
