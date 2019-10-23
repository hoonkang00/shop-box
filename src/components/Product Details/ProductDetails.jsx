import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  containers: {
    height: "600px",
    overflow: "hidden"
  }
}));

const ProductDetailsNested = ({ imgUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.containers}>
          <img className="main-img" src={imgUrl}></img>
        </Grid>
        <Grid item xs={4} className={classes.containers}></Grid>
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
    this.props.handleLoadProduct();
    this.props.handleLoadStyles();
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
