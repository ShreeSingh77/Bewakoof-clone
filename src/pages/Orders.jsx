import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPackage,
  FiChevronRight,
  FiMapPin,
  FiXCircle,
  FiCheckCircle,
} from "react-icons/fi";

import products from "../data/products";
import "./Orders.css";

function Orders() {
  // ================= DEMO ORDERS =================

  const orders = [
    {
      id: "BWK10001",
      date: "09 Aug 2026",
      status: "Delivered",
      total: 1298,
      items: [
        {
          id: 5,
          name: "Women Printed T-Shirt",
          brand: "Bewakoof",
          price: 649,
          quantity: 2,
          size: "M",
          colour: "Black",
        },
      ],
    },

    {
      id: "BWK10002",
      date: "08 Aug 2026",
      status: "Processing",
      total: 799,
      items: [
        {
          id: 12,
          name: "Men Oversized Printed T-Shirt",
          brand: "Bewakoof",
          price: 799,
          quantity: 1,
          size: "L",
          colour: "White",
        },
      ],
    },
  ];

  // ================= STATES =================

  const [orderList, setOrderList] = useState(orders);

  const [expandedOrder, setExpandedOrder] =
    useState(null);

  const [trackingOrder, setTrackingOrder] =
    useState(null);

  // ================= EMPTY ORDERS =================

  if (orderList.length === 0) {
    return (
      <main className="orders-page empty-orders">
        <div className="empty-orders-box">

          <div className="empty-orders-icon">
            <FiPackage />
          </div>

          <h1>No Orders Yet</h1>

          <p>
            You haven't placed any orders yet.
            Start shopping and your orders will
            appear here.
          </p>

          <Link
            to="/products"
            className="orders-shopping-btn"
          >
            START SHOPPING
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="orders-page">

      {/* ================= HEADER ================= */}

      <div className="orders-header">
        <div>
          <h1>My Orders</h1>

          <p>
            {orderList.length}{" "}
            {orderList.length === 1
              ? "Order"
              : "Orders"}
          </p>
        </div>
      </div>


      {/* ================= ORDERS ================= */}

      <div className="orders-container">

        {orderList.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            {/* ================= ORDER HEADER ================= */}

            <div className="order-card-header">

              <div>
                <span>ORDER ID</span>

                <strong>
                  #{order.id}
                </strong>
              </div>


              <div>
                <span>ORDER DATE</span>

                <strong>
                  {order.date}
                </strong>
              </div>


              <div className="order-status-wrapper">

                <span>STATUS</span>

                <strong
                  className={`order-status ${order.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {order.status}
                </strong>

              </div>

            </div>


            {/* ================= PRODUCTS ================= */}

            <div className="order-products">

              {order.items.map((item) => {

                // Find actual product from products.js
                const actualProduct = products.find(
                  (product) =>
                    product.id === item.id
                );

                // Actual image from products.js
                const productImage =
                  actualProduct?.image || item.image;

                return (
                  <div
                    className="order-product"
                    key={item.id}
                  >

                    {/* PRODUCT IMAGE */}

                    <Link
                      to={`/product/${item.id}`}
                      className="order-product-image"
                    >
                      <img
                        src={productImage}
                        alt={item.name}
                      />
                    </Link>


                    {/* PRODUCT INFO */}

                    <div className="order-product-info">

                      <p className="order-product-brand">
                        {item.brand}
                      </p>

                      <h2>
                        {item.name}
                      </h2>

                      <p className="order-product-variant">
                        Colour:{" "}
                        <strong>
                          {item.colour}
                        </strong>
                      </p>

                      <p className="order-product-variant">
                        Size:{" "}
                        <strong>
                          {item.size}
                        </strong>
                      </p>

                      <p className="order-product-variant">
                        Quantity:{" "}
                        <strong>
                          {item.quantity}
                        </strong>
                      </p>

                      <div className="order-product-price">
                        ₹{item.price}
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* ================= FOOTER ================= */}

            <div className="order-card-footer">

              <div className="order-total">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{order.total}
                </strong>

              </div>


              <div className="order-actions">

                {/* ================= TRACK ORDER ================= */}

                <button
                  className="track-order-btn"
                  type="button"
                  onClick={() => {
                    setTrackingOrder(
                      trackingOrder === order.id
                        ? null
                        : order.id
                    );
                  }}
                >
                  <FiMapPin />

                  {trackingOrder === order.id
                    ? "HIDE TRACKING"
                    : "TRACK ORDER"}
                </button>


                {/* ================= CANCEL ================= */}

                {order.status !== "Delivered" &&
                  order.status !== "Cancelled" && (

                    <button
                      className="cancel-order-btn"
                      type="button"
                      onClick={() => {

                        const confirmCancel =
                          window.confirm(
                            "Are you sure you want to cancel this order?"
                          );

                        if (!confirmCancel) {
                          return;
                        }

                        setOrderList(
                          (prevOrders) =>
                            prevOrders.map(
                              (item) =>
                                item.id === order.id
                                  ? {
                                      ...item,
                                      status:
                                        "Cancelled",
                                    }
                                  : item
                            )
                        );

                        setTrackingOrder(null);

                        alert(
                          "Order cancelled successfully."
                        );
                      }}
                    >
                      <FiXCircle />

                      CANCEL
                    </button>
                  )}


                {/* ================= VIEW DETAILS ================= */}

                <button
                  className="view-order-btn"
                  type="button"
                  onClick={() => {
                    setExpandedOrder(
                      expandedOrder === order.id
                        ? null
                        : order.id
                    );
                  }}
                >
                  {expandedOrder === order.id
                    ? "HIDE DETAILS"
                    : "VIEW DETAILS"}

                  <FiChevronRight
                    className={
                      expandedOrder === order.id
                        ? "rotate-arrow"
                        : ""
                    }
                  />
                </button>

              </div>

            </div>


            {/* ================= DETAILS PANEL ================= */}

            {expandedOrder === order.id && (

              <div className="order-details">

                <h3>
                  Order Details
                </h3>

                <div className="order-details-grid">

                  <div className="order-detail-box">
                    <span>Order ID</span>
                    <strong>
                      #{order.id}
                    </strong>
                  </div>

                  <div className="order-detail-box">
                    <span>Order Date</span>
                    <strong>
                      {order.date}
                    </strong>
                  </div>

                  <div className="order-detail-box">
                    <span>Payment</span>
                    <strong>
                      Cash on Delivery
                    </strong>
                  </div>

                  <div className="order-detail-box">
                    <span>Delivery</span>
                    <strong>
                      FREE
                    </strong>
                  </div>

                  <div className="order-detail-box">
                    <span>Order Status</span>
                    <strong>
                      {order.status}
                    </strong>
                  </div>

                  <div className="order-detail-box">
                    <span>Total Amount</span>
                    <strong>
                      ₹{order.total}
                    </strong>
                  </div>

                </div>

              </div>
            )}


            {/* ================= TRACKING PANEL ================= */}

            {trackingOrder === order.id && (

              <div className="order-tracking-box">

                {/* ORDER PLACED */}

                <div className="tracking-step completed">

                  <FiCheckCircle />

                  <div>
                    <strong>
                      Order Placed
                    </strong>

                    <span>
                      Your order has been placed
                      successfully.
                    </span>
                  </div>

                </div>


                <div className="tracking-line" />


                {/* PROCESSING */}

                <div
                  className={
                    order.status === "Processing" ||
                    order.status === "Shipped" ||
                    order.status === "Delivered"
                      ? "tracking-step completed"
                      : "tracking-step"
                  }
                >

                  <FiPackage />

                  <div>
                    <strong>
                      Processing
                    </strong>

                    <span>
                      Your order is being prepared.
                    </span>
                  </div>

                </div>


                <div className="tracking-line" />


                {/* SHIPPED */}

                <div
                  className={
                    order.status === "Shipped" ||
                    order.status === "Delivered"
                      ? "tracking-step completed"
                      : "tracking-step"
                  }
                >

                  <FiMapPin />

                  <div>
                    <strong>
                      Shipped
                    </strong>

                    <span>
                      Your order is on the way.
                    </span>
                  </div>

                </div>


                <div className="tracking-line" />


                {/* DELIVERED */}

                <div
                  className={
                    order.status === "Delivered"
                      ? "tracking-step completed"
                      : "tracking-step"
                  }
                >

                  <FiCheckCircle />

                  <div>
                    <strong>
                      Delivered
                    </strong>

                    <span>
                      Your order has been delivered.
                    </span>
                  </div>

                </div>

              </div>
            )}

          </div>
        ))}

      </div>

    </main>
  );
}

export default Orders;