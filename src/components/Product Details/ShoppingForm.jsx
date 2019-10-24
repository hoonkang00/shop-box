import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import EnabledQuantitySelector from "./EnabledQuantitySelector.jsx";
import DisabledQuantitySelector from "./DisabledQuantitySelector.jsx";
import InStockSizeForm from "./InStockSizeForm.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectSize: {
    margin: theme.spacing(1),
    width: "170px",
    border: "1px solid black",
    padding: "10px 10px 10px 20px"
  },
  labelInput: {
    padding: "12px 0 12px 12px"
  },
  selectQuantity: {
    margin: theme.spacing(1),
    marginLeft: 0,
    width: "100px",
    border: "1px solid black",
    padding: "10px;"
  }
}));

export default function ShoppingForm({ style }) {
  // console.log("inside form", style);
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState("");

  const handleChange = event => {
    if (event.target.name === "size") {
      setSize(event.target.value);
    } else if (event.target.name === "quantity") {
      setQuantity(event.target.value);
    }
  };

  const OutOfStockSizeForm = () => <div>TODO - add out of stock size form</div>;

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
      <div>
        <InStockSizeForm
          size={size}
          handleChange={handleChange}
          style={style}
          classes={classes}
        />
        {maxQuantity ? (
          <EnabledQuantitySelector
            quantities={quantityOptions}
            quantity={quantity}
            handleChange={handleChange}
            classes={classes}
          />
        ) : (
          <DisabledQuantitySelector classes={classes} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <OutOfStockSizeForm />
        <DisabledQuantitySelector classes={classes} />
        )}
      </div>
    );
  }
}
