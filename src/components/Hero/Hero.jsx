import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">NEW SEASON • NEW STYLE</p>

        <h1>
          Wear Your
          <span> Vibe</span>
        </h1>

        <p className="hero-description">
          Discover trendy styles made for everyday comfort and confidence.
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
        <div className="hero-circle"></div>

        <div className="hero-fashion-card">
          <span>STYLE</span>
          <strong>EVERY<br />DAY</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;