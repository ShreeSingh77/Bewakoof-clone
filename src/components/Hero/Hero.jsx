import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          NEW SEASON • NEW STYLE
        </p>

        <h1>
          Style
          <span>That Moves</span>
          <span>With You.</span>
        </h1>

        <p className="hero-description">
          Discover everyday fashion designed for comfort,
          confidence and your own unique vibe.
        </p>

        <div className="hero-buttons">

          <Link
            to="/products?category=men"
            className="hero-btn hero-btn-primary"
          >
            SHOP MEN
          </Link>

          <Link
            to="/products?category=women"
            className="hero-btn hero-btn-secondary"
          >
            SHOP WOMEN
          </Link>

        </div>

      </div>


      <div className="hero-visual">

        <div className="hero-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
            alt="Fashion collection"
            className="hero-image"
          />

        </div>

        <div className="hero-badge">
          <span>NEW</span>
          <strong>DROP</strong>
          <small>2026</small>
        </div>

      </div>

    </section>
  );
}

export default Hero;