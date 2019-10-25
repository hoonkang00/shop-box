import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function StarRatings({ rating }) {
  return (
    <div className="star-rating">
      <Rating
        name="half-rating"
        value={Number(rating)}
        precision={0.25}
        size="small"
      />
    </div>
  );
}
