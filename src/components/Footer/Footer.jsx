import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>BEWAKOOF</h2>

          <p>
            Trendy styles, everyday comfort and fashion
            made for your vibe.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>

            <a href="#" aria-label="Twitter">
              <FiTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h3>SHOP</h3>

          <a href="/products?category=men">Men</a>
          <a href="/products?category=women">Women</a>
          <a href="/products?category=accessories">Accessories</a>
          <a href="/products">New Arrivals</a>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h3>HELP</h3>

          <a href="#">Contact Us</a>
          <a href="#">Track Order</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">FAQs</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Careers</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Bewakoof Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;