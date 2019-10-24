import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    width: "200px",
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

export default function QuantitySelector() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    quantity: 1,
    size: ""
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="selects-container">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="size-simple" className={classes.labelInput}>
          {values.size === "" ? "SELECT SIZE" : "SIZE"}
        </InputLabel>
        <Select
          disableUnderline={true}
          value={values.size}
          onChange={handleChange}
          name="size"
          inputProps={{
            name: "size",
            id: "size-simple"
          }}
          displayEmpty
          className={classes.selectSize}
        >
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel
          htmlFor="quantity-simple"
          className={classes.labelInput}
          id={"qty-label"}
        >
          {values.quantity === "" ? "OUT OF STOCK" : "QUANTITY"}
        </InputLabel>
        <Select
          disableUnderline={true}
          value={values.quantity}
          onChange={handleChange}
          name="quantity"
          inputProps={{
            name: "quantity",
            id: "quantity-simple"
          }}
          displayEmpty
          className={classes.selectQuantity}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(num => (
            <MenuItem value={num}>{num}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
