import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoppingForm from "./ShoppingForm.jsx";
import ProductHeader from "./ProductHeader.jsx";
import StyleBubbleAreaContainer from "../../containers/StyleBubblesContainer";
import "../../styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px"
  },
  defaultLeft: {
    height: "600px",
    overflow: "hidden"
  },
  defaultRight: {
    height: "600px",
    display: "flex",
    flexDirection: "column"
  }
}));

const ProductDetailsNested = ({ style }) => {
  const classes = useStyles();
  const imgUrl = style ? style.photos[0].url : "";
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.defaultLeft}>
          <img className="main-img" src={imgUrl}></img>
        </Grid>
        <Grid item xs={4} className={classes.defaultRight}>
          <div className="stars-mockup">stars and reviews link</div>
          <ProductHeader />
          <StyleBubbleAreaContainer />
          <ShoppingForm style={style} />
        </Grid>
      </Grid>
    </div>
  );
};

const ProductDetails = props => {
  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    props.handleLoadProduct(id);
    props.handleLoadStyles(id);
    props.handleLoadMetadata(id);
  }, []);

  useEffect(() => {
    props.handleLoadStyles(props.product.id);
    props.handleLoadMetadata(props.product.id);
  }, [props.product.id]);

  let style = props.styles ? props.styles[props.selectedStyleIndex] : null;
  return (
    <div className="product-details">
      <ProductDetailsNested style={style} />
    </div>
  );
};

export default ProductDetails;
