import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";
import ReviewListEntry from "./ReviewListEntry.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function Row(props) {
  const { index, data } = props;
  return (
    <div>
      <ReviewListEntry review={data[index]} />
    </div>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

const ReviewList = ({ props }) => {
  const arr = props === undefined ? [] : props;
  return (
    <div className="Review-Rows">
      <FixedSizeList
        height={400}
        width={500}
        itemSize={46}
        itemCount={arr.length}
        itemData={arr}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default ReviewList;
