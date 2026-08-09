import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          BEWAKOOF
        </div>

        {/* Navigation */}
        <nav className="navbar-links">
          <a href="/">MEN</a>
          <a href="/">WOMEN</a>
          <a href="/">ACCESSORIES</a>
        </nav>

        {/* Search */}
        <div className="navbar-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search for products"
          />
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <button aria-label="Account">
            <FiUser />
          </button>

          <button aria-label="Wishlist">
            <FiHeart />
          </button>

          <button aria-label="Cart">
            <FiShoppingBag />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;