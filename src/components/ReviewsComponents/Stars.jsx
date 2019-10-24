import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function HalfRating({ average }) {
  return (
    <div>
      <h1>{average}</h1>
      <Rating name="half-rating" value={Number(average)} precision={0.25} />
    </div>
  );
}
