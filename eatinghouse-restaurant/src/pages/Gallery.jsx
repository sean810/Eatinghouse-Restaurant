import React, { useState } from "react";
import GalleryModal from "../components/GalleryModal";

const images = [
  { src: "/images/gallery-1.jpg", caption: "Cozy dining area" },
  { src: "/images/gallery-2.jpg", caption: "Signature plate" },
  { src: "/images/gallery-3.jpg", caption: "Bar & drinks" },
  { src: "/images/gallery-4.jpg", caption: "Dessert" }
];

export default function Gallery(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="gallery container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button key={i} className="gallery-item" onClick={() => { setActive(img); setOpen(true); }}>
            <img src={img.src} alt={img.caption} loading="lazy" />
          </button>
        ))}
      </div>

      <GalleryModal open={open} src={active?.src} caption={active?.caption} onClose={() => setOpen(false)} />
    </section>
  );
}
