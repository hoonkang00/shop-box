import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Stars from "./StarRatings.jsx";
import CheckIcon from "@material-ui/icons/Check";
import Dialog from "@material-ui/core/Dialog";
import updateFunction from "../../actions/updateHelpfulness.js";
import report from "../../actions/reportReview.js";

const ReviewListEntry = ({ review }) => {
  const renderResponse = !["null", null, 0, ""].includes(review.response);
  const [reported, setReported] = useState(false);
  const [helpfulnessNum, setHelpfulnessNum] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHelpfulness = () => {
    updateFunction(review.review_id);
    review.helpfulness += 1;
    setHelpfulnessNum(review.helpfulness);
  };

  useEffect(() => {
    review.helpfulness;
  }, [helpfulnessNum]);

  const reportReview = () => {
    report(review.review_id);
    setReported(true);
  };

  const GetPhotos = () => {
    return review.photos.map(pic => {
      return (
        <div key={`pic ${pic.id}`}>
          <img
            src={pic.url}
            alt={pic.url}
            key={pic.id}
            onClick={handleOpen}
            className="review-image"
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            key={`modal ${pic.id}`}
          >
            <img src={pic.url} alt={pic.url} key={`modal-pic ${pic.id}`} />
          </Dialog>
        </div>
      );
    });
  };

  useEffect(() => {
    review.helpfulness;
  }, [review.helpfulness]);

  return (
    <div className="rowEntry">
      <Grid container>
        <Stars rating={review.rating} />
        <span>{`${review.reviewer_name}, ${review.date.substr(0, 10)}`}</span>
        <ListItem>
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
          <span onClick={updateHelpfulness}>Yes ({review.helpfulness})</span>
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
