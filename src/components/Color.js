import React from "react";
import StarRating from "./NeoStarRating";

export default function color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, background: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
}
