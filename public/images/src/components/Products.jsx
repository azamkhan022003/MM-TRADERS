import "./Products.css";
import { Link } from "react-router-dom";
import products from "../data/products";

const products = [
  {
    id: 1,
    name: "MS Steel",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500",
  },
  {
    id: 2,
    name: "MS Structure",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500",
  },
  {
    id: 3,
    name: "MS Pipe",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500",
  },
  {
    id: 4,
    name: "MS Flat",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500",
  },
  {
    id: 5,
    name: "MS Angle",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
  },
  {
    id: 6,
    name: "MS Channel",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500",
  },
  {
    id: 7,
    name: "Base Plate",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500",
  },
  {
    id: 8,
    name: "Profile Sheet",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500",
  },
];

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

