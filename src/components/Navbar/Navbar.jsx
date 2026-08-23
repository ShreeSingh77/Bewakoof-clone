import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import products from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useCategory } from "../../context/CategoryContext";
import "./Navbar.css";

function Navbar() {
  const navigate=useNavigate();
  const[search ,setSearch ]=useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
const {wishlistItems } = useWishlist();
const {cartItems } = useCart();
const { categories } = useCategory();



const getCategoriesForMenu = (parent, section) => {
  return categories.filter(
    (category) =>
      category.parent === parent &&
      category.section === section
  );
};
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

        <form
  className="navbar-search"
  onSubmit={(e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);
  }}
>
  <FiSearch />

  <input
    type="text"
    placeholder="Search for products"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</form>


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

  {wishlistItems.length > 0 && (
    <span className="navbar-badge">
      {wishlistItems.length}
    </span>
  )}
</Link>


          <Link
  to="/cart"
  className="navbar-cart-link"
  aria-label="Cart"
>
  <FiShoppingBag />

  {cartItems.length > 0 && (
    <span className="navbar-badge">
      {cartItems.length}
    </span>
  )}
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

  {getCategoriesForMenu("men", "topwear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=men&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

</div>

<div className="mega-column">

  <h3>BOTTOMWEAR</h3>

  {getCategoriesForMenu("men", "bottomwear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=men&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

</div>
<div className="mega-column">

  <h3>FOOTWEAR</h3>

  {getCategoriesForMenu("men", "footwear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=men&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

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

  {getCategoriesForMenu("women", "topwear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=women&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

</div>

<div className="mega-column">

  <h3>BOTTOMWEAR</h3>

  {getCategoriesForMenu("women", "bottomwear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=women&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

</div>

<div className="mega-column">

  <h3>ETHNIC WEAR</h3>

  {getCategoriesForMenu("women", "ethnic-wear").map(
    (category) => {

      const slug = category.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return (
        <Link
          key={`${category.parent}-${category.section}-${category.name}`}
          to={`/products?category=women&subcategory=${slug}`}
        >
          {category.name}
        </Link>
      );
    }
  )}

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

  {getCategoriesForMenu(
    "accessories",
    "accessories"
  ).map((category) => {

    const slug = category.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    return (
      <Link
        key={`${category.parent}-${category.section}-${category.name}`}
        to={`/products?category=accessories&subcategory=${slug}`}
      >
        {category.name}
      </Link>
    );
  })}

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