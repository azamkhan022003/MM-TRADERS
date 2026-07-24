import products from "../data/products";
import ProductCard from "./common/ProductCard";
import "./Products.css";

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-heading">
          <span>OUR PRODUCTS</span>
          <h2>Explore Our Product Range</h2>
          <p>
            High-grade Mild Steel products engineered for strength, durability,
            and industrial performance.
          </p>
        </div>

        <div className="products-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
