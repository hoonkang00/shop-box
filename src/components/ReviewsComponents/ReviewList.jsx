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

const ReviewList = ({ props }) => {
  const arr = props === undefined ? [] : props;
  return (
    <div className="Review-Rows" id="shopBox-reviews">
      {props !== undefined ? <Row rows={props} /> : ""}
    </div>
  );
};

export default ReviewList;
