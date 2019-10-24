import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";
import ReviewListEntry from "./ReviewListEntry.jsx";

function Row(props) {
  const { index, data } = props;
  console.log(props);
  return (
    <div className="PAT">
      <ReviewListEntry review={data[index]} />
    </div>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

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
  console.log(props);
  return (
    <div className="Review-Rows">
      <FixedSizeList
        height={400}
        width={500}
        itemSize={175}
        itemCount={arr.length}
        itemData={arr}
        useIsScrolling
        className="rows"
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default ReviewList;
