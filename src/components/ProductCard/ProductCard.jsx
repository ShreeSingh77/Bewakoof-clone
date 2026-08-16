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

  // =========================================
  // GET PRODUCT IMAGE
  // Priority:
  // 1. First colour image
  // 2. product.images[0]
  // 3. product.image
  // =========================================

  const productImage =
    product.colours?.[0]?.images?.[0] ||
    product.images?.[0] ||
    product.image ||
    "";

  // =========================================
  // WISHLIST
  // =========================================

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

      {/* =========================================
          IMAGE
      ========================================= */}

      <div className="product-image-wrapper">

        <Link
          to={`/product/${product.id}`}
          className="product-image-link"
        >
          {productImage ? (
            <img
              src={productImage}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
          ) : (
            <div className="product-image-placeholder">
              No Image
            </div>
          )}
        </Link>

        {/* Wishlist */}

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

        {/* Discount */}

        {product.discount > 0 && (
          <span className="discount-badge">
            {product.discount}% OFF
          </span>
        )}

      </div>

      {/* =========================================
          PRODUCT INFO
      ========================================= */}

      <div className="product-info">

        <p className="product-brand">
          {product.brand}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        {/* Rating */}

        {product.rating && (
          <div className="product-rating">
            ★ {product.rating}
            <span>
              ({product.reviews || 0})
            </span>
          </div>
        )}

        {/* Price */}

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