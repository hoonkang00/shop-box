import React, { useState, useEffect } from "react";
import ProductDetailsContainer from "../containers/ProductDetailsContainer.js";
import RelatedItemsContainer from "../containers/RelatedContainer.js";
import ReviewsContainer from "../containers/ReviewsContainer.js";
import QAContainer from "../containers/QAContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const App = props => {
  return (
    <div className="components">
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <ProductDetailsContainer />
        </Grid>
        <Grid item xs={8}>
          <RelatedItemsContainer />
        </Grid>
        <Grid item xs={8}>
          <QAContainer />
        </Grid>
        <Grid item xs={12}>
          <ReviewsContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
