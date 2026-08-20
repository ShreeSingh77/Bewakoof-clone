import { useMemo } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";

import products from "../data/products";
import { useProductStatus } from "../context/ProductStatusContext";

import "./Home.css";

function Home() {
  const { isProductStatusActive } = useProductStatus();

  // =========================
  // TRENDING PRODUCTS
  // =========================

  const trendingProducts = useMemo(() => {
    return products.filter((product) =>
      isProductStatusActive(
        product.id,
        "trending"
      )
    );
  }, [isProductStatusActive]);

  // =========================
  // NEW ARRIVAL PRODUCTS
  // =========================

  const newArrivalProducts = useMemo(() => {
    return products.filter((product) =>
      isProductStatusActive(
        product.id,
        "newArrival"
      )
    );
  }, [isProductStatusActive]);


  // =========================
  // BEST SELLER PRODUCTS
  // =========================

  const bestSellerProducts = useMemo(() => {
    return products.filter((product) =>
      isProductStatusActive(
        product.id,
        "bestSeller"
      )
    );
  }, [isProductStatusActive]);

  return (
    <main className="home-page">

      {/* HERO */}
      <Hero />

      {/* =========================
          TRENDING PRODUCTS
      ========================= */}

      {trendingProducts.length > 0 && (
        <section className="home-product-section">

          <div className="home-section-header">

            <div>
              <p className="home-section-eyebrow">
                TRENDING NOW
              </p>

              <h2>
                Trending Products
              </h2>

              <Link
  to="/products"
  className="home-view-all"
>
  VIEW ALL →
</Link>
            </div>

            <span className="home-section-count">
              {trendingProducts.length} Products
            </span>

          </div>


          <div className="home-products-grid">

            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </section>
      )}

    {/* =========================
          NEW ARRIVALS
      ========================= */}

      {newArrivalProducts.length > 0 && (
        <section className="home-product-section">

          <div className="home-section-header">

            <div>
              <p className="home-section-eyebrow">
                JUST IN
              </p>

              <h2>
                New Arrivals
              </h2>
              <Link
  to="/products"
  className="home-view-all"
>
  VIEW ALL →
</Link>
            </div>

            <span className="home-section-count">
              {newArrivalProducts.length} Products
            </span>

          </div>


          <div className="home-products-grid">

            {newArrivalProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </section>
      )}


      {/* =========================
          BEST SELLERS
      ========================= */}

      {bestSellerProducts.length > 0 && (
        <section className="home-product-section">

          <div className="home-section-header">

            <div>
              <p className="home-section-eyebrow">
                CUSTOMER FAVOURITES
              </p>

              <h2>
                Best Sellers
              </h2>
              <Link
  to="/products"
  className="home-view-all"
>
  VIEW ALL →
</Link>
            </div>

            <span className="home-section-count">
              {bestSellerProducts.length} Products
            </span>

          </div>


          <div className="home-products-grid">

            {bestSellerProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </section>
      )}
    </main>
  );
}

export default Home;