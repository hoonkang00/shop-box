import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Stars from "./StarRatings.jsx";
import CheckIcon from "@material-ui/icons/Check";

const ReviewListEntry = ({ review }) => {
  const renderResponse = !["null", null, 0].includes(review.response);
  return (
    <div className="rowEntry">
      <Grid container>
        <Stars rating={review.rating} />
        <span>{`${review.reviewer_name}, ${review.date.substr(0, 10)}`}</span>
        <ListItem button>
          <ListItemText primary={review.summary} secondary={review.body} />
        </ListItem>
        {review.recommend === 1 ? (
          <span>
            <CheckIcon /> <span> I recommend this product</span>
          </span>
        ) : (
          ""
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
        <div>
          <span>Helpful?</span>
          {/* <span onClick={}>Yes ({review.helpfulness})</span> */}
          <span>|</span>
          <span>Report</span>
        </div>
        <Divider />
      </Grid>
    </div>
  );
};

export default ReviewListEntry;
