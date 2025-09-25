import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="container contact">
      <h2>Contact Us</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Visit / Contact</h3>
          <p className="muted">📍 Moi Avenue, Nairobi</p>
          <p className="muted">📞 <a href="tel:+254728359324">+254 728 359 324</a></p>
          <p className="muted">📧 <a href="mailto:info@tastebuds.co.ke">info@eatinghouse.co.ke</a></p>

          <p className="muted">Opening Hours:</p>
          <ul className="hours">
            <li>Mon–Fri: 10:00 — 22:00</li>
            <li>Sat: 10:00 — 23:00</li>
            <li>Sun: 10:00 — 20:00</li>
          </ul>

          <p style={{marginTop:12}}>
            <a className="btn ghost" href="https://wa.me/254728359324" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn" href="mailto:info@tastebuds.co.ke" style={{marginLeft:8}}>Email</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Find us</h3>
          <div className="map">
            <iframe title="TasteBuds location" src="https://www.google.com/maps/embed?pb=!1m18!..."></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
