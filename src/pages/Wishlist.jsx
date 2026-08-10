import { Link } from "react-router-dom";

import {
  FiTrash2,
  FiShoppingBag,
  FiHeart,
} from "react-icons/fi";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "./Wishlist.css";


function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();


  const {
    addToCart,
  } = useCart();


  // ================= ADD TO BAG =================

  const handleAddToBag = (product) => {

    // First available size
    const defaultSize =
      product.sizes?.[0] || "M";


    // First available colour
    const defaultColour =
      product.colours?.[0]?.name || "Default";


    addToCart(
      product,
      defaultSize,
      defaultColour
    );

  };


  // ================= EMPTY WISHLIST =================

  if (wishlistItems.length === 0) {

    return (
      <main className="wishlist-page empty-wishlist">

        <div className="empty-wishlist-box">

          <div className="empty-wishlist-icon">
            <FiHeart />
          </div>

          <h1>
            Your Wishlist is Empty
          </h1>

          <p>
            Save your favourite products here
            and shop them whenever you want.
          </p>

          <Link
            to="/products"
            className="wishlist-shopping-btn"
          >
            CONTINUE SHOPPING
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="wishlist-page">

      {/* ================= HEADER ================= */}

      <div className="wishlist-header">

        <div>

          <h1>
            My Wishlist
          </h1>

          <p>
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1
              ? "Item"
              : "Items"}
          </p>

        </div>

      </div>


      {/* ================= PRODUCTS ================= */}

      <div className="wishlist-grid">

        {wishlistItems.map((item) => (

          <div
            className="wishlist-card"
            key={item.id}
          >

            {/* ================= IMAGE ================= */}

            <div className="wishlist-image-wrapper">

              <Link
                to={`/product/${item.id}`}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />

              </Link>


              <button
                className="wishlist-remove-btn"
                onClick={() =>
                  removeFromWishlist(item.id)
                }
                aria-label="Remove from wishlist"
              >
                <FiTrash2 />
              </button>

            </div>


            {/* ================= DETAILS ================= */}

            <div className="wishlist-info">

              <p className="wishlist-brand">
                {item.brand}
              </p>


              <h2>
                {item.name}
              </h2>


              <div className="wishlist-price">

                <strong>
                  ₹{item.price}
                </strong>

                {item.originalPrice && (
                  <del>
                    ₹{item.originalPrice}
                  </del>
                )}

                {item.discount && (
                  <span>
                    {item.discount}% OFF
                  </span>
                )}

              </div>


              {/* ================= ADD TO BAG ================= */}

              <button
                className="wishlist-add-btn"
                onClick={() =>
                  handleAddToBag(item)
                }
              >

                <FiShoppingBag />

                ADD TO BAG

              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}


export default Wishlist;