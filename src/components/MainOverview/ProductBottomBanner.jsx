import React from "react";
import Grid from "@material-ui/core/Grid";
import convertFeatures from "../../lib/convertFeatures";
import useBannerStyles from "./CustomStyles/productBanner.js";

const ProductBottomBanner = ({ product }) => {
  const classes = useBannerStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={7} className={classes.bottomLeft}>
          <h3 className="prod-slogan">{product.slogan}</h3>
          <p className="prod-description">{product.description}</p>
        </Grid>
        <Grid item xs={4} className={classes.features}>
          {product.features &&
            convertFeatures(product.features).map((feature, index) => (
              <div key={index} className="feature">
                <img
                  src="images/checkmark.png"
                  alt="feature"
                  className="checkmark-small"
                ></img>
                <p className="feature-value">{feature}</p>
              </div>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductBottomBanner;
