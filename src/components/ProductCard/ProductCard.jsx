import { FiHeart, FiStar } from "react-icons/fi";
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
    e.preventDefault();
    e.stopPropagation();

    if (wishlistActive) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <article className="product-card">

      {/* ================= IMAGE ================= */}

      <div className="product-image-wrapper">

        <Link
          to={`/product/${product.id}`}
          className="product-image-link"
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

        {/* WISHLIST */}

        <button
          type="button"
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

        {/* DISCOUNT */}

        {product.discount > 0 && (
          <span className="discount-badge">
            {product.discount}% OFF
          </span>
        )}

      </div>

      {/* ================= INFO ================= */}

      <div className="product-info">

        {/* BRAND */}

        <p className="product-brand">
          {product.brand || "Bewakoof"}
        </p>

        {/* PRODUCT NAME */}

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        {/* DESCRIPTION */}

        {product.description && (
          <p className="product-description">
            {product.description}
          </p>
        )}

        {/* RATING */}

        {(product.rating || product.reviews) && (
          <div className="product-rating">

            <span className="rating-value">
              {product.rating || "4.5"}
            </span>

            <FiStar className="rating-star" />

            {product.reviews && (
              <span className="rating-reviews">
                ({product.reviews})
              </span>
            )}

          </div>
        )}

        {/* PRICE */}

        <div className="product-price">

          <span className="current-price">
            ₹{product.price}
          </span>

          {product.originalPrice && (
            <span className="original-price">
              ₹{product.originalPrice}
            </span>
          )}

          {product.discount > 0 && (
            <span className="discount-text">
              {product.discount}% OFF
            </span>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProductCard;