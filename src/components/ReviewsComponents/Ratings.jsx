import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Stars from "./Stars.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";

export default function Reviews({ rating }) {
  let [average, setRatings] = useState(0);

  useEffect(() => {
    let ratingsValue = rating.ratings;
    let totalRatingsValue = 0;
    let totalRatings = 0;

    for (var p in ratingsValue) {
      totalRatingsValue += Number(p * ratingsValue[p]);
      totalRatings += Number(ratingsValue[p]);
    }
    let averageRating = totalRatingsValue / totalRatings || 0;
    setRatings(averageRating.toFixed(1));
  }, [rating]);

  return (
    <div>
      <Grid container spacing={4} className={"ratings"}>
        <Grid item>
          <Stars average={average} />
        </Grid>
        <Grid item>
          <RatingsBreakdown ratings={rating} />
        </Grid>
      </Grid>
    </div>
  );
}
