import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-content">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;