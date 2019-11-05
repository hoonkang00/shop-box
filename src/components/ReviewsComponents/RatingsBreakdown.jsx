import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

export default function InputSlider(props) {
  const [clicked, setClick] = useState(false);
  const [ratingsDisplayed, setRatingsDisplayed] = useState({});

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
    if (ratingsDisplayed[event.target.id] === undefined) {
      setRatingsDisplayed({ ...ratingsDisplayed, [event.target.id]: true });
      if (clicked === false) {
        props.onClick([event.target.id, "REVIEWS", props.prodId.id]);
        setClick(true);
      } else if (clicked === true) {
        props.onClick([event.target.id, "UPDATE-REVIEWS", props.prodId.id]);
      }
    } else {
      delete ratingsDisplayed[event.target.id];
      setRatingsDisplayed({ ...ratingsDisplayed });
      props.onClick([
        Object.keys(ratingsDisplayed),
        "REMOVE-FILTERS",
        props.prodId.id
      ]);
      if (Object.keys(ratingsDisplayed).length <= 0) {
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
    return Object.keys(ratingsDisplayed).map(ratingNum => {
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
            &nbsp;
            {props.ratings.ratings ? (
              <div className="number-of-ratings">
                ({props.ratings.ratings[slider] || 0})
              </div>
            ) : (
              ""
            )}
          </Grid>
        </div>
      );
    }
    return sliders;
  };

  return (
    <div className="ratings-right-container">
      {Object.keys(ratingsDisplayed).length > 0 ? (
        <h6 className="clear" onClick={clearList}>
          Remove all filters
        </h6>
      ) : (
        ""
      )}
      <div className="filtered-ratings-container">
        <FilteredRatingSelectedNum />
      </div>
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
