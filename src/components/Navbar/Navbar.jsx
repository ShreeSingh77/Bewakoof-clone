import { useState } from "react";
import { Link } from "react-router-dom";
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

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="navbar-logo"
        >
          BEWAKOOF
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="navbar-links">

          <Link to="/products?category=men">
            MEN
          </Link>

          <Link to="/products?category=women">
            WOMEN
          </Link>

          <Link to="/products?category=accessories">
            ACCESSORIES
          </Link>

        </nav>


        {/* ================= SEARCH ================= */}

        <div className="navbar-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search for products"
          />

        </div>


        {/* ================= ACTIONS ================= */}

        <div className="navbar-actions">

          {/* Account */}

          <Link
            to="/profile"
            className="navbar-action-link"
            aria-label="Account"
          >
            <FiUser />
          </Link>


          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="navbar-action-link"
            aria-label="Wishlist"
          >
            <FiHeart />
          </Link>


          {/* Cart */}

          <Link
            to="/cart"
            className="navbar-cart-link"
            aria-label="Cart"
          >
            <FiShoppingBag />
          </Link>


          {/* Mobile Menu */}

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>

        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <nav className="mobile-menu">

          <Link
            to="/products?category=men"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            MEN
          </Link>

          <Link
            to="/products?category=women"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            WOMEN
          </Link>

          <Link
            to="/products?category=accessories"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            ACCESSORIES
          </Link>

          <Link
            to="/wishlist"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            WISHLIST
          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            CART
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;