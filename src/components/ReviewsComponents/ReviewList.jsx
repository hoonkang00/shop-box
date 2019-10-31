import React from "react";
import ReviewListEntry from "./ReviewListEntry.jsx";
import Divider from "@material-ui/core/Divider";

function Row(props) {
  return props.rows.map((data, index) => {
    return (
      <div className="review-list-entry" key={index}>
        <ReviewListEntry review={data} />
        <Divider className="review-divider" />
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
    <div className="Review-Rows" id="shopBox-reviews">
      {props !== undefined ? <Row rows={props} /> : ""}
    </div>
  );
};

export default ReviewList;
