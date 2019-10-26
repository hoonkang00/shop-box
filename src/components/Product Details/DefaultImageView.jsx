import React, { useState } from "react";

export default ({ photos }) => {
  const [selectedIndex, updateSelectedIndex] = useState(0);

  let mainPhoto = photos ? photos[selectedIndex].url : "";

  return <img className="main-img" src={mainPhoto}></img>;
};
