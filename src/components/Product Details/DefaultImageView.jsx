import React, { useState } from "react";

export default ({ photos }) => {
  if (photos === undefined) {
    return <></>;
  }
  const [selectedIndex, updateSelectedIndex] = useState(0);
  const [firstIndex, updateFirstIndex] = useState(0);
  let mainPhoto = photos ? photos[selectedIndex].url : "";
  let displayedPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    if (i >= firstIndex && i < firstIndex + 5) {
      displayedPhotos.push([photos[i].url, i]);
    }
  }

  console.log(displayedPhotos);

  return (
    <div className="main-img" style={{ backgroundImage: `url(${mainPhoto})` }}>
      {displayedPhotos.map(([imgUrl, index]) => (
        <div
          className="list-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={() => updateSelectedIndex(index)}
        ></div>
      ))}
    </div>
  );
};
