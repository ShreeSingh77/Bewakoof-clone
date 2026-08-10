import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import products from "../data/products";
import "./ProductDetails.css";
import {useWishlist} from "../context/WishlistContext.jsx";

function ProductDetails() {

  const { id } = useParams();


  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColour, setSelectedColour] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart } = useCart();
 const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  wishlistItems,
} = useWishlist();

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>
      </main>
    );
  }

  /* ===============================
     SELECTED COLOUR
  =============================== */

  const selectedColourData =
    product.colours?.[selectedColour];

  /* ===============================
     PRODUCT IMAGES

     New format:
     colour.images

     Old format:
     colour.image

     Fallback:
     product.images

     Final fallback:
     product.image
  =============================== */

  const images =
    selectedColourData?.images?.length
      ? selectedColourData.images
      : selectedColourData?.image
        ? [selectedColourData.image]
        : product.images?.length
          ? product.images
          : [product.image];

  /* ===============================
     SAFETY
  =============================== */

  const safeImageIndex =
    selectedImage < images.length
      ? selectedImage
      : 0;

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        {/* ================= IMAGE SECTION ================= */}

        <div className="product-gallery">

          {/* Thumbnails */}

          <div className="product-thumbnails">

            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  safeImageIndex === index
                    ? "active-thumbnail"
                    : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>


          {/* Main Image */}

          <div className="main-product-image">

            <img
              src={images[safeImageIndex]}
              alt={product.name}
            />


            {/* Left Arrow */}

            {safeImageIndex > 0 && (
              <button
                className="gallery-arrow gallery-left"
                onClick={() =>
                  setSelectedImage(
                    safeImageIndex - 1
                  )
                }
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
            )}


            {/* Right Arrow */}

            {safeImageIndex < images.length - 1 && (
              <button
                className="gallery-arrow gallery-right"
                onClick={() =>
                  setSelectedImage(
                    safeImageIndex + 1
                  )
                }
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            )}

          </div>

        </div>


        {/* ================= PRODUCT INFO ================= */}

        <div className="product-details-info">

          {/* Brand */}

          <p className="product-brand">
            {product.brand}
          </p>


          {/* Product Name */}

          <h1 className="product-details-title">
            {product.name}
          </h1>


          {/* Rating */}

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


          {/* Price */}

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


          {/* Material */}

          <div className="product-material">

            <span>Material</span>

            <strong>
              {product.material}
            </strong>

          </div>


          <div className="details-divider" />


          {/* ================= COLOUR ================= */}

          {product.colours?.length > 0 && (
            <div className="colour-section">

              <div className="section-heading">

                <h3>
                  Colour:

                  <span>
                    {selectedColourData?.name}
                  </span>
                </h3>

              </div>


              <div className="colour-options">

                {product.colours.map(
                  (colour, index) => {

                    const colourImage =
                      colour.images?.[0] ||
                      colour.image ||
                      product.image;

                    return (
                      <button
                        key={index}
                        className={`colour-option ${
                          selectedColour === index
                            ? "selected-colour"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedColour(index);
                          setSelectedImage(0);
                        }}
                      >

                        <img
                          src={colourImage}
                          alt={colour.name}
                        />

                      </button>
                    );
                  }
                )}

              </div>

            </div>
          )}


          {/* ================= SIZE ================= */}

          <div className="size-section">

            <div className="size-heading">

              <h3>
                Select Size
              </h3>

              <button className="size-guide">
                Size Guide
              </button>

            </div>


            <div className="size-options">

              {product.sizes?.map((size) => (
                <button
                  key={size}
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


          {/* ================= ACTIONS ================= */}

          <div className="details-actions">

            <button
  className="add-cart-btn"
  onClick={() =>
    addToCart(
      product,
      selectedSize,
      selectedColourData?.name
    )
  }
>
  <FiShoppingBag />
  ADD TO BAG
</button>


<button
  type="button"
  className={`details-wishlist-btn ${
    isInWishlist(product.id) ? "wishlist-active" : ""
  }`}
  onClick={() => {
    console.log("Before:", wishlistItems);

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }

    console.log("Clicked product:", product.id);
  }}
  aria-label="Add to wishlist"
>
  <FiHeart />
</button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;