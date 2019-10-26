import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const CharacteristicsEntry = ({ characteristicName, characteristicValue }) => {
  const marks = [
    {
      value: 0,
      label: characteristicName === "Size" ? "Too small" : "Poor"
    },
    {
      value: 50,
      label: characteristicName === "Size" ? "Perfect" : "Good"
    },
    {
      value: 100,
      label: characteristicName === "Size" ? "Too big" : "Great"
    }
  ];
  return (
    <div>
      <Grid item xs className={`characteristic-${characteristicName}`}>
        <span className={"characteristic"}>{characteristicName}</span>
        <Slider
          value={Number((characteristicValue.value / 5) * 100)}
          aria-labelledby="input-slider"
          className="char"
          marks={marks}
        />
      </Grid>
    </div>
  );
};

export default CharacteristicsEntry;
