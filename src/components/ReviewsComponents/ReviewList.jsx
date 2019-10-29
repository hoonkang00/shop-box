import React from "react";
import PropTypes from "prop-types";
import { FixedSizeList } from "react-window";
import ReviewListEntry from "./ReviewListEntry.jsx";
import Grid from "@material-ui/core/Grid";

function Row(props) {
  return props.rows.map((data, index) => {
    return (
      <div className="review-list-entry" key={index}>
        <ReviewListEntry review={data} />
      </div>
    );
  });
}

/* TODO: ===Infinite Scroll Functionality====
function onScroll({ scrollDirection, scrollUpdateWasRequested }) {
  // scrollDirection is either "forward" or "backward".
  scrollDirection = true;

  // scrollOffset is a number.

  // scrollUpdateWasRequested is a boolean.
  // This value is true if the scroll was caused by scrollTo() or scrollToItem(),
  // And false if it was the result of a user interaction in the browser.
  scrollUpdateWasRequested = false;
}*/

const ReviewList = ({ props }) => {
  const arr = props === undefined ? [] : props;
  return (
    <div className="Review-Rows">
      <Grid container className="grid-reviews">
        {props !== undefined ? <Row rows={props} /> : ""}
      </Grid>
    </div>
  );
};

export default ReviewList;
