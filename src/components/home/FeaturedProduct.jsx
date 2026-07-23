import products from "../../data/products";
import ProductCard from "../common/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-heading">
          <span>OUR PRODUCTS</span>

          <h2>Premium Mild Steel Products</h2>

          <p>
            High-quality steel products for industrial, commercial and
            construction applications.
          </p>
        </div>

        <div className="products-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
