import React from "react";
import CharacteristicsEntry from "./CharacteristicsEntry.jsx";
import Grid from "@material-ui/core/Grid";

const Characteristics = ({ values }) => {
  const GetCharacteristicBars = () => {
    let results = [];
    for (let characteristic in values.characteristics) {
      results.push(
        <CharacteristicsEntry
          characteristicName={characteristic}
          characteristicValue={values.characteristics[characteristic]}
          key={characteristic}
        />
      );
    }
    return results;
  };
  return (
    <div className="list-of-characteristics">
      <GetCharacteristicBars />
    </div>
  );
};

export default Characteristics;
