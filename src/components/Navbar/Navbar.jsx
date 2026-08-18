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
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const navigate=useNavigate();
  const[search ,setSearch ]=useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
const {wishlistItems } = useWishlist();
const {cartItems } = useCart();
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

      {megaMenu && (
        <div className="mega-menu">

          <div className="mega-menu-container">


            {/* ================= MEN ================= */}

            {megaMenu === "men" && (
              <>

                <div className="mega-column">

                  <h3>TOPWEAR</h3>

                  <Link to="/products?category=men&subcategory=t-shirts">
  T-Shirts
</Link>

<Link to="/products?category=men&subcategory=oversized-t-shirts">
  Oversized T-Shirts
</Link>

<Link to="/products?category=men&subcategory=shirts">
  Shirts
</Link>

<Link to="/products?category=men&subcategory=hoodies">
  Hoodies
</Link>

<Link to="/products?category=men&subcategory=sweatshirts">
  Sweatshirts
</Link>

                </div>


                <div className="mega-column">

                  <h3>BOTTOMWEAR</h3>

                  <Link to="/products?category=men&subcategory=jeans">
  Jeans
</Link>

<Link to="/products?category=men&subcategory=joggers">
  Joggers
</Link>

<Link to="/products?category=men&subcategory=shorts">
  Shorts
</Link>

<Link to="/products?category=men&subcategory=trousers">
  Trousers
</Link>
                </div>


                <div className="mega-column">

                  <h3>FOOTWEAR</h3>

                 <Link to="/products?category=men&subcategory=sneakers">
  Sneakers
</Link>

<Link to="/products?category=men&subcategory=casual-shoes">
  Casual Shoes
</Link>

<Link to="/products?category=men&subcategory=slippers">
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

                  <Link to="/products?category=women&subcategory=t-shirts">
  T-Shirts
</Link>

<Link to="/products?category=women&subcategory=tops">
  Tops
</Link>

<Link to="/products?category=women&subcategory=shirts">
  Shirts
</Link>

<Link to="/products?category=women&subcategory=hoodies">
  Hoodies
</Link>

                </div>


                <div className="mega-column">

                  <h3>BOTTOMWEAR</h3>

                 <Link to="/products?category=women&subcategory=jeans">
  Jeans
</Link>

<Link to="/products?category=women&subcategory=joggers">
  Joggers
</Link>

<Link to="/products?category=women&subcategory=trousers">
  Trousers
</Link>

<Link to="/products?category=women&subcategory=shorts">
  Shorts
</Link>

                </div>


                <div className="mega-column">

                  <h3>ETHNIC WEAR</h3>

                 <Link to="/products?category=women&subcategory=kurtas">
  Kurtas
</Link>

<Link to="/products?category=women&subcategory=dresses">
  Dresses
</Link>

<Link to="/products?category=women&subcategory=co-ords">
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

                 <Link to="/products?category=accessories&subcategory=caps">
  Caps
</Link>

<Link to="/products?category=accessories&subcategory=bags">
  Bags
</Link>

<Link to="/products?category=accessories&subcategory=clogs">
  clogs
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