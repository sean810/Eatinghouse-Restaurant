import React, { useEffect } from "react";

export default function Reservation(){
  useEffect(() => {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }, []);

  return (
    <section className="contact container">
      <h2>Reserve a Table</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <form name="reservation" method="POST" data-netlify="true" className="reserve-form">
            <input type="hidden" name="form-name" value="reservation" />
            <label htmlFor="r-name">Name</label>
            <input id="r-name" name="name" type="text" required placeholder="Your full name" />

            <label htmlFor="r-email">Email</label>
            <input id="r-email" name="email" type="email" required placeholder="you@example.com" />

            <label htmlFor="r-date">Date</label>
            <input id="r-date" name="date" type="date" required />

            <label htmlFor="r-time">Time</label>
            <input id="r-time" name="time" type="time" required />

            <label htmlFor="r-guests">Guests</label>
            <select id="r-guests" name="guests" required>
              <option>1</option>
              <option>2</option>
              <option selected>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <label htmlFor="r-note">Note</label>
            <textarea id="r-note" name="note" rows="3" placeholder="Allergies, requests..."></textarea>

            <div className="form-actions">
              <button className="btn" type="submit">Request Reservation</button>
              <button className="btn ghost" type="button" onClick={() => window.location.href = "tel:+254728359324"}>Call</button>
            </div>
          </form>
        </div>

        <div className="contact-card">
          <h3>Need quick help?</h3>
          <p className="muted">Call or WhatsApp us for fastest confirmation.</p>
          <p><a href="tel:+254728359324">+254 728 359 324</a></p>
          <p><a href="https://wa.me/254728359324" target="_blank" rel="noreferrer">WhatsApp us</a></p>

          <div className="map">
            <iframe title="TasteBuds location" src="https://www.google.com/maps/embed?pb=!1m18!..."></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
