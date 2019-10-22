import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  containers: {
    height: "600px"
  }
}));

const ProductDetailsNested = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.containers}></Grid>
        <Grid item xs={4} className={classes.containers}></Grid>
      </Grid>
    </div>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let productId = 1;
    const url = `http://18.223.1.30/products/${productId}/styles`;

    Axios.get(url).then(results => {
      console.log(results);
    });
  }

  render() {
    return (
      <div className="product-details">
        <ProductDetailsNested />
      </div>
    );
  }
}

export default ProductDetails;
