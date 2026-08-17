import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiShield,
  FiCheck,
  FiEdit2,
  FiX,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems } = useCart();

  // =========================================
  // ADDRESS STATE
  // =========================================

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
  const [addressSaved, setAddressSaved] = useState(false);

  // =========================================
  // PAYMENT STATE
  // =========================================

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // =========================================
  // COUPON STATE
  // =========================================

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  // =========================================
  // ORDER STATE
  // =========================================

  const [orderPlaced, setOrderPlaced] = useState(false);

  // =========================================
  // TOTALS
  // =========================================

  const totalMRP = cartItems.reduce(
    (total, item) =>
      total +
      (item.originalPrice || item.price) * item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const productDiscount = totalMRP - subtotal;

  const finalTotal = Math.max(
    0,
    subtotal - couponDiscount
  );

  // =========================================
  // ADDRESS HANDLERS
  // =========================================

  const handleAddressChange = (field, value) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));

    setAddressError("");
  };

  const validateAddress = () => {
    const {
      name,
      phone,
      address: fullAddress,
      city,
      state,
      pincode,
    } = address;

    if (
      !name.trim() ||
      !phone.trim() ||
      !fullAddress.trim() ||
      !city.trim() ||
      !state.trim() ||
      !pincode.trim()
    ) {
      setAddressError("Please fill all address details.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setAddressError(
        "Please enter a valid 10-digit phone number."
      );
      return false;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
      setAddressError(
        "Please enter a valid 6-digit pincode."
      );
      return false;
    }

    return true;
  };

  const handleSaveAddress = () => {
    if (!validateAddress()) {
      return;
    }

    setAddressSaved(true);
    setShowAddressForm(false);
    setAddressError("");
  };

  const handleEditAddress = () => {
    setShowAddressForm(true);
    setAddressError("");
  };

  // =========================================
  // COUPON
  // =========================================

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    setCouponError("");

    if (!code) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    // Frontend demo coupons

    if (code === "WELCOME10") {
      const discount = Math.round(subtotal * 0.1);

      setCouponDiscount(discount);
      setAppliedCoupon(code);

      return;
    }

    if (code === "SAVE200") {
      const discount = Math.min(200, subtotal);

      setCouponDiscount(discount);
      setAppliedCoupon(code);

      return;
    }

    setCouponDiscount(0);
    setAppliedCoupon("");

    setCouponError(
      "Invalid coupon code. Try WELCOME10 or SAVE200."
    );
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon("");
    setCouponCode("");
    setCouponDiscount(0);
    setCouponError("");
  };

  // =========================================
  // PLACE ORDER
  // =========================================

  const handlePlaceOrder = () => {
    if (!addressSaved) {
      setShowAddressForm(true);

      setAddressError(
        "Please add your delivery address before placing the order."
      );

      return;
    }

    if (!validateAddress()) {
      setShowAddressForm(true);
      return;
    }

    if (!paymentMethod) {
      return;
    }

    // Frontend-only order success
    setOrderPlaced(true);
  };

  // =========================================
  // EMPTY CART
  // =========================================

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

  // =========================================
  // ORDER SUCCESS
  // =========================================

  if (orderPlaced) {
    return (
      <main className="checkout-success-page">
        <div className="checkout-success-box">

          <div className="success-icon">
            <FiCheck />
          </div>

          <h1>
            Order Placed Successfully!
          </h1>

          <p>
            Thank you for shopping with Bewakoof.
            Your order has been placed successfully.
          </p>

          <div className="success-order-details">

            <div>
              <span>Payment</span>

              <strong>
                {paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : "Online Payment"}
              </strong>
            </div>

            <div>
              <span>Total Amount</span>

              <strong>
                ₹{finalTotal}
              </strong>
            </div>

          </div>

          <Link
            to="/orders"
            className="view-orders-btn"
          >
            VIEW MY ORDERS
          </Link>

          <Link
            to="/products"
            className="success-shopping-link"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  // =========================================
  // CHECKOUT PAGE
  // =========================================

  return (
    <main className="checkout-page">

      {/* HEADER */}

      <header className="checkout-header">

        <Link
          to="/"
          className="checkout-logo"
        >
          BEWAKOOF
        </Link>

        <div className="checkout-secure">
          <FiShield />

          <span>
            100% SECURE
          </span>
        </div>

      </header>

      {/* MAIN CONTAINER */}

      <div className="checkout-container">

        {/* =====================================
            LEFT SECTION
        ===================================== */}

       <section className="checkout-left">

          {/* =====================================
              ADDRESS
          ===================================== */}

          <div className="checkout-section">

            <div className="section-title-row">

              <div>

                <span className="step-number">
                  1
                </span>

                <div>
                  <h2>
                    Delivery Address
                  </h2>

                  <p>
                    Add your delivery details
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="change-btn"
                onClick={() => {
                  setShowAddressForm(true);
                  setAddressError("");
                }}
              >
                {addressSaved
                  ? "EDIT ADDRESS"
                  : "ADD NEW ADDRESS"}
              </button>

            </div>

            {/* SAVED ADDRESS */}

            {addressSaved ? (

              <div className="saved-address-box">

                <div className="saved-address-top">

                  <div className="saved-address-name">

                    <FiCheck />

                    <strong>
                      {address.name}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className="edit-address-btn"
                    onClick={handleEditAddress}
                  >
                    <FiEdit2 />
                    EDIT
                  </button>

                </div>

                <p>
                  {address.address}
                </p>

                <p>
                  {address.city},{" "}
                  {address.state} -{" "}
                  {address.pincode}
                </p>

                <p>
                  Phone:{" "}
                  <strong>
                    {address.phone}
                  </strong>
                </p>

              </div>

            ) : (

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
                    Please add your address to
                    continue with your order.
                  </p>

                  <button
                    type="button"
                    className="add-address-btn"
                    onClick={() => {
                      setShowAddressForm(true);
                      setAddressError("");
                    }}
                  >
                    ADD ADDRESS
                  </button>

                </div>

              </div>

            )}

            {/* ADDRESS FORM */}

            {showAddressForm && (

              <div className="address-form">

                <div className="address-form-header">

                  <div>

                    <h3>
                      {addressSaved
                        ? "Edit Delivery Address"
                        : "Add Delivery Address"}
                    </h3>

                    <p>
                      Enter your complete delivery
                      details.
                    </p>

                  </div>

                  <button
                    type="button"
                    className="close-address-btn"
                    onClick={() => {
                      setShowAddressForm(false);
                      setAddressError("");
                    }}
                  >
                    <FiX />
                  </button>

                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={address.name}
                  onChange={(e) =>
                    handleAddressChange(
                      "name",
                      e.target.value
                    )
                  }
                />

                <input
                  type="tel"
                  placeholder="10-digit Phone Number"
                  maxLength="10"
                  value={address.phone}
                  onChange={(e) =>
                    handleAddressChange(
                      "phone",
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />

                <textarea
                  placeholder="Full Address"
                  value={address.address}
                  onChange={(e) =>
                    handleAddressChange(
                      "address",
                      e.target.value
                    )
                  }
                />

                <div className="address-row">

                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) =>
                      handleAddressChange(
                        "city",
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"
                    placeholder="State"
                    value={address.state}
                    onChange={(e) =>
                      handleAddressChange(
                        "state",
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"
                    placeholder="6-digit Pincode"
                    maxLength="6"
                    value={address.pincode}
                    onChange={(e) =>
                      handleAddressChange(
                        "pincode",
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
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
                  onClick={handleSaveAddress}
                >
                  SAVE ADDRESS
                </button>

              </div>

            )}

          </div>

          {/* =====================================
              ORDER SUMMARY
          ===================================== */}

          <div className="checkout-section">

            <div className="section-heading">

              <div>

                <span className="step-number">
                  2
                </span>

                <div>

                  <h2>
                    Order Summary
                  </h2>

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
                          {item.selectedColour ||
                            "Default"}
                        </strong>
                      </span>

                      <span>
                        Size:{" "}
                        <strong>
                          {item.selectedSize ||
                            "Default"}
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

         {/* =========================================
              PAYMENT
          ========================================= */}

          

        </section>


        {/* =========================================
            RIGHT SUMMARY
        ========================================= */}

        <aside className="checkout-summary">

          <h2>
            Price Details
          </h2>

          {/* TOTAL MRP */}

          <div className="checkout-summary-row">

            <span>
              Total MRP
            </span>

            <span>
              ₹{totalMRP}
            </span>

          </div>


          {/* PRODUCT DISCOUNT */}

          <div className="checkout-summary-row">

            <span>
              Discount on MRP
            </span>

            <span className="checkout-discount">
              - ₹{productDiscount}
            </span>

          </div>


          {/* COUPON DISCOUNT */}

          {couponDiscount > 0 && (

            <div className="checkout-summary-row">

              <span>
                Coupon Discount
              </span>

              <span className="checkout-discount">
                - ₹{couponDiscount}
              </span>

            </div>

          )}


          {/* DELIVERY */}

          <div className="checkout-summary-row">

            <span>
              Delivery
            </span>

            <span className="checkout-free">
              FREE
            </span>

          </div>


          <div className="checkout-divider" />


          {/* FINAL TOTAL */}

          <div className="checkout-total">

            <span>
              Total Amount
            </span>

            <strong>
              ₹{finalTotal}
            </strong>

          </div>


          {/* =========================================
              COUPON
          ========================================= */}

          <div className="coupon-box">

            {appliedCoupon ? (

              <div className="applied-coupon">

                <div>

                  <FiCheck />

                  <span>
                    {appliedCoupon} applied
                  </span>

                </div>

                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                >
                  REMOVE
                </button>

              </div>

            ) : (

              <div className="coupon-input">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCouponError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleApplyCoupon();
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                >
                  APPLY
                </button>

              </div>

            )}


            {couponError && (

              <p className="coupon-error">
                {couponError}
              </p>

            )}


            {!appliedCoupon && !couponError && (

              <p className="coupon-hint">
                Try: WELCOME10 or SAVE200
              </p>

            )}

          </div>
           
           {/* =========================================
    PAYMENT METHOD
========================================= */}

<div className="checkout-payment">

  <div className="checkout-payment-title">

    <div className="payment-title-left">

      <span className="payment-step-number">
        3
      </span>

      <div>
        <h3>Payment Method</h3>

        <p>
          Select your preferred payment method
        </p>
      </div>

    </div>

  </div>


  <div className="checkout-payment-options">

    {/* CASH ON DELIVERY */}

    <label
      className={`checkout-payment-option ${
        paymentMethod === "cod"
          ? "payment-selected"
          : ""
      }`}
    >

      <input
        type="radio"
        name="payment"
        value="cod"
        checked={paymentMethod === "cod"}
        onChange={(e) =>
          setPaymentMethod(e.target.value)
        }
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


    {/* ONLINE PAYMENT */}

    <label
      className={`checkout-payment-option ${
        paymentMethod === "online"
          ? "payment-selected"
          : ""
      }`}
    >

      <input
        type="radio"
        name="payment"
        value="online"
        checked={paymentMethod === "online"}
        onChange={(e) =>
          setPaymentMethod(e.target.value)
        }
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

          {/* =========================================
              PLACE ORDER
          ========================================= */}

          <button
            type="button"
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>


          {/* SECURITY */}

          <div className="checkout-security">

            <FiShield />

            <div>

              <strong>
                Safe & Secure Checkout
              </strong>

              <p>
                Your payment information is protected and secure.
              </p>

            </div>

          </div>

        </aside>

      </div>

    </main>
    );
}

export default Checkout;