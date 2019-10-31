import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const CharacteristicsEntry = ({ characteristicName, characteristicValue }) => {
  const labels = {
    Size: {
      small: "Too small",
      mid: "Perfect",
      large: "Too big"
    },
    Width: {
      small: "Too narrow",
      mid: "Perfect",
      large: "Too wide"
    },
    Comfort: {
      small: "Uncomfortable",
      mid: "Ok",
      large: "Perfect"
    },
    Quality: {
      small: "Poor",
      mid: "Expected",
      large: "Perfect"
    },
    Length: {
      small: "Short",
      mid: "Perfect",
      large: "Long"
    },
    Fit: {
      small: "Tight",
      mid: "Perfect",
      large: "Long"
    }
  };

  const marks = [
    {
      value: 0,
      label: labels[characteristicName].small
    },
    {
      value: 33.3,
      label: ""
    },
    {
      value: 50,
      label: labels[characteristicName].mid
    },
    {
      value: 66.6,
      label: ""
    },
    {
      value: 100,
      label: labels[characteristicName].large
    }
  ];
  return (
    <div className="characteristic-entry">
      <span className={`characteristic-${characteristicName}`}>
        {characteristicName}
      </span>
      <Slider
        value={Number((characteristicValue.value / 5) * 100)}
        aria-labelledby="input-slider"
        className="characteristic-slider"
        marks={marks}
      />
    </div>
  );
};

export default CharacteristicsEntry;
