import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InquiryPage from "./pages/InquiryPage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
    <Route path="/inquiry" element={<InquiryPage />} />
<Route path="/products" element={<Products />} />

<Route path="/contact" element={<Contact />} />

<Route path="/contact" element={<ContactPage />} />
      </Routes>
    

    </BrowserRouter>
  );
}

export default App;

