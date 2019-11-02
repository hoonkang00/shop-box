import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingForm from "./ShoppingForm.jsx";
import ProductHeader from "./ProductHeader.jsx";
import DefaultImageView from "./DefaultImageView.jsx";
import StyleBubbleAreaContainer from "../../containers/StyleBubblesContainer";
import StarRatings from "../ReviewsComponents/StarRatings.jsx";
import ProductBottomBanner from "./ProductBottomBanner.jsx";
import calculateAverage from "../../lib/calculateAverage";
import getProductId from "../../lib/getProductId.js";
import useOverviewStyles from "./CustomStyles/overview.js";
import "../../styles.css";

const ProductDetails = props => {
  useEffect(() => {
    const id = getProductId();
    props.handleLoadProduct(id);
    props.handleLoadStyles(id);
    props.handleLoadMetadata(id);
  }, []);

  useEffect(() => {
    props.handleLoadStyles(props.product.id);
    props.handleLoadMetadata(props.product.id);
  }, [props.product.id]);

  const classes = useOverviewStyles();
  let style = props.styles ? props.styles[props.selectedStyleIndex] : null;
  return (
    <div className="product-details">
      <div className={classes.top}>
        <Grid container spacing={2}>
          <Grid item xs={8} className={classes.defaultLeft}>
            <DefaultImageView
              photos={style && style.photos}
              styleId={style && style.style_id}
            />
          </Grid>
          <Grid item xs={4} className={classes.defaultRight}>
            <div className="product-stars-container">
              <StarRatings
                className="no-review-text"
                rating={calculateAverage(props.ratings)}
              />
              <p
                className="review-link"
                onClick={() =>
                  document
                    .getElementById("reviews")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Read all reviews
              </p>
            </div>
            <ProductHeader />
            <StyleBubbleAreaContainer />
            <ShoppingForm style={style} product={props.product} />
          </Grid>
        </Grid>
      </div>
      <ProductBottomBanner product={props.product} />
    </div>
  );
};

export default ProductDetails;
