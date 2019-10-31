import React, { useState, useEffect } from "react";
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
let aspectRatio = 1;

export default ({ photos, styleId }) => {
  if (photos === undefined) {
    return <></>;
  }
  const [selectedIndex, updateSelectedIndex] = useState(0);
  const [firstIndex, updateFirstIndex] = useState(0);
  const [view, setView] = useState("DEFAULT");
  const [offsetX, setOffsetX] = useState("0px");
  const [offsetY, setOffsetY] = useState("0px");

  useEffect(() => {
    updateFirstIndex(0);
    updateSelectedIndex(0);
  }, [styleId]);

  const decrementFirstIndex = e => {
    updateFirstIndex(firstIndex - 1);
    e.stopPropagation();
  };
  const incrementFirstIndex = e => {
    updateFirstIndex(firstIndex + 1);
    e.stopPropagation();
  };

  const setAspectRatio = () => {
    if (photos) {
      let aspectImage = new Image();
      aspectImage.src = photos[selectedIndex].url;
      aspectImage.onload = () => {
        aspectRatio = aspectImage.naturalHeight / aspectImage.naturalWidth;
      };
    }
  };

  const incrementSelectedIndex = (e, photoList, index) => {
    updateSelectedIndex(selectedIndex + 1);
    e.stopPropagation();
  };

  const decrementSelectedIndex = e => {
    updateSelectedIndex(selectedIndex - 1);
    e.stopPropagation();
  };

  const escFunction = e => {
    if (e.key === "Escape") {
      if (view === "FULL") {
        setView("EXPANDED");
      } else if (view === "EXPANDED") {
        setView("DEFAULT");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, true);
  }, [view]);

  let mainPhoto =
    photos && photos[selectedIndex] ? photos[selectedIndex].url : "";
  let displayedPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    if (i >= firstIndex && i < firstIndex + 5) {
      displayedPhotos.push([photos[i].thumbnail_url, i]);
    }
  }
  const classes = useStyles();

  return view === "EXPANDED" ? (
    <div
      className="background-expanded-view"
      onClick={e => {
        setView("DEFAULT");
        e.stopPropagation();
      }}
    >
      {selectedIndex > 0 && (
        <ExpandLessIcon
          className={classes.arrowLeft}
          onClick={decrementSelectedIndex}
        />
      )}
      {selectedIndex < photos.length - 1 && (
        <ExpandLessIcon
          className={classes.arrowRight}
          onClick={incrementSelectedIndex}
        />
      )}
      <img
        className="image-expanded"
        src={mainPhoto}
        alt=""
        onClick={e => {
          setView("FULL");
          e.stopPropagation();
          setAspectRatio();
        }}
      ></img>
    </div>
  ) : view === "FULL" ? (
    <div className={"zoom-view-background"}>
      <div
        className={"zoom-view"}
        style={{
          backgroundImage: `url(${mainPhoto})`,
          "--x": offsetX,
          "--y": offsetY
        }}
        onMouseMove={e => {
          // proprietary solution... totally works?
          const viewPortRatio = window.innerHeight / window.innerWidth;
          const xPixels =
            aspectRatio > 1
              ? -e.screenX * aspectRatio + "px"
              : -e.screenX / aspectRatio + "px";
          const yPixels =
            aspectRatio > 1
              ? (-e.screenY / viewPortRatio) * aspectRatio * 1.7 + "px"
              : (-e.screenY / viewPortRatio) * aspectRatio * 1.2 + "px";
          setOffsetX(xPixels);
          setOffsetY(yPixels);
        }}
        onClick={e => {
          setView("EXPANDED");
          e.stopPropagation();
        }}
        tabIndex={0}
        onKeyDown={e => {
          e.keyCode === 27 && setView("EXPANDED");
        }}
      ></div>
    </div>
  ) : (
    <div
      className="main-img"
      style={{ backgroundImage: `url(${mainPhoto})` }}
      onClick={() => setView("EXPANDED")}
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
