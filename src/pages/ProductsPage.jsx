import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/common/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProductsPage.css";

function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="products-page">
        <div className="container">
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductsPage;
