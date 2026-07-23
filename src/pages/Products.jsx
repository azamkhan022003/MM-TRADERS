import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/common/ProductCard";
import "./Products.css";

function Products() {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <section className="products-page">

      <div className="container">

        <div className="products-header">

          <h1>Our Products</h1>

          <p>
            Explore our complete range of premium Mild Steel products.
          </p>

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="products-grid">

          {filteredProducts.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Products;