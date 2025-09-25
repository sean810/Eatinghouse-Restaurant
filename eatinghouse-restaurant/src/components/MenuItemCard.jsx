import React from "react";

export default function MenuItemCard({ item, onOrder }) {
  return (
    <article className="menu-item" data-category={item.category}>
      <img className="menu-photo" src={item.img} alt={item.name} loading="lazy" />
      <div className="menu-body">
        <h3>{item.name}</h3>
        <p className="muted">{item.description}</p>
        <div className="meta">
          <span className="price">KSh {item.price}</span>
          <button className="small-btn" onClick={() => onOrder(item)}>Order</button>
        </div>
      </div>
    </article>
  );
}
