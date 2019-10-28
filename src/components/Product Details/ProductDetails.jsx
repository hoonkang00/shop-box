import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoppingForm from "./ShoppingForm.jsx";
import ProductHeader from "./ProductHeader.jsx";
import DefaultImageView from "./DefaultImageView.jsx";
import StyleBubbleAreaContainer from "../../containers/StyleBubblesContainer";
import { getOrAddSession } from "../../../helpers/getSession.js";
import convertFeatures from "../../../helpers/convertFeatures.js";
import "../../styles.css";

const useStyles = makeStyles(theme => ({
  top: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px",
    height: "max-content",
    marginBottom: "20px"
  },
  defaultLeft: {
    minHeight: "600px",
    maxHeight: "700px",
    overflow: "hidden"
  },
  defaultRight: {
    height: "max-content",
    display: "flex",
    flexDirection: "column"
  },
  bottom: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px",
    height: "max-content"
  },
  bottomRight: {
    borderLeft: "2px solid black"
  }
}));

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

  const classes = useStyles();
  let style = props.styles ? props.styles[props.selectedStyleIndex] : null;
  return (
    <div className="product-details">
      <div className={classes.top}>
        <Grid container spacing={2}>
          <Grid item xs={8} className={classes.defaultLeft}>
            <DefaultImageView photos={style && style.photos} />
          </Grid>
          <Grid item xs={4} className={classes.defaultRight}>
            <div className="stars-mockup">stars and reviews link</div>
            <ProductHeader />
            <StyleBubbleAreaContainer />
            <ShoppingForm style={style} product={props.product} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.bottom}>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={7} className={classes.bottomLeft}>
            <h3 className="prod-slogan">{props.product.slogan}</h3>
            <p className="prod-description">{props.product.description}</p>
          </Grid>
          <Grid item xs={4} className={classes.bottomRight}>
            {props.product.features &&
              convertFeatures(props.product.features).map((feature, index) => (
                <div key={index} className="feature">
                  <img
                    src="images/checkmark.png"
                    className="checkmark-small"
                  ></img>
                  <p className="feature-value">{feature}</p>
                </div>
              ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetails;
