import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
    id: 1,
    title: "Men",
    subtitle: "Explore Men's Collection",
  },
  {
    id: 2,
    title: "Women",
    subtitle: "Explore Women's Collection",
  },
  {
    id: 3,
    title: "T-Shirts",
    subtitle: "Everyday Essentials",
  },
  {
    id: 4,
    title: "Hoodies",
    subtitle: "Comfort Meets Style",
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="section-heading">
        <p>EXPLORE COLLECTIONS</p>
        <h2>Shop By Category</h2>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to="/products"
            className="category-card"
            key={category.id}
          >
            <div className="category-content">
              <span>{category.subtitle}</span>
              <h3>{category.title}</h3>

              <span className="category-link">
                SHOP NOW →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;