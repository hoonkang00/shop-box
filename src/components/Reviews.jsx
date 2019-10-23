import React from "react";
import ReviewList from "./ReviewList.jsx";
import AddReview from "./ReviewButtons.jsx";
import Grid from "@material-ui/core/Grid";

export default function Reviews(props) {
  return (
    <div className="reviews">
      <Grid container spacing={4} className="hello testing">
        <Grid item>
          <div>Hello</div>
        </Grid>
        <Grid item>
          <ReviewList />
          <AddReview />
        </Grid>
      </Grid>
    </div>
  );
}
