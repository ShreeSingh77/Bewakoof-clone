
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiShield } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems } = useCart();

const [address, setAddress] = useState({
  name: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
});

const [showAddressForm, setShowAddressForm] = useState(false);
const [addressError, setAddressError] = useState("");

  // ================= TOTALS =================

  const totalMRP = cartItems.reduce(
    (total, item) =>
      total +
      (item.originalPrice || item.price) * item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalDiscount = totalMRP - totalPrice;

  // ================= EMPTY CART =================

  if (cartItems.length === 0) {
    return (
      <main className="checkout-empty">
        <h1>Your Bag is Empty</h1>

        <p>
          Add some products to continue with checkout.
        </p>

        <Link to="/products">
          CONTINUE SHOPPING
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout-page">

      {/* ================= HEADER ================= */}

      <div className="checkout-header">
        <Link to="/" className="checkout-logo">
          BEWAKOOF
        </Link>

        <div className="checkout-secure">
          <FiShield />
          <span>100% SECURE</span>
        </div>
      </div>


      {/* ================= MAIN ================= */}

      <div className="checkout-container">

        {/* ================= LEFT ================= */}

        <section className="checkout-left">

          {/* ADDRESS */}

          <div className="checkout-section">

            <div className="section-title-row">

              <div>
                <span className="step-number">1</span>

                <div>
                  <h2>Delivery Address</h2>
                  <p>
                    Add your delivery details
                  </p>
                </div>
              </div>

              <button
  type="button"
  className="change-btn"
  onClick={() => setShowAddressForm(true)}
>
  ADD NEW ADDRESS
</button>

            </div>


            <div className="address-box">

              <div className="address-radio">
                <input
                  type="radio"
                  name="address"
                  defaultChecked
                />
              </div>

              <div className="address-content">

                <div className="address-name">
                  <strong>
                    Add Delivery Address
                  </strong>
                </div>

                <p>
                  Please add your address to continue
                  with your order.
                </p>

                <button
  type="button"
  className="add-address-btn"
  onClick={() => setShowAddressForm(true)}
>
  ADD ADDRESS
</button>

              </div>

            </div>
          
          {showAddressForm && (
  <div className="address-form">

    <input
      type="text"
      placeholder="Full Name"
      value={address.name}
      onChange={(e) =>
        setAddress({
          ...address,
          name: e.target.value,
        })
      }
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={address.phone}
      onChange={(e) =>
        setAddress({
          ...address,
          phone: e.target.value,
        })
      }
    />

    <textarea
      placeholder="Full Address"
      value={address.address}
      onChange={(e) =>
        setAddress({
          ...address,
          address: e.target.value,
        })
      }
    />

    <div className="address-row">

      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) =>
          setAddress({
            ...address,
            city: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="State"
        value={address.state}
        onChange={(e) =>
          setAddress({
            ...address,
            state: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Pincode"
        value={address.pincode}
        onChange={(e) =>
          setAddress({
            ...address,
            pincode: e.target.value,
          })
        }
      />

    </div>

    {addressError && (
      <p className="address-error">
        {addressError}
      </p>
    )}

    <button
      type="button"
      className="save-address-btn"
      onClick={() => {

        if (
          !address.name ||
          !address.phone ||
          !address.address ||
          !address.city ||
          !address.state ||
          !address.pincode
        ) {
          setAddressError(
            "Please fill all address details."
          );
          return;
        }

        if (
          !/^[0-9]{10}$/.test(address.phone)
        ) {
          setAddressError(
            "Please enter a valid 10-digit phone number."
          );
          return;
        }

        if (
          !/^[0-9]{6}$/.test(address.pincode)
        ) {
          setAddressError(
            "Please enter a valid 6-digit pincode."
          );
          return;
        }

        setAddressError("");
        setShowAddressForm(false);

      }}
    >
      SAVE ADDRESS
    </button>

  </div>
)}


          </div>


          {/* ORDER ITEMS */}

          <div className="checkout-section">

            <div className="section-heading">

              <div>
                <span className="step-number">
                  2
                </span>

                <div>
                  <h2>Order Summary</h2>

                  <p>
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}{" "}
                    Items
                  </p>
                </div>
              </div>

              <FiChevronDown />

            </div>


            <div className="checkout-products">

              {cartItems.map((item) => (

                <div
                  className="checkout-product"
                  key={item.cartId}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="checkout-product-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.brand}
                    </p>

                    <div className="checkout-variants">

                      <span>
                        Colour:{" "}
                        <strong>
                          {item.selectedColour}
                        </strong>
                      </span>

                      <span>
                        Size:{" "}
                        <strong>
                          {item.selectedSize}
                        </strong>
                      </span>

                      <span>
                        Qty:{" "}
                        <strong>
                          {item.quantity}
                        </strong>
                      </span>

                    </div>

                    <div className="checkout-product-price">

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

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* PAYMENT */}

          <div className="checkout-section">

            <div className="section-heading">

              <div>
                <span className="step-number">
                  3
                </span>

                <div>
                  <h2>Payment Method</h2>

                  <p>
                    Select your preferred payment
                    method
                  </p>
                </div>
              </div>

            </div>


            <div className="payment-options">

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <div>
                  <strong>
                    Cash on Delivery
                  </strong>

                  <p>
                    Pay when your order is delivered
                  </p>
                </div>

              </label>


              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                />

                <div>
                  <strong>
                    Online Payment
                  </strong>

                  <p>
                    UPI, Debit Card, Credit Card
                  </p>
                </div>

              </label>

            </div>

          </div>

        </section>


        {/* ================= RIGHT ================= */}

        <aside className="checkout-summary">

          <h2>Price Details</h2>


          <div className="checkout-summary-row">

            <span>Total MRP</span>

            <span>
              ₹{totalMRP}
            </span>

          </div>


          <div className="checkout-summary-row">

            <span>Discount on MRP</span>

            <span className="checkout-discount">
              - ₹{totalDiscount}
            </span>

          </div>


          <div className="checkout-summary-row">

            <span>Delivery</span>

            <span className="checkout-free">
              FREE
            </span>

          </div>


          <div className="checkout-divider" />


          <div className="checkout-total">

            <span>Total Amount</span>

            <strong>
              ₹{totalPrice}
            </strong>

          </div>


          {/* COUPON */}

          <div className="coupon-box">

            <div className="coupon-input">

              <input
                type="text"
                placeholder="Enter coupon code"
              />

              <button>
                APPLY
              </button>

            </div>

          </div>


          {/* PLACE ORDER */}

          <button
  type="button"
  className="place-order-btn"
  onClick={() => {

    if (
      !address.name ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      setShowAddressForm(true);
      setAddressError(
        "Please add your delivery address before placing the order."
      );
      return;
    }

    alert("Order placed successfully!");
  }}
>
  PLACE ORDER
</button>


          <div className="checkout-security">

            <FiShield />

            <div>
              <strong>
                Safe & Secure Checkout
              </strong>

              <p>
                Your payment information is
                protected and secure.
              </p>
            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Checkout;