import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

import products from "../data/products";
import "./ProductDetails.css";

/* =====================================================
   GET COLOUR NAME
===================================================== */

const getColourName = (colour) => {
  if (!colour) return "";

  if (typeof colour === "string") {
    return colour;
  }

  return colour?.name || "";
};

/* =====================================================
   GET COLOUR IMAGES
===================================================== */

const getColourImages = (colour) => {
  if (!colour) return [];

  if (typeof colour === "string") {
    return [];
  }

  if (Array.isArray(colour.images)) {
    return colour.images.filter(Boolean);
  }

  return [];
};

/* =====================================================
   GET ALL PRODUCT IMAGES

   Priority:

   1. Selected colour images
   2. product.images
   3. product.image
===================================================== */

const getProductImages = (product, selectedColourIndex = 0) => {
  if (!product) return [];

  const selectedColour =
    product.colours?.[selectedColourIndex];

  const colourImages =
    getColourImages(selectedColour);

  if (colourImages.length > 0) {
    return colourImages;
  }

  if (Array.isArray(product.images)) {
    return product.images.filter(Boolean);
  }

  if (product.image) {
    return [product.image];
  }

  return [];
};

/* =====================================================
   GET PRODUCT COLOUR

   Automatically uses colours data.
===================================================== */

const getProductColour = (product, colourIndex = 0) => {
  if (!product) return "";

  const colour = product.colours?.[colourIndex];

  const colourName = getColourName(colour);

  if (colourName) {
    return colourName;
  }

  return "Other";
};

/* =====================================================
   SAFE IMAGE COMPONENT
===================================================== */

function ProductImage({
  src,
  alt,
  className = "",
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`image-not-found ${className}`}>
        No Image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

/* =====================================================
   PRODUCT DETAILS
===================================================== */

function ProductDetails() {
  const { id } = useParams();

  /* =====================================================
     FIND PRODUCT
  ===================================================== */

  const product = products.find(
    (item) => item.id === Number(id)
  );

  /* =====================================================
     STATES
  ===================================================== */

  const [selectedImage, setSelectedImage] = useState(0);

  const [selectedColourIndex, setSelectedColourIndex] =
    useState(0);

  const [selectedSize, setSelectedSize] = useState("");

  /* =====================================================
     CONTEXT
  ===================================================== */

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/products">
          Continue Shopping
        </Link>
      </main>
    );
  }

  /* =====================================================
     COLOURS
  ===================================================== */

  const hasColours =
    Array.isArray(product.colours) &&
    product.colours.length > 0;

  /* =====================================================
     CURRENT COLOUR
  ===================================================== */

  const currentColour = hasColours
    ? getProductColour(
        product,
        selectedColourIndex
      )
    : "";

  /* =====================================================
     CURRENT COLOUR IMAGES

     Whenever colour changes, gallery changes.
  ===================================================== */

  const images = useMemo(
    () =>
      getProductImages(
        product,
        selectedColourIndex
      ),
    [product, selectedColourIndex]
  );

  /* =====================================================
     RESET IMAGE WHEN COLOUR CHANGES
  ===================================================== */

  useEffect(() => {
    setSelectedImage(0);
  }, [selectedColourIndex, product.id]);

  /* =====================================================
     SAFE IMAGE INDEX
  ===================================================== */

  const safeImageIndex =
    images.length > 0 &&
    selectedImage < images.length
      ? selectedImage
      : 0;

  /* =====================================================
     COLOUR OPTIONS

     If colours are defined in the SAME product,
     they are handled here.

     No need to create separate product IDs
     for each colour.
  ===================================================== */

  const colourOptions = hasColours
    ? product.colours
    : [];

  /* =====================================================
     SIMILAR PRODUCTS
  ===================================================== */

  const similarProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category &&
        item.subCategory === product.subCategory
    )
    .slice(0, 4);

  /* =====================================================
     RECENTLY SEEN
  ===================================================== */

  const recentlySeenProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  /* =====================================================
     CHANGE COLOUR
  ===================================================== */

  const handleColourChange = (index) => {
    setSelectedColourIndex(index);
    setSelectedImage(0);
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const handlePreviousImage = () => {
    if (images.length <= 1) return;

    setSelectedImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const handleNextImage = () => {
    if (images.length <= 1) return;

    setSelectedImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  /* =====================================================
     ADD TO BAG
  ===================================================== */

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      currentColour
    );
  };

  /* =====================================================
     WISHLIST
  ===================================================== */

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main className="product-details-page">

      {/* =================================================
          PRODUCT TOP SECTION
      ================================================= */}

      <div className="product-details-container">

        {/* =================================================
            IMAGE GALLERY
        ================================================= */}

        <div className="product-gallery">

          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div className="product-thumbnails">

  {images.length > 0 ? (
    images.map((image, index) => (
      <button
        key={`${selectedColourIndex}-${index}-${image}`}
        type="button"
        className={`thumbnail ${
          selectedImage === index
            ? "active-thumbnail"
            : ""
        }`}
        onClick={() => setSelectedImage(index)}
      >
        <img
          src={image}
          alt={`${product.name} ${index + 1}`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </button>
    ))
  ) : (
    <div className="thumbnail-empty">
      No Image
    </div>
  )}

</div>

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <div className="main-product-image">

  {images.length > 0 && (
    <img
      src={images[selectedImage]}
      alt={product.name}
      className="main-product-img"
    />
  )}

  {images.length > 1 && (
    <>
      <button
        type="button"
        className="gallery-arrow gallery-left"
        onClick={() => {
          setSelectedImage((prev) =>
            prev === 0
              ? images.length - 1
              : prev - 1
          );
        }}
      >
        <FiChevronLeft />
      </button>

      <button
        type="button"
        className="gallery-arrow gallery-right"
        onClick={() => {
          setSelectedImage((prev) =>
            prev === images.length - 1
              ? 0
              : prev + 1
          );
        }}
      >
        <FiChevronRight />
      </button>
    </>
  )}

</div>

        </div>

        {/* =================================================
            PRODUCT INFORMATION
        ================================================= */}

        <div className="product-details-info">

          {/* BRAND */}

          <p className="product-brand">
            {product.brand}
          </p>

          {/* PRODUCT NAME */}

          <h1 className="product-details-title">
            {product.name}
          </h1>

          {/* RATING */}

          <div className="product-rating">

            <span className="rating-number">
              {product.rating}
            </span>

            <FiStar className="rating-star" />

            <span className="rating-divider">
              |
            </span>

            <span>
              {product.reviews} Reviews
            </span>

          </div>

          {/* PRICE */}

          <div className="details-price">

            <span className="details-current-price">
              ₹{product.price}
            </span>

            <span className="details-original-price">
              ₹{product.originalPrice}
            </span>

            <span className="details-discount">
              {product.discount}% OFF
            </span>

          </div>

          <p className="tax-text">
            Inclusive of all taxes
          </p>

          {/* MATERIAL */}

          <div className="product-material">

            <span>
              Material
            </span>

            <strong>
              {product.material || "Cotton"}
            </strong>

          </div>

          <div className="details-divider" />

          {/* =================================================
              COLOUR SECTION
          ================================================= */}

          {colourOptions.length > 0 && (
            <div className="colour-section">

              <div className="section-heading">

                <h3>
                  Colour:

                  <span className="selected-colour-name">
                    {currentColour}
                  </span>
                </h3>

              </div>

              <div className="colour-options">

  {product.colours?.map((colour, index) => {

    const colourName =
      typeof colour === "string"
        ? colour
        : colour?.name || "Colour";

    const colourImages =
      typeof colour === "object"
        ? colour.images || []
        : [];

    const previewImage = colourImages[0];

    return (
      <button
        key={`${colourName}-${index}`}
        type="button"
        className={`colour-option ${
          selectedColourIndex === index
            ? "selected-colour"
            : ""
        }`}
        onClick={() => handleColourChange(index)}
      >

        {previewImage ? (
          <img
            src={previewImage}
            alt={colourName}
          />
        ) : (
          <div className="colour-image-fallback">
            {colourName}
          </div>
        )}

        <span className="colour-name">
          {colourName}
        </span>

      </button>
    );
  })}

</div>

            </div>
          )}

          {/* =================================================
              SIZE
          ================================================= */}

          <div className="size-section">

            <div className="size-heading">

              <h3>
                Select Size
              </h3>

              <button
                type="button"
                className="size-guide"
              >
                Size Guide
              </button>

            </div>

            <div className="size-options">

              {product.sizes?.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={
                    selectedSize === size
                      ? "selected-size"
                      : ""
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="details-actions">

            <button
              type="button"
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              <FiShoppingBag />
              ADD TO BAG
            </button>

            <button
              type="button"
              className={`details-wishlist-btn ${
                isInWishlist(product.id)
                  ? "wishlist-active"
                  : ""
              }`}
              onClick={handleWishlist}
              aria-label="Add to wishlist"
            >
              <FiHeart />
            </button>

          </div>

        </div>

      </div>

      {/* =================================================
          PRODUCT DESCRIPTION
      ================================================= */}

      <section className="product-description-section">

        <div className="section-title">

          <h2>
            Product Details
          </h2>

        </div>

        <div className="product-description-content">

          <p>
            {product.description ||
              `Upgrade your everyday wardrobe with ${product.name}. Designed for comfort, style and effortless everyday wear.`}
          </p>

          <div className="product-highlights">

            <div>
              <span>
                Brand
              </span>

              <strong>
                {product.brand}
              </strong>
            </div>

            <div>
              <span>
                Material
              </span>

              <strong>
                {product.material ||
                  "Cotton"}
              </strong>
            </div>

            <div>
              <span>
                Fit
              </span>

              <strong>
                {product.fit ||
                  "Regular Fit"}
              </strong>
            </div>

            <div>
              <span>
                Occasion
              </span>

              <strong>
                {product.occasion ||
                  "Casual Wear"}
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          SIMILAR PRODUCTS
      ================================================= */}

      <section className="product-recommendation-section">

        <div className="section-title recommendation-heading">

          <h2>
            Similar Products
          </h2>

          <Link to="/products">
            VIEW ALL
          </Link>

        </div>

        <div className="recommendation-grid">

          {similarProducts.map((item) => {

            const itemImage =
              getProductImages(item, 0)[0];

            return (
              <Link
                to={`/product/${item.id}`}
                className="recommendation-card"
                key={item.id}
              >

                <div className="recommendation-image">

                  <ProductImage
                    src={itemImage}
                    alt={item.name}
                  />

                  <button
                    type="button"
                    className="recommendation-heart"
                    onClick={(e) =>
                      e.preventDefault()
                    }
                  >
                    <FiHeart />
                  </button>

                </div>

                <div className="recommendation-info">

                  <p>
                    {item.brand}
                  </p>

                  <h3>
                    {item.name}
                  </h3>

                  <div className="recommendation-price">

                    <strong>
                      ₹{item.price}
                    </strong>

                    <span>
                      ₹{item.originalPrice}
                    </span>

                    <em>
                      {item.discount}% OFF
                    </em>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* =================================

      TESTIMONIALS
   */}
<section

className="testimonials-section">

<div className="section-title">

<h2>

What Customers Say

</h2>

</div>

<div className="testimonials-grid">

<div className="testimonial-card">

<div className="testimonial-rating">

</div>

<p>

"Really comfortable and the quality is better than expected. Looks exactly like the pictures."

</p>

<strong>

Rahul

</strong>

<span>

Verified Customer

</span>

</div>

<div className="testimonial-card">

<div className="testimonial-rating">

</div>

<p>

"The fitting is perfect and the fabric feels really comfortable for everyday use."

</p>

<strong>

Priya

</strong>

<span>

Verified Customer

</span>

</div>
<div className="testimonial-card">

<div className="testimonial-rating">

</div>

<p>

"Good product at this price.

Delivery was also quick and packaging was neat."

</p>

<strong>

Ankit

</strong>

<span>

Verified Customer

</span>

</div>

</div>

</section>

</main>

);

}

export default ProductDetails;