import { Link, useSearchParams } from "react-router-dom";
import "./Products.css";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const subCategory = searchParams.get("subcategory");
  const searchQuery = searchParams.get("search") || "";

  const categoryName =
    subCategory
      ? subCategory
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : category === "men"
        ? "Men's Collection"
        : category === "women"
          ? "Women's Collection"
          : category === "accessories"
            ? "Accessories"
            : "All Products";

  const filteredProducts = products.filter((product) => {
    // Category filter
    const matchesCategory =
      !category || product.category === category;

    // Sub-category filter
    const matchesSubCategory =
      !subCategory || product.subCategory === subCategory;

    // Search filter
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !query ||
      product.name?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query) ||
      product.subCategory?.toLowerCase().includes(query) ||
      product.material?.toLowerCase().includes(query);

    return (
      matchesCategory &&
      matchesSubCategory &&
      matchesSearch
    );
  });

  return (
    <main>
      {/* ================= CATEGORY NAVIGATION ================= */}

      <nav className="products-category-nav">

        <div className="gender-tabs">

          <Link
            to="/products?category=men"
            className={category === "men" ? "active" : ""}
          >
            MEN
          </Link>

          <Link
            to="/products?category=women"
            className={category === "women" ? "active" : ""}
          >
            WOMEN
          </Link>

        </div>

        <div className="category-scroll">

          <Link to="/products?category=clearance">
            CLEARANCE
          </Link>

          <Link to="/products?category=accessories">
            ACCESSORIES
          </Link>

          <Link to="/products?category=customization">
            CUSTOMIZATION
          </Link>

          <Link to="/products?category=plus-size">
            PLUS SIZE
          </Link>

          <Link to="/products?category=party-animal">
            PARTY ANIMAL
          </Link>

          <Link to="/products?category=sneakers">
            SNEAKERS
          </Link>

          <Link to="/products?category=t-shirts">
            T-SHIRTS
          </Link>

          <Link to="/products?category=hoodies">
            HOODIES
          </Link>

        </div>

      </nav>

      {/* ================= PRODUCTS ================= */}

      <section className="products-page">

        <p>
          {searchQuery
            ? `SEARCH RESULTS FOR "${searchQuery}"`
            : "EXPLORE OUR COLLECTION"}
        </p>

        <h1>
          {searchQuery
            ? "Search Results"
            : categoryName}
        </h1>

        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="no-products">

            <h2>No products found</h2>

            <p>
              Try searching for another product, brand or category.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Products;