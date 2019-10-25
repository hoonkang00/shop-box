import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { height } from "@material-ui/system";

export default function InputSlider(props) {
  const [value, setValue] = useState(0);
  const [clicked, setClick] = useState(false);
  const [clear, setClear] = useState(false);

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
    if (clicked === false) {
      props.onClick([event.target.id, "REVIEWS"]);
      setClick(true);
      setClear(true);
    } else if (clicked === true) {
      props.onClick([event.target.id, "UPDATE-REVIEWS"]);
    }
  };

  const clearList = () => {
    props.clear([1, "REVIEWS"]);
    setClick(false);
    setClear(false);
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
      {clear === true ? (
        <h6 className="clear" onClick={clearList}>
          clear filters
        </h6>
      ) : (
        ""
      )}
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
