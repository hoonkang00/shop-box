import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";

export default function HalfRating({ rating }) {
  let [average, setRatings] = useState(0);

  useEffect(() => {
    let ratingsValue = rating.ratings;
    let totalRatingsValue = 0;
    let totalRatings = 0;

    for (var p in ratingsValue) {
      totalRatingsValue += Number(p);
      totalRatings += Number(ratingsValue[p]);
    }
    let averageRating = totalRatingsValue / totalRatings;
    setRatings(averageRating);
  }, [rating]);

  return (
    <div>
      <h1>{average}</h1>
      <Rating name="half-rating" value={average} precision={0.25} />
    </div>
  );
}
