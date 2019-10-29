import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Stars from "./StarRatings.jsx";
import CheckIcon from "@material-ui/icons/Check";
import updateFunction from "../../actions/updateHelpfulness.js";
import report from "../../actions/reportReview.js";

const ReviewListEntry = ({ review }) => {
  const renderResponse = !["null", null, 0, ""].includes(review.response);
  const [helpful, setHelpful] = useState(review.helpfulness);
  const [reported, setReported] = useState(false);

  const updateHelpfulness = () => {
    updateFunction(review.review_id);
    setHelpful(helpful + 1);
  };

  const reportReview = () => {
    report(review.review_id);
    setReported(true);
  };

  const GetPhotos = () => {
    return review.photos.map(pic => {
      return (
        <img
          src={pic.url}
          alt={pic.url}
          key={pic.id}
          className="review-image"
        />
      );
    });
  };

  return (
    <div className="rowEntry">
      <Grid container>
        <Stars rating={review.rating} />
        <span>{`${review.reviewer_name}, ${review.date.substr(0, 10)}`}</span>
        <ListItem button>
          <ListItemText primary={review.summary} secondary={review.body} />
        </ListItem>
        {review.photos.length > 0 ? <GetPhotos /> : ""}
        {review.recommend === 1 ? (
          <span>
            <CheckIcon /> <span> I recommend this product</span>
          </span>
        ) : (
          ""
        )}
        <div className="helpful-report-container">
          <span>Helpful?</span>
          <span onClick={updateHelpfulness}>Yes ({helpful})</span>
          <span>|</span>
          {reported ? (
            <span style={{ color: "red" }}>Reported!</span>
          ) : (
            <span onClick={reportReview}>Report</span>
          )}
          {renderResponse ? (
            <ListItemText
              primary={"Response:"}
              secondary={review.response}
              className="response"
            />
          ) : (
            ""
          )}
        </div>
        <Divider />
      </Grid>
    </div>
  );
};

export default ReviewListEntry;
