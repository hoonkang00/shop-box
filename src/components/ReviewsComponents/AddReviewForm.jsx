import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great"
};

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: "flex",
    alignItems: "center"
  }
});

export default function HoverRating() {
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState(0);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Overall Rating (mandatory)</Typography>
        <div>
          <Rating
            name="hover-side"
            value={value}
            precision={1}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            onClickCapture={() => {
              setValue(hover);
            }}
          />
          <Box ml={2}>{labels[value !== 0 ? value : hover]}</Box>
        </div>
      </Box>
    </div>
  );
}
