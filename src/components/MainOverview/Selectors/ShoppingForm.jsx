import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import EnabledQuantitySelector from "./EnabledQuantitySelector.jsx/index.js";
import DisabledQuantitySelector from "./DisabledQuantitySelector.jsx/index.js";
import InStockSizeForm from "./InStockSizeForm.jsx/index.js";
import ShareButton from "./ShareButton.jsx/index.js";
import trackElement from "../../../../api/trackElement";
import useShoppingFormStyles from "../CustomStyles/shoppingForm.js";

export default function ShoppingForm({ style, product }) {
  // console.log("inside form", style);
  const classes = useShoppingFormStyles();
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState("");
  const [share, toggleShare] = React.useState(false);

  const handleChange = event => {
    if (event.target.name === "size") {
      setSize(event.target.value);
    } else if (event.target.name === "quantity") {
      setQuantity(event.target.value);
    }
  };

  const style_id = style ? style.style_id : 0;
  useEffect(() => {
    setQuantity(1);
    setSize("");
  }, [style_id]);

  const OutOfStockSizeForm = () => <></>;

  const inStock = style && Object.keys(style.skus);
  // FIXME: in stock is more complicated
  let maxQuantity = null;
  let quantityOptions = [];
  if (inStock) {
    maxQuantity = style.skus[size];
    maxQuantity = maxQuantity > 15 ? 15 : maxQuantity;
    if (maxQuantity) {
      for (let i = 0; i < maxQuantity; i++) {
        quantityOptions.push(i + 1);
      }
    }
  }

  if (inStock) {
    return (
      <div className="form-rows">
        <InStockSizeForm
          size={size}
          handleChange={handleChange}
          style={style}
          classes={classes}
        />
        {maxQuantity ? (
          <>
            <EnabledQuantitySelector
              quantities={quantityOptions}
              quantity={quantity}
              handleChange={handleChange}
              classes={classes}
            />
            <Button
              variant="outlined"
              className={classes.button}
              aria-label="Add to cart"
              onClick={trackElement}
            >
              Add to Cart +
            </Button>
            <ShareButton
              share={share}
              toggleShare={toggleShare}
              product={product}
              classes={classes}
              photo={style && style.photos[0].url}
            />
          </>
        ) : (
          <>
            <DisabledQuantitySelector classes={classes} />
            <Button
              variant="outlined"
              className={classes.button}
              disabled={true}
              aria-label="Add to cart"
            >
              Add to Cart +
            </Button>
            <ShareButton
              share={share}
              toggleShare={toggleShare}
              product={product}
              classes={classes}
              photo={style && style.photos[0].url}
            />
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="form-rows out-of-stock">
        <OutOfStockSizeForm />
        <Button variant="outlined" className={classes.button + " hidden"}>
          Add to Cart +
        </Button>
        <ShareButton
          share={share}
          toggleShare={toggleShare}
          product={product}
          classes={classes}
        />
      </div>
    );
  }
}
