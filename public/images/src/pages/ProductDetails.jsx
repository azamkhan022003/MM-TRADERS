import { useParams, Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="back-btn">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="product-details">
      <div className="container">
        <div className="details-grid">
          {/* Left Side */}

          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Right Side */}

          <div className="details-content">
            <span className="product-tag">Premium Steel Product</span>

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <div className="specifications">
              <h3>Specifications</h3>

              <table>
                <tbody>
                  <tr>
                    <td>Grade</td>
                    <td>{product.grade}</td>
                  </tr>

                  <tr>
                    <td>Available Sizes</td>
                    <td>{product.sizes}</td>
                  </tr>

                  <tr>
                    <td>Supply</td>
                    <td>Bulk & Retail</td>
                  </tr>

                  <tr>
                    <td>Delivery</td>
                    <td>Across India</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="features">
              <h3>Features</h3>

              <ul>
                <li>
                  <FaCheckCircle /> High Strength
                </li>

                <li>
                  <FaCheckCircle /> Corrosion Resistant
                </li>

                <li>
                  <FaCheckCircle /> Industrial Grade
                </li>

                <li>
                  <FaCheckCircle /> Quality Tested
                </li>
              </ul>
            </div>

            <div className="details-buttons">
              <a href="tel:+918103326129" className="call-btn">
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href={`https://wa.me/919876543210?text=Hello, I'm interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp />
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
