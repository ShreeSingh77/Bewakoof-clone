import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          BEWAKOOF
        </div>

        {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <a href="/" onClick={() => setMenuOpen(false)}>
            MEN
          </a>

          <a href="/" onClick={() => setMenuOpen(false)}>
            WOMEN
          </a>

          <a href="/" onClick={() => setMenuOpen(false)}>
            ACCESSORIES
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;