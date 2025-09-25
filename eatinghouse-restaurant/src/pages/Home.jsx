import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

export default function Home(){
  useEffect(()=> {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }, []);

  const sampleReviews = [
    { avatar: "/images/avatar-1.jpg", text: "Incredible flavours and warm staff — a must-visit!", name: "Alice M."},
    { avatar: "/images/avatar-2.jpg", text: "Perfect place for date night. The ribeye was phenomenal.", name: "Brian K."},
    { avatar: "/images/avatar-3.jpg", text: "Loved the vibe and the cocktails — staff are great.", name: "Sam W."}
  ];

  return (
    <section id="home">
      <div className="hero">
        <div className="hero-slideshow" aria-hidden="true">
          <img className="slide active" src="/images/hero-1.jpg" alt="Dish" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <p className="eyebrow">EatingHouse — Downtown Nairobi</p>
          <h1>Authentic flavours, unforgettable nights</h1>
          <p className="lead">Fresh seasonal plates — handcrafted by our chef. Cozy ambience, curated playlists, great company.</p>
          <div className="hero-ctas">
            <Link className="btn" to="/menu">View Menu</Link>
            <Link className="btn ghost" to="/reservation">Reserve a Table</Link>
          </div>
          <div className="hours-badge">
            <strong>Open</strong>
            <span>Mon–Sun • 10:00 — 22:00</span>
          </div>
        </div>
      </div>

      <div className="container section featured-dishes">
        <h2>Featured dishes</h2>
        <div className="menu-grid">
          <article className="menu-item small">
            <img src="/images/menu-grilled-chicken.jpg" alt="Grilled chicken" />
            <div className="menu-body">
              <h3>Grilled Chicken</h3>
              <p className="muted">Herb-marinated with lemon jus.</p>
              <div className="meta"><span className="price">KSh 850</span></div>
            </div>
          </article>

          <article className="menu-item small">
            <img src="/images/menu-sushi-platter.jpg" alt="Sushi" />
            <div className="menu-body">
              <h3>Sushi Platter</h3>
              <p className="muted">Assorted nigiri & maki.</p>
              <div className="meta"><span className="price">KSh 1400</span></div>
            </div>
          </article>

          <article className="menu-item small">
            <img src="/images/menu-cocktail.jpg" alt="Cocktail" />
            <div className="menu-body">
              <h3>Signature Cocktail</h3>
              <p className="muted">House special with citrus & rum.</p>
              <div className="meta"><span className="price">KSh 600</span></div>
            </div>
          </article>
        </div>
      </div>

      <div className="container section reviews-section">
        <h2>Google rating</h2>
        <div className="google-rating">
          <div className="stars">★★★★☆</div>
          <div className="rating-meta">4.5 • 258 reviews</div>
        </div>

        <div className="reviews-cards">
          {sampleReviews.map((r,i) => <ReviewCard key={i} {...r} />)}
        </div>

        <div style={{textAlign:"center", marginTop: 12}}>
          <a className="btn ghost" href="https://www.google.com/maps" target="_blank" rel="noreferrer">See more reviews on Google</a>
        </div>
      </div>
    </section>
  );
}
