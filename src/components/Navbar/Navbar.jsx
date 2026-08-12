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
  const [megaMenu, setMegaMenu] = useState(null);

  return (
    <header
      className="navbar"
      onMouseLeave={() => setMegaMenu(null)}
    >

      {/* ================= TOP NAVBAR ================= */}

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          BEWAKOOF
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="navbar-links">

  <div
    className="nav-mega-trigger"
    onMouseEnter={() => setMegaMenu("men")}
  >
    <button type="button">
      MEN
    </button>
  </div>

  <div
    className="nav-mega-trigger"
    onMouseEnter={() => setMegaMenu("women")}
  >
    <button type="button">
      WOMEN
    </button>
  </div>

  <div
    className="nav-mega-trigger"
    onMouseEnter={() => setMegaMenu("accessories")}
  >
    <button type="button">
      ACCESSORIES
    </button>
  </div>

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

          <Link
            to="/profile"
            className="navbar-action-link"
            aria-label="Account"
          >
            <FiUser />
          </Link>


          <Link
            to="/wishlist"
            className="navbar-action-link"
            aria-label="Wishlist"
          >
            <FiHeart />
          </Link>


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
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>


      {/* =================================================
          MEGA MENU
      ================================================= */}

      {megaMenu && (
        <div className="mega-menu">

          <div className="mega-menu-container">


            {/* ================= MEN ================= */}

            {megaMenu === "men" && (
              <>

                <div className="mega-column">

                  <h3>TOPWEAR</h3>

                  <Link to="/products?category=men">
                    T-Shirts
                  </Link>

                  <Link to="/products?category=men">
                    Oversized T-Shirts
                  </Link>

                  <Link to="/products?category=men">
                    Shirts
                  </Link>

                  <Link to="/products?category=men">
                    Hoodies
                  </Link>

                  <Link to="/products?category=men">
                    Sweatshirts
                  </Link>

                </div>


                <div className="mega-column">

                  <h3>BOTTOMWEAR</h3>

                  <Link to="/products?category=men">
                    Jeans
                  </Link>

                  <Link to="/products?category=men">
                    Joggers
                  </Link>

                  <Link to="/products?category=men">
                    Shorts
                  </Link>

                  <Link to="/products?category=men">
                    Trousers
                  </Link>

                </div>


                <div className="mega-column">

                  <h3>FOOTWEAR</h3>

                  <Link to="/products?category=men">
                    Sneakers
                  </Link>

                  <Link to="/products?category=men">
                    Casual Shoes
                  </Link>

                  <Link to="/products?category=men">
                    Slippers
                  </Link>

                </div>


                <div className="mega-column highlight-column">

                  <h3>SHOP MEN</h3>

                  <Link to="/products?category=men">
                    All Men's Products
                  </Link>

                  <Link to="/products?category=men">
                    New Arrivals
                  </Link>

                  <Link to="/products?category=men">
                    Best Sellers
                  </Link>

                </div>

              </>
            )}


            {/* ================= WOMEN ================= */}

            {megaMenu === "women" && (
              <>

                <div className="mega-column">

                  <h3>TOPWEAR</h3>

                  <Link to="/products?category=women">
                    T-Shirts
                  </Link>

                  <Link to="/products?category=women">
                    Tops
                  </Link>

                  <Link to="/products?category=women">
                    Shirts
                  </Link>

                  <Link to="/products?category=women">
                    Hoodies
                  </Link>

                </div>


                <div className="mega-column">

                  <h3>BOTTOMWEAR</h3>

                  <Link to="/products?category=women">
                    Jeans
                  </Link>

                  <Link to="/products?category=women">
                    Joggers
                  </Link>

                  <Link to="/products?category=women">
                    Trousers
                  </Link>

                  <Link to="/products?category=women">
                    Shorts
                  </Link>

                </div>


                <div className="mega-column">

                  <h3>ETHNIC WEAR</h3>

                  <Link to="/products?category=women">
                    Kurtas
                  </Link>

                  <Link to="/products?category=women">
                    Dresses
                  </Link>

                  <Link to="/products?category=women">
                    Co-ords
                  </Link>

                </div>


                <div className="mega-column highlight-column">

                  <h3>SHOP WOMEN</h3>

                  <Link to="/products?category=women">
                    All Women's Products
                  </Link>

                  <Link to="/products?category=women">
                    New Arrivals
                  </Link>

                  <Link to="/products?category=women">
                    Best Sellers
                  </Link>

                </div>

              </>
            )}


            {/* ================= ACCESSORIES ================= */}

            {megaMenu === "accessories" && (
              <>

                <div className="mega-column">

                  <h3>ACCESSORIES</h3>

                  <Link to="/products?category=accessories">
                    Caps
                  </Link>

                  <Link to="/products?category=accessories">
                    Bags
                  </Link>

                  <Link to="/products?category=accessories">
                    Wallets
                  </Link>

                  <Link to="/products?category=accessories">
                    Belts
                  </Link>

                </div>


                <div className="mega-column">

                  <h3>COLLECTIONS</h3>

                  <Link to="/products?category=accessories">
                    Trending
                  </Link>

                  <Link to="/products?category=accessories">
                    New Arrivals
                  </Link>

                  <Link to="/products?category=accessories">
                    Best Sellers
                  </Link>

                </div>


                <div className="mega-column highlight-column">

                  <h3>SHOP ACCESSORIES</h3>

                  <Link to="/products?category=accessories">
                    All Accessories
                  </Link>

                </div>

              </>
            )}

          </div>

        </div>
      )}


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {menuOpen && (
        <nav className="mobile-menu">

          <Link
            to="/products?category=men"
            onClick={() => setMenuOpen(false)}
          >
            MEN
          </Link>

          <Link
            to="/products?category=women"
            onClick={() => setMenuOpen(false)}
          >
            WOMEN
          </Link>

          <Link
            to="/products?category=accessories"
            onClick={() => setMenuOpen(false)}
          >
            ACCESSORIES
          </Link>

          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
          >
            WISHLIST
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            CART
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;