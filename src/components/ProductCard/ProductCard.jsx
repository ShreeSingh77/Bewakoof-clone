import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useWishlist } from "../../context/WishlistContext.jsx";

import "./ProductCard.css";

function ProductCard({ product }) {

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();


  const wishlistActive = isInWishlist(product.id);


  const handleWishlist = (e) => {

    // Product details page par navigation na ho
    e.preventDefault();
    e.stopPropagation();

    if (wishlistActive) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };


  return (
    <div className="product-card">

      {/* ================= IMAGE ================= */}

      <div className="product-image-wrapper">

        <Link to={`/product/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

        </Link>


        {/* ================= WISHLIST ================= */}

        <button
          className={`wishlist-button ${
            wishlistActive
              ? "wishlist-button-active"
              : ""
          }`}
          onClick={handleWishlist}
          aria-label={
            wishlistActive
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >

          <FiHeart />

        </button>


        {/* ================= DISCOUNT ================= */}

        <span className="discount-badge">
          {product.discount}% OFF
        </span>

      </div>


      {/* ================= PRODUCT INFO ================= */}

      <div className="product-info">

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>


        <p className="product-description">
          {product.description}
        </p>


        <div className="product-price">

          <span className="current-price">
            ₹{product.price}
          </span>

          <span className="original-price">
            ₹{product.originalPrice}
          </span>

          <span className="discount-text">
            {product.discount}% OFF
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;