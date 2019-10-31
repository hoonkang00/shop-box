import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Stars from "./Stars.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import Characteristics from "./Characteristics.jsx";

export default function Reviews({ rating, handleClick, clear, prodInfo }) {
  const [average, setRatings] = useState(0);
  const [recommend, setRecommend] = useState(0);

  useEffect(() => {
    let ratingsValue = rating.ratings;
    let totalRatingsValue = 0;
    let totalRatings = 0;

    for (let p in ratingsValue) {
      totalRatingsValue += Number(p * ratingsValue[p]);
      totalRatings += Number(ratingsValue[p]);
    }
    let averageRating = totalRatingsValue / totalRatings || 0;
    setRatings(averageRating.toFixed(1));

    if (rating.recommended !== undefined) {
      if (rating.recommended[1] !== undefined) {
        let recommended = rating.recommended;
        let totalRecommendedValue = 0;

        for (let recommendedValue in recommended) {
          totalRecommendedValue += Number(recommended[recommendedValue]);
        }
        let averageRecommneded = (recommended[1] / totalRecommendedValue) * 100;
        setRecommend(averageRecommneded.toFixed(0));
      }
    }
  }, [rating]);

  return (
    <div>
      <Grid container spacing={4} className={"ratings"}>
        <Grid item className="stars">
          <Stars average={average} />
        </Grid>
        <h5>{`${recommend}% of reviews recommend this product`}</h5>
        <Grid item>
          <RatingsBreakdown
            ratings={rating}
            onClick={handleClick}
            clear={clear}
            prodId={prodInfo}
          />
        </Grid>
        <Grid item className="characteristics-container">
          <Characteristics values={rating} />
        </Grid>
      </Grid>
    </div>
  );
}
