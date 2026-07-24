import "./FeaturedProduct.css";
import productImg from "../../assets/images/ms-steel.jpg";


function FeaturedProduct() {
  return (
    <section className="featured-product">
      <div className="container featured-container">
        <div className="featured-image">
          <img src={productImg} alt="MS Steel" />
        </div>

        <div className="featured-content">
          <h2>Premium MS Steel</h2>
          <p>
            High-quality mild steel products suitable for construction,
            fabrication, and industrial applications.
          </p>

          <ul>
            <li>ISI Certified</li>
            <li>Available in all sizes</li>
            <li>Fast delivery across India</li>
          </ul>

          <a href="/products" className="btn-primary">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;