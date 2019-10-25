import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function HalfRating({ average }) {
  return (
    <div className="star-rating">
      <h1 className="average-rating">{average}</h1>
      <Rating
        name="half-rating"
        value={Number(average)}
        precision={0.25}
        size="small"
      />
    </div>
  );
}
