import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Stars from "./StarRatings.jsx";
import CheckIcon from "@material-ui/icons/Check";
import Dialog from "@material-ui/core/Dialog";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import updateFunction from "../../actions/updateHelpfulness.js";
import report from "../../actions/reportReview.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const ReviewListEntry = ({ review }) => {
  const renderResponse = !["null", null, 0, ""].includes(review.response);
  const [reported, setReported] = useState(false);
  const [helpfulnessNum, setHelpfulnessNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  console.log("testing");
  let d = new Date(review.date.substr(0, 10));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let day = d.getDate();

  const classes = useStyles();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <div className="stars-and-date">
          <Stars rating={review.rating} />
          <div>{`${review.reviewer_name},  ${month} ${day}, ${year}`}</div>
        </div>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          TransitionProps={{ unmountOnExit: true }}
          className="expanded-container"
        >
          <ExpansionPanelSummary
            expandIcon={
              review.body.length > 250 ? (
                <button className="toggle-collapse">Show More</button>
              ) : (
                ""
              )
            }
            className="expanded-view"
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className={classes.heading}
              id={`summary ${review.review_id}`}
            >
              {review.summary}
            </Typography>
            <Typography
              className={classes.secondaryHeading}
              id={`body ${review.review_id}`}
            >
              {review.body.substr(0, 250)}
            </Typography>
          </ExpansionPanelSummary>
          {review.body.length > 250 ? (
            <ExpansionPanelDetails>
              <Typography>{review.body}</Typography>
            </ExpansionPanelDetails>
          ) : (
            ""
          )}
        </ExpansionPanel>
        <div>
          {review.photos.length > 0 ? <GetPhotos /> : ""}
          {review.recommend === 1 ? (
            <div className="recommended">
              <CheckIcon className="recommended-check" />
              &nbsp;
              <span className="recommended-text">
                {" "}
                I recommend this product
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="response-container">
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
          <div className="helpful-report-container">
            <span>Helpful?</span>&nbsp;
            <span
              onClick={updateHelpfulness}
              className="helpful-report-buttons"
            >
              Yes ({review.helpfulness})
            </span>
            &nbsp;
            <span>|</span>&nbsp;
            {reported ? (
              <span style={{ color: "red" }}>Reported!</span>
            ) : (
              <span onClick={reportReview} className="helpful-report-buttons">
                Report
              </span>
            )}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ReviewListEntry;
