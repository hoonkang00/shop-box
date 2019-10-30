import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EnabledQuantitySelector from "./EnabledQuantitySelector.jsx";
import DisabledQuantitySelector from "./DisabledQuantitySelector.jsx";
import InStockSizeForm from "./InStockSizeForm.jsx";
import ShareButton from "./ShareButton.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minWidth: "30px"
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "16px",
    width: "207px",
    height: "50px",
    border: "1px solid black",
    padding: "13.7px 10px 13.7px 20px",
    borderRadius: 0
  },
  shareButton: {
    margin: theme.spacing(1),
    width: "50px",
    height: "50px",
    border: "1px solid black",
    marginLeft: "16px",
    borderRadius: 0,
    color: "rgb(119,119,119)"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectSize: {
    margin: theme.spacing(1),
    width: "170px",
    height: "50px",
    border: "1px solid black",
    padding: "10px 10px 10px 20px"
  },
  labelInput: {
    padding: "12px 0 12px 12px",
    color: "rgba(0, 0, 0, 0.55) !important"
  },
  selectQuantity: {
    margin: theme.spacing(1),
    marginLeft: 0,
    width: "100px",
    height: "50px",
    border: "1px solid black",
    padding: "10px;"
  }
}));

export default function ShoppingForm({ style, product }) {
  // console.log("inside form", style);
  const classes = useStyles();
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
