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

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = window.location.pathname.split("/")[2];
    this.props.handleLoadProduct(id);
    this.props.handleLoadStyles(id);
    this.props.handleLoadMetadata(id);
  }

  render() {
    let style = this.props.styles
      ? this.props.styles[this.props.selectedStyleIndex]
      : null;
    return (
      <div className="product-details">
        <ProductDetailsNested style={style} />
      </div>
    );
  }
}

export default ProductDetails;
