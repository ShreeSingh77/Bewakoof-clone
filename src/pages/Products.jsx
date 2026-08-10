import { Link, useSearchParams } from "react-router-dom";
import "./Products.css";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";


function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const categoryName =
    category === "men"
      ? "Men's Collection"
      : category === "women"
        ? "Women's Collection"
        : category === "accessories"
          ? "Accessories"
          : "All Products";

          const filteredProducts =
  category && ["men", "women"].includes(category)
    ? products.filter((product) => product.category === category)
    : products;
  return (
    <main>
      {/* Category Navigation */}
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

      {/* Products Content */}
      <section className="products-page">
        <p>EXPLORE OUR COLLECTION</p>

        <h1>{categoryName}</h1>

       <div className="products-grid">
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
      </section>
    </main>
  );
}

export default Products;