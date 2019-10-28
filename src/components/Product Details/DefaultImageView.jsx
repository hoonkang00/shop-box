import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(theme => ({
  root: {
    color: "rgba(0,0,0,.5)",
    margin: "0 auto"
  },
  arrowTop: {
    marginTop: "-5px",
    cursor: "pointer",
    zIndex: "51"
  },
  arrowBottom: {
    transform: "rotate(180deg)",
    marginTop: "-22px",
    cursor: "pointer",
    zIndex: "51"
  },
  arrowRight: {
    transform: "rotate(90deg)",
    position: "fixed",
    top: "49vh",
    right: "5vw",
    fontSize: "36px",
    color: "rgba(255,255,255,.7)",
    cursor: "pointer",
    zIndex: "51"
  },
  arrowLeft: {
    transform: "rotate(270deg)",
    position: "fixed",
    top: "49vh",
    left: "5vw",
    fontSize: "36px",
    color: "rgba(255,255,255,.7)",
    cursor: "pointer",
    zIndex: "51"
  }
}));

export default ({ photos }) => {
  if (photos === undefined) {
    return <></>;
  }
  const [selectedIndex, updateSelectedIndex] = useState(0);
  const [firstIndex, updateFirstIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const decrementFirstIndex = e => {
    updateFirstIndex(firstIndex - 1);
    e.stopPropagation();
  };
  const incrementFirstIndex = e => {
    updateFirstIndex(firstIndex + 1);
    e.stopPropagation();
  };

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
      {selectedIndex > 0 && (
        <ExpandLessIcon
          className={classes.arrowLeft}
          onClick={() => updateSelectedIndex(selectedIndex - 1)}
        />
      )}
      {selectedIndex < photos.length - 1 && (
        <ExpandLessIcon
          className={classes.arrowRight}
          onClick={() => updateSelectedIndex(selectedIndex + 1)}
        />
      )}
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
        {firstIndex > 0 && (
          <ExpandLessIcon
            className={classes.arrowTop}
            onClick={decrementFirstIndex}
          />
        )}
      </div>
      {displayedPhotos.map(([imgUrl, index]) => (
        <div
          key={index}
          className={
            index === selectedIndex ? "list-image selected-image" : "list-image"
          }
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={e => {
            updateSelectedIndex(index);
            e.stopPropagation();
          }}
        ></div>
      ))}
      <div className={classes.root}>
        {photos.length > firstIndex + 5 && (
          <ExpandLessIcon
            className={classes.arrowBottom}
            onClick={incrementFirstIndex}
          />
        )}
      </div>
    </div>
  );
};
