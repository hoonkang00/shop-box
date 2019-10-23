import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails.jsx";
import RelatedItemsContainer from "../containers/RelatedContainer.js";
import ReviewsContainer from "../components/Reviews.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function App(props) {
  return (
    <div className="components">
      <Grid container spacing={4}>
        <Grid item>
          <ProductDetails />
        </Grid>
        <Grid item>
          <RelatedItemsContainer />
        </Grid>
        <Grid item>
          <ReviewsContainer />
        </Grid>
      </Grid>
    </div>
  );
}
