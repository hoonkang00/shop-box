import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import QuantitySelector from "./QuantitySelector.jsx";
import SizeForm from "./SizeForm.jsx";
import ShareButton from "./ShareButton.jsx";
import trackElement from "../../../../api/trackElement";
import useShoppingFormStyles from "../CustomStyles/shoppingForm.js";

export default function ShoppingForm({ style, product }) {
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

  const inStock = style && Object.keys(style.skus);
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
  const disabled = !maxQuantity;

  return inStock ? (
    <div className="form-rows">
      <SizeForm
        size={size}
        handleChange={handleChange}
        style={style}
        classes={classes}
      />
      <QuantitySelector
        disabled={disabled}
        quantities={quantityOptions}
        quantity={quantity}
        handleChange={handleChange}
        classes={classes}
      />
      <Button
        variant="outlined"
        className={classes.button}
        aria-label="Add to cart"
        disabled={disabled}
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
    </div>
  ) : (
    <div className="form-rows">
      <SizeForm disabled={true} classes={classes} />
      <QuantitySelector
        disabled={disabled}
        quantities={quantityOptions}
        quantity={quantity}
        handleChange={handleChange}
        classes={classes}
      />
      <Button variant="outlined" className={classes.button} disabled={true}>
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
