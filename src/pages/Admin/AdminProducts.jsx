import { useVerification } from "../../context/VerificationContext";
import products from "../../data/products";

import "./AdminProducts.css";

function AdminProducts() {
  const {
    verifyProduct,
    unverifyProduct,
    isProductVerified,
  } = useVerification();

  const handleVerification = (productId) => {
    if (isProductVerified(productId)) {
      unverifyProduct(productId);
    } else {
      verifyProduct(productId);
    }
  };

  return (
    <main className="admin-products-page">

      {/* HEADER */}
      <div className="admin-products-header">
        <div>
          <p className="admin-eyebrow">
            ADMIN PANEL
          </p>

          <h1>
            Product Verification
          </h1>

          <p className="admin-subtitle">
            Verify products that should display the
            verified badge on the customer UI.
          </p>
        </div>

        <div className="admin-product-count">
          {products.length} Products
        </div>
      </div>


      {/* PRODUCTS TABLE */}
      <section className="admin-products-section">

        <div className="admin-products-table">

          {/* TABLE HEADER */}
          <div className="admin-table-row admin-table-header">

            <span>Product</span>

            <span>Category</span>

            <span>Price</span>

            <span>Status</span>

            <span>Action</span>

          </div>


          {/* PRODUCTS */}
          {products.map((product) => {

            const verified =
              isProductVerified(product.id);

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


                {/* PRICE */}
                <span className="admin-product-price">
                  ₹{product.price}
                </span>


                {/* STATUS */}
                <span
                  className={`admin-verification-status ${
                    verified
                      ? "verified"
                      : "not-verified"
                  }`}
                >
                  {verified
                    ? "✓ Verified"
                    : "Not Verified"}
                </span>


                {/* ACTION */}
                <button
                  type="button"
                  className={`admin-verify-button ${
                    verified
                      ? "verified-button"
                      : ""
                  }`}
                  onClick={() =>
                    handleVerification(product.id)
                  }
                  aria-label={
                    verified
                      ? "Unverify product"
                      : "Verify product"
                  }
                >
                  {verified ? "✓" : "✓"}
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