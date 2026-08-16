import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";

import "./Products.css";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const subCategory = searchParams.get("subcategory") || "";
  const searchQuery = searchParams.get("search") || "";

  // =========================
  // FILTER STATES
  // =========================

  const [priceFilter, setPriceFilter] = useState("");
  const [discountFilter, setDiscountFilter] = useState("");

  const [sortBy, setSortBy] = useState("recommended");

  const [mobileFilterOpen, setMobileFilterOpen] =
    useState(false);

  // =========================
  // CATEGORY NAME
  // =========================

  const categoryName = useMemo(() => {
    if (subCategory) {
      return subCategory
        .split("-")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");
    }

    if (category === "men") {
      return "Men's Collection";
    }

    if (category === "women") {
      return "Women's Collection";
    }

    if (category === "accessories") {
      return "Accessories";
    }

    return "All Products";
  }, [category, subCategory]);

  // =========================
  // SUB-CATEGORIES
  // =========================

  const subCategories = useMemo(() => {
    let filtered = products;

    if (category) {
      filtered = products.filter(
        (product) =>
          product.category === category
      );
    }

    const uniqueCategories = [
      ...new Set(
        filtered
          .map((product) => product.subCategory)
          .filter(Boolean)
      ),
    ];

    return uniqueCategories;
  }, [category]);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = useMemo(() => {
    const query = searchQuery
      .toLowerCase()
      .trim();

    let result = products.filter((product) => {
      // Category
      const matchesCategory =
        !category ||
        product.category === category;

      // Sub category
      const matchesSubCategory =
        !subCategory ||
        product.subCategory === subCategory;

      // Search
      const matchesSearch =
        !query ||
        product.name
          ?.toLowerCase()
          .includes(query) ||
        product.brand
          ?.toLowerCase()
          .includes(query) ||
        product.category
          ?.toLowerCase()
          .includes(query) ||
        product.subCategory
          ?.toLowerCase()
          .includes(query) ||
        product.material
          ?.toLowerCase()
          .includes(query);

      // Price
      let matchesPrice = true;

      if (priceFilter === "under-500") {
        matchesPrice = product.price < 500;
      }

      if (priceFilter === "500-1000") {
        matchesPrice =
          product.price >= 500 &&
          product.price <= 1000;
      }

      if (priceFilter === "1000-1500") {
        matchesPrice =
          product.price > 1000 &&
          product.price <= 1500;
      }

      if (priceFilter === "above-1500") {
        matchesPrice = product.price > 1500;
      }

      // Discount
      let matchesDiscount = true;

      if (discountFilter === "10") {
        matchesDiscount = product.discount >= 10;
      }

      if (discountFilter === "30") {
        matchesDiscount = product.discount >= 30;
      }

      if (discountFilter === "50") {
        matchesDiscount = product.discount >= 50;
      }

      return (
        matchesCategory &&
        matchesSubCategory &&
        matchesSearch &&
        matchesPrice &&
        matchesDiscount
      );
    });

    // =========================
    // SORT
    // =========================

    if (sortBy === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "discount") {
      result.sort(
        (a, b) => b.discount - a.discount
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) =>
          (b.rating || 0) -
          (a.rating || 0)
      );
    }

    return result;
  }, [
    category,
    subCategory,
    searchQuery,
    priceFilter,
    discountFilter,
    sortBy,
  ]);

  // =========================
  // CHANGE CATEGORY
  // =========================

  const handleSubCategory = (value) => {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (value) {
      params.set("subcategory", value);
    }

    if (searchQuery) {
      params.set("search", searchQuery);
    }

    setSearchParams(params);
  };

  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {
    setPriceFilter("");
    setDiscountFilter("");
    setSortBy("recommended");

    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (searchQuery) {
      params.set("search", searchQuery);
    }

    setSearchParams(params);
  };

  // =========================
  // CATEGORY LINKS
  // =========================

  const categoryLinks = [
    {
      label: "MEN",
      value: "men",
    },
    {
      label: "WOMEN",
      value: "women",
    },
    {
      label: "ACCESSORIES",
      value: "accessories",
    },
  ];

  return (
    <main className="products-page-wrapper">

      {/* =====================================
          CATEGORY NAVIGATION
      ===================================== */}

      <nav className="products-category-nav">

        <div className="gender-tabs">

          {categoryLinks.map((item) => (
            <Link
              key={item.value}
              to={`/products?category=${item.value}`}
              className={
                category === item.value
                  ? "active"
                  : ""
              }
            >
              {item.label}
            </Link>
          ))}

        </div>

        <div className="category-scroll">

          {subCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                subCategory === item
                  ? "category-active"
                  : ""
              }
              onClick={() =>
                handleSubCategory(item)
              }
            >
              {item
                .split("-")
                .map(
                  (word) =>
                    word
                      .charAt(0)
                      .toUpperCase() +
                    word.slice(1)
                )
                .join(" ")}
            </button>
          ))}

        </div>

      </nav>

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <section className="products-header">

        <div>

          <p className="products-eyebrow">
            {searchQuery
              ? `SEARCH RESULTS FOR "${searchQuery}"`
              : "EXPLORE OUR COLLECTION"}
          </p>

          <h1>
            {searchQuery
              ? "Search Results"
              : categoryName}
          </h1>

          <span className="product-count">
            {filteredProducts.length} Products
          </span>

        </div>

      </section>

      {/* =====================================
          MOBILE FILTER BUTTON
      ===================================== */}

      <button
        type="button"
        className="mobile-filter-button"
        onClick={() =>
          setMobileFilterOpen(true)
        }
      >
        FILTERS
      </button>

      <div className="products-layout">

        {/* =====================================
            FILTER SIDEBAR
        ===================================== */}

        <aside
          className={`products-filter-sidebar ${
            mobileFilterOpen
              ? "mobile-filter-open"
              : ""
          }`}
        >

          <div className="filter-mobile-header">

            <h2>
              Filters
            </h2>

            <button
              type="button"
              onClick={() =>
                setMobileFilterOpen(false)
              }
            >
              ×
            </button>

          </div>

          <div className="filter-header">

            <h2>
              Filters
            </h2>

            <button
              type="button"
              onClick={clearFilters}
            >
              CLEAR ALL
            </button>

          </div>

          {/* CATEGORY */}

          <div className="filter-group">

            <h3>
              Category
            </h3>

            <label>
              <input
                type="radio"
                name="subcategory"
                checked={!subCategory}
                onChange={() =>
                  handleSubCategory("")
                }
              />

              <span>
                All
              </span>
            </label>

            {subCategories.map((item) => (
              <label key={item}>

                <input
                  type="radio"
                  name="subcategory"
                  checked={
                    subCategory === item
                  }
                  onChange={() =>
                    handleSubCategory(item)
                  }
                />

                <span>
                  {item
                    .split("-")
                    .map(
                      (word) =>
                        word
                          .charAt(0)
                          .toUpperCase() +
                        word.slice(1)
                    )
                    .join(" ")}
                </span>

              </label>
            ))}

          </div>

          {/* PRICE */}

          <div className="filter-group">

            <h3>
              Price
            </h3>

            <label>
              <input
                type="radio"
                name="price"
                checked={
                  priceFilter === "under-500"
                }
                onChange={() =>
                  setPriceFilter("under-500")
                }
              />

              <span>
                Under ₹500
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={
                  priceFilter === "500-1000"
                }
                onChange={() =>
                  setPriceFilter("500-1000")
                }
              />

              <span>
                ₹500 - ₹1000
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={
                  priceFilter === "1000-1500"
                }
                onChange={() =>
                  setPriceFilter("1000-1500")
                }
              />

              <span>
                ₹1000 - ₹1500
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={
                  priceFilter === "above-1500"
                }
                onChange={() =>
                  setPriceFilter("above-1500")
                }
              />

              <span>
                Above ₹1500
              </span>
            </label>

          </div>

          {/* DISCOUNT */}

          <div className="filter-group">

            <h3>
              Discount
            </h3>

            <label>
              <input
                type="radio"
                name="discount"
                checked={
                  discountFilter === "10"
                }
                onChange={() =>
                  setDiscountFilter("10")
                }
              />

              <span>
                10% and above
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="discount"
                checked={
                  discountFilter === "30"
                }
                onChange={() =>
                  setDiscountFilter("30")
                }
              />

              <span>
                30% and above
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="discount"
                checked={
                  discountFilter === "50"
                }
                onChange={() =>
                  setDiscountFilter("50")
                }
              />

              <span>
                50% and above
              </span>
            </label>

          </div>

          {/* MOBILE APPLY */}

          <button
            type="button"
            className="mobile-apply-filter"
            onClick={() =>
              setMobileFilterOpen(false)
            }
          >
            APPLY FILTERS
          </button>

        </aside>

        {/* =====================================
            PRODUCTS AREA
        ===================================== */}

        <section className="products-results">

          {/* SORT BAR */}

          <div className="products-toolbar">

            <span>
              {filteredProducts.length} Products
            </span>

            <div className="sort-wrapper">

              <label htmlFor="sort">
                Sort By
              </label>

              <select
                id="sort"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option value="recommended">
                  Recommended
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="discount">
                  Highest Discount
                </option>

                <option value="rating">
                  Customer Rating
                </option>
              </select>

            </div>

          </div>

          {/* PRODUCTS */}

          {filteredProducts.length > 0 ? (

            <div className="products-grid">

              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}

            </div>

          ) : (

            <div className="no-products">

              <h2>
                No products found
              </h2>

              <p>
                Try changing your filters or
                search for another product.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                CLEAR FILTERS
              </button>

            </div>

          )}

        </section>

      </div>

    </main>
  );
}

export default Products;