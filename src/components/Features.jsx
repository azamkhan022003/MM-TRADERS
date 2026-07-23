import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>

          <h2>MM TRADERS</h2>

          <p>
            Premium Supplier of Mild Steel Products.
          </p>

        </div>

        <div>

          <h3>Products</h3>

          <p>MS Steel</p>

          <p>MS Pipe</p>

          <p>MS Angle</p>

          <p>MS Channel</p>

        </div>

        <div>

          <h3>Contact</h3>

          <p>📞 +91 8103326129</p>

          <p>mmtraders.mp@gmail.com</p>

          <p>Gwalior, Madhya Pradesh</p>

        </div>

      </div>

      <hr />

      <p className="copyright">

        © 2026 MM Traders. All Rights Reserved.

      </p>

    </footer>
  );
}

export default Footer;