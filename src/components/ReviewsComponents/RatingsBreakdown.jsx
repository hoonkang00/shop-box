import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { height } from "@material-ui/system";

export default function InputSlider(props) {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

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

  const GetBars = () => {
    const sliders = [];
    for (let slider = 5; slider >= 1; slider--) {
      let value = ratingSliderValues(slider);
      sliders.push(
        <div className="ratings-val-bar">
          <div className="ratingsValue">{`${slider} stars`}</div>
          <Grid item xs className="ratingsBar">
            <Slider
              value={value}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
        </div>
      );
    }
    return sliders;
  };

  return (
    <div>
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
