import React from "react";
import Stars from "./StarRatings.jsx";

export default function Rating({ average }) {
  return (
    <div className="star-rating">
      <h1 className="average-rating">{average}</h1>
      <Stars rating={average} />
    </div>
  );
}
