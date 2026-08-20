import { useProductStatus } from "../../context/ProductStatusContext";
import products from "../../data/products";

import "./AdminProducts.css";

function AdminProducts() {
  const {
    toggleProductStatus,
    isProductStatusActive,
  } = useProductStatus();

  const handleToggle = (productId, status) => {
    toggleProductStatus(productId, status);
  };

  return (
    <main className="admin-products-page">

      {/* ================= HEADER ================= */}

      <div className="admin-products-header">

        <div>
          <p className="admin-eyebrow">
            ADMIN PANEL
          </p>

          <h1>
            Product Management
          </h1>

          <p className="admin-subtitle">
            Select products for Trending, New Arrival
            and Best Seller sections.
          </p>
        </div>

        <div className="admin-product-count">
          {products.length} Products
        </div>

      </div>


      {/* ================= PRODUCTS ================= */}

      <section className="admin-products-section">

        <div className="admin-products-table">

          {/* HEADER */}

          <div className="admin-table-row admin-table-header">

            <span>
              Product
            </span>

            <span>
              Category
            </span>

            <span>
              Trending
            </span>

            <span>
              New Arrival
            </span>

            <span>
              Best Seller
            </span>

          </div>


          {/* PRODUCT LIST */}

          {products.map((product) => {

            const trending =
              isProductStatusActive(
                product.id,
                "trending"
              );

            const newArrival =
              isProductStatusActive(
                product.id,
                "newArrival"
              );

            const bestSeller =
              isProductStatusActive(
                product.id,
                "bestSeller"
              );

            return (
              <div
                className="admin-table-row"
                key={product.id}
              >

                {/* PRODUCT */}

                <div className="admin-product-info">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="admin-product-image"
                  />

                  <div>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.brand || "Bewakoof"}
                    </p>

                  </div>

                </div>


                {/* CATEGORY */}

                <span className="admin-product-category">
                  {product.category}
                </span>


                {/* TRENDING */}

                <button
                  type="button"
                  className={`admin-status-button ${
                    trending
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleToggle(
                      product.id,
                      "trending"
                    )
                  }
                >
                  {trending ? "✓" : ""}
                </button>


                {/* NEW ARRIVAL */}

                <button
                  type="button"
                  className={`admin-status-button ${
                    newArrival
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleToggle(
                      product.id,
                      "newArrival"
                    )
                  }
                >
                  {newArrival ? "✓" : ""}
                </button>


                {/* BEST SELLER */}

                <button
                  type="button"
                  className={`admin-status-button ${
                    bestSeller
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleToggle(
                      product.id,
                      "bestSeller"
                    )
                  }
                >
                  {bestSeller ? "✓" : ""}
                </button>

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}

export default AdminProducts;