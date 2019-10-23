import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoppingForm from "./ShoppingForm.jsx";
import "../../styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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

const ProductDetailsNested = ({ imgUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.defaultLeft}>
          <img className="main-img" src={imgUrl}></img>
        </Grid>
        <Grid item xs={4} className={classes.defaultRight}>
          <div className="stars-mockup">stars and reviews link</div>
          <p className="mockup">CATEGORY</p>
          <h2>Expanded Product Name</h2>
          <p className="mockup">$369</p>
          <p className="mockup">
            <b>STYLE ></b> SELECTED STYLE
          </p>
          <img className="style-bubbles" src="./images/styles.png"></img>
          <ShoppingForm />
        </Grid>
      </Grid>
    </div>
  );
};

const defaultStyle = styles => {
  if (styles === undefined || styles.length === 0) {
    return null;
  }

  return styles.reduce(
    (memo, item) => (item["default?"] === 1 ? item : memo),
    styles[0]
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = parseInt(
      window.location.href.split("products/")[1].substring(0, 1)
    );
    this.props.handleLoadProduct(id);
    this.props.handleLoadStyles(id);
    this.props.handleLoadMetadata(id);
  }

  render() {
    console.log(this.props);
    let style = defaultStyle(this.props.styles);
    let imgUrl = style ? style.photos[0].url : "";
    return (
      <div className="product-details">
        <ProductDetailsNested imgUrl={imgUrl} />
      </div>
    );
  }
}

export default ProductDetails;
