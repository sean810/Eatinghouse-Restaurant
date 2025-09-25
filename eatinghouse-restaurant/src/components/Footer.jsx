import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Opening Hours</h4>
          <ul className="hours">
            <li>Mon–Fri: 10:00 — 22:00</li>
            <li>Sat: 10:00 — 23:00</li>
            <li>Sun: 10:00 — 20:00</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <form name="newsletter" data-netlify="true" method="POST">
            <input type="hidden" name="form-name" value="newsletter" />
            <div style={{display:"flex", gap:8}}>
              <input type="email" name="email" placeholder="Your email" required />
              <button className="small-btn" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div>
          <h4>Location</h4>
          <p className="muted">Moi Avenue, Nairobi</p>
          <p className="muted">© <span id="year"></span> EatingHouse</p>
        </div>
      </div>
    </footer>
  );
}
