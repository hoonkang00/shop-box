import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(theme => ({
  root: {
    color: "rgba(0,0,0,.5)",
    margin: "0 auto"
  },
  arrowTop: {
    marginTop: "-5px"
  },
  arrowBottom: {
    transform: "rotate(180deg)",
    marginTop: "-22px"
  }
}));

export default ({ photos }) => {
  if (photos === undefined) {
    return <></>;
  }
  const [selectedIndex, updateSelectedIndex] = useState(0);
  const [firstIndex, updateFirstIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  let mainPhoto = photos ? photos[selectedIndex].url : "";
  let displayedPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    if (i >= firstIndex && i < firstIndex + 5) {
      displayedPhotos.push([photos[i].url, i]);
    }
  }
  const classes = useStyles();

  return expanded ? (
    <div className="background-expanded-view">
      <img
        className="image-expanded"
        src={mainPhoto}
        onClick={() => setExpanded(!expanded)}
      ></img>
    </div>
  ) : (
    <div
      className="main-img"
      style={{ backgroundImage: `url(${mainPhoto})` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={classes.root}>
        <ExpandLessIcon className={classes.arrowTop} />
      </div>
      {displayedPhotos.map(([imgUrl, index]) => (
        <div
          key={index}
          className="list-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={e => {
            updateSelectedIndex(index);
            e.stopPropagation();
          }}
        ></div>
      ))}
      <div className={classes.root}>
        <ExpandLessIcon className={classes.arrowBottom} />
      </div>
    </div>
  );
};
