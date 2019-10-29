import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

export default function InputSlider(props) {
  const [clicked, setClick] = useState(false);
  const [ratingsDisplayed, setRatingsDisplayed] = useState([]);

  const ratingSliderValues = value => {
    let ratings = props.ratings.ratings;
    if (ratings !== undefined && ratings[value]) {
      let ratingValue = Number(ratings[value]) || 0;
      let totalRatings = 0;

      for (let ratingNum in ratings) {
        totalRatings += Number(ratings[ratingNum]);
      }
      let averageRating = (ratingValue / totalRatings) * 100 || 0;
      return averageRating.toFixed(0);
    }
    return 0;
  };

  const filterList = event => {
    if (!ratingsDisplayed.includes(event.target.id)) {
      setRatingsDisplayed([...ratingsDisplayed, event.target.id]);
      if (clicked === false) {
        props.onClick([event.target.id, "REVIEWS", props.prodId.id]);
        setClick(true);
      } else if (clicked === true) {
        props.onClick([event.target.id, "UPDATE-REVIEWS", props.prodId.id]);
      }
    } else {
      let temp = [...ratingsDisplayed];
      temp.splice(temp.indexOf(event.target.id), 1);
      setRatingsDisplayed(temp);
      props.onClick([ratingsDisplayed, "REMOVE-FILTERS", props.prodId.id]);
      if (ratingsDisplayed.length === 0) {
        props.clear([1, "REVIEWS", props.prodId.id]);
      }
    }
  };

  const clearList = () => {
    props.clear([1, "REVIEWS", props.prodId.id]);
    setClick(false);
    setRatingsDisplayed([]);
  };

  const FilteredRatingSelectedNum = () => {
    return ratingsDisplayed.map(ratingNum => {
      return (
        <span
          key={ratingNum}
          className="filtered-ratings-num"
        >{`${ratingNum} stars`}</span>
      );
    });
  };

  const GetBars = () => {
    const sliders = [];
    for (let slider = 5; slider >= 1; slider--) {
      let value = ratingSliderValues(slider);
      sliders.push(
        <div className="ratings-val-bar" key={slider}>
          <div
            key={slider}
            id={slider}
            className="ratingsValue"
            onClick={filterList}
          >{`${slider} stars`}</div>
          <Grid item xs className="ratingsBar">
            <Slider value={Number(value)} aria-labelledby="input-slider" />
          </Grid>
        </div>
      );
    }
    return sliders;
  };

  return (
    <div>
      {ratingsDisplayed.length > 0 ? (
        <h6 className="clear" onClick={clearList}>
          Remove all filters
        </h6>
      ) : (
        ""
      )}
      <FilteredRatingSelectedNum />
      <Grid
        container
        spacing={2}
        alignItems="center"
        className="list-of-ratings"
      >
        <GetBars />
      </Grid>
    </div>
  );
}
