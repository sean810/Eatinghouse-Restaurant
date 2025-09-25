import React from "react";

export default function GalleryModal({ open, src, caption, onClose }) {
  if (!open) return null;
  return (
    <div className="lightbox open" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lightbox-close" aria-label="Close image" onClick={onClose}>×</button>
      <img className="lightbox-img" src={src} alt={caption} />
      {caption && <p className="lightbox-cap">{caption}</p>}
    </div>
  );
}
