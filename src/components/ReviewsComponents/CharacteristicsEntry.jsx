import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const CharacteristicsEntry = ({ characteristicName, characteristicValue }) => {
  return (
    <div>
      <Grid item xs className={`characteristic-${characteristicName}`}>
        <span className={"characteristic"}>{characteristicName}</span>
        <Slider
          value={Number(characteristicValue)}
          aria-labelledby="input-slider"
        />
      </Grid>
    </div>
  );
};

export default CharacteristicsEntry;
