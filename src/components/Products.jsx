import "./Products.css";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  return (
    <section className="products">
      <h2>OUR PRODUCTS</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>
              Premium quality {item.name} available in different sizes and
              specifications.
            </p>

            <Link to={`/product/${item.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

