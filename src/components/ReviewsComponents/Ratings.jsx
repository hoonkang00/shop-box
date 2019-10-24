import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Stars from "../../containers/RatingsReviewsContainers/StarsContainer.js";
import RatingsBreakdown from "./RatingsBreakdown.jsx";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container spacing={4}>
          <Grid item>
            <Stars />
          </Grid>
          <Grid item>
            <RatingsBreakdown />
          </Grid>
        </Grid>
      </div>
    );
  }
}
