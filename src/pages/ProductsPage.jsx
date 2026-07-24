import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProductsPage.css";

function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <section className="products-page">
        <div className="page-header">
          <h1>Our Products</h1>
          <p>
            Premium Mild Steel Products for Industrial & Construction Projects
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-link"
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <button>View Details</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductsPage;
