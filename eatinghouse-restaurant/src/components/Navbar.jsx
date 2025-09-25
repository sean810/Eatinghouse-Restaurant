import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <div className="logo">EatingHouse</div>
        </div>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-links">
            <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/menu" className={({isActive}) => isActive ? "active" : ""}>Menu</NavLink></li>
            <li><NavLink to="/gallery" className={({isActive}) => isActive ? "active" : ""}>Gallery</NavLink></li>
            <li><NavLink to="/reservation" className={({isActive}) => isActive ? "active" : ""}>Reservation</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="actions">
          <a className="btn order-btn" href="/reservation">Reserve</a>
        </div>
      </div>
    </header>
  );
}
