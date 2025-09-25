import React, { useMemo, useState } from "react";
import menuItems from "../data/menuData";
import MenuItemCard from "../components/MenuItemCard";

export default function MenuPage(){
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(()=>{
    return menuItems.filter(item => {
      const matchesFilter = filter === "all" ? true : item.category === filter;
      const matchesQ = q.trim() ? (item.name.toLowerCase().includes(q.toLowerCase()) || item.description.toLowerCase().includes(q.toLowerCase())) : true;
      return matchesFilter && matchesQ;
    });
  }, [filter, q]);

  function handleOrder(item){
    const wa = `https://wa.me/254700123456?text=${encodeURIComponent(`Hi, I'd like to order: ${item.name} (KSh ${item.price})`)}`;
    window.open(wa, "_blank");
  }

  return (
    <section className="menu container" id="menu-page">
      <h2>Our Menu</h2>

      <div className="menu-controls">
        <div className="filter-group">
          {["all","starters","mains","desserts","cocktails","drinks","kids"].map(f => (
            <button key={f} className={`filter-btn ${filter===f ? "active": ""}`} onClick={() => setFilter(f)}>{f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>

        <div className="search-group">
          <input placeholder="Search dishes..." value={q} onChange={(e)=>setQ(e.target.value)} />
        </div>
      </div>

      <div className="menu-grid" id="menuGrid">
        {filtered.map(item => <MenuItemCard key={item.id} item={item} onOrder={handleOrder} />)}
      </div>
    </section>
  );
}
