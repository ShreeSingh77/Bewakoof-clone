import { Link } from "react-router-dom";
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { isInWishlist, addToWishlist } = useWishlist();

  // ================= TOTAL =================

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalMRP = cartItems.reduce(
    (total, item) =>
      total +
      (item.originalPrice || item.price) *
        item.quantity,
    0
  );

  const totalDiscount = totalMRP - totalPrice;

  // ================= EMPTY CART =================

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <div className="empty-cart-box">
          <h1>Your Bag is Empty</h1>

          <p>
            Looks like you haven't added anything
            to your bag yet.
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">

      <div className="cart-container">

        {/* ================= LEFT ================= */}

        <div className="cart-left">
<div className="cart-heading">

  <h1>My Bag</h1>

  <p className="cart-count">
    {cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )}{" "}
    Items
  </p>

  <div className="bag-secure">
    <span>🔒</span>
    <span>Secure Shopping</span>
  </div>

</div>


          {/* ================= CART ITEMS ================= */}

          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.cartId}
              >

                {/* Product Image */}

                <Link
                  to={`/product/${item.id}`}
                  className="cart-image-link"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </Link>


                {/* Product Info */}

                <div className="cart-item-info">

                  <div className="cart-item-top">

                    <div>

                      <h2>
                        {item.name}
                      </h2>

                      <p className="cart-brand">
                        {item.brand}
                      </p>

                    </div>

                    <button
                      className="remove-cart-item"
                      onClick={() =>
                        removeFromCart(
                          item.cartId
                        )
                      }
                      aria-label="Remove item"
                    >
                      <FiTrash2 />
                    </button>

                  </div>


                  {/* Colour */}

                  <p className="cart-variant">
                    Colour:{" "}
                    <strong>
                      {item.selectedColour}
                    </strong>
                  </p>


                  {/* Size */}

                  <p className="cart-variant">
                    Size:{" "}
                    <strong>
                      {item.selectedSize}
                    </strong>
                  </p>


                  {/* Price */}

                  <div className="cart-price-box">

                    <span className="cart-current-price">
                      ₹{item.price}
                    </span>

                    {item.originalPrice && (
                      <span className="cart-original-price">
                        ₹{item.originalPrice}
                      </span>
                    )}

                    {item.discount && (
                      <span className="cart-discount">
                        {item.discount}% OFF
                      </span>
                    )}

                  </div>


                  {/* Quantity */}

                  <div className="cart-bottom">

                    <div className="quantity-section">

                      <span>
                        Quantity
                      </span>

                      <div className="quantity-control">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.cartId
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          <FiMinus />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.cartId
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <FiPlus />
                        </button>

                      </div>

                    </div>


                    <button
  className="move-wishlist-btn"
  type="button"
  onClick={() => {
    if (!isInWishlist(item.id)) {
      addToWishlist(item);
    }

    removeFromCart(item.cartId);
  }}
>
  <FiHeart />
  MOVE TO WISHLIST
</button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Continue Shopping */}

          <Link
            to="/products"
            className="continue-shopping"
          >
            <span>← Continue Shopping</span>
            <FiChevronRight />
          </Link>

        </div>


        {/* ================= RIGHT SUMMARY ================= */}

        <aside className="cart-summary">

          <h2>
            Price Details
          </h2>


          <div className="summary-row">

            <span>
              Total MRP
            </span>

            <span>
              ₹{totalMRP}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Discount on MRP
            </span>

            <span className="summary-discount">
              - ₹{totalDiscount}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span className="free-delivery">
              FREE
            </span>

          </div>


          <div className="summary-divider" />


          <div className="summary-total">

            <span>
              Total Amount
            </span>

            <strong>
              ₹{totalPrice}
            </strong>

          </div>


          <Link to="/checkout" 
          className="checkout-btn">
            PROCEED TO CHECKOUT
          </Link>


          <div className="secure-checkout">

            🔒

            <div>
              <strong>
                Safe & Secure Payments
              </strong>

              <p>
                Your payment information is
                completely secure.
              </p>
            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Cart;