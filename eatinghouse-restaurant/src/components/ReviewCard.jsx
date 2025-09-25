import React from "react";

export default function ReviewCard({ avatar, text, name }) {
  return (
    <figure className="review">
      {avatar && <img className="avatar" src={avatar} alt={`Photo of ${name}`} loading="lazy" />}
      <blockquote>{text}</blockquote>
      <figcaption>— {name}</figcaption>
    </figure>
  );
}
