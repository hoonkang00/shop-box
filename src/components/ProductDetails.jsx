import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  },
  paper: {
    height: "100px",
    padding: theme.spacing(`2`),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const ProductDetailsNested = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}></Grid>
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
    <ProductDetailsNested />;
  }
}

export default ProductDetails;
