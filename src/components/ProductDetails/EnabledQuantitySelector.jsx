import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import trackElement from "../../../api/trackElement";

export default ({ quantities, quantity, handleChange, classes }) => (
  <FormControl className={classes.formControl}>
    <InputLabel
      htmlFor="quantity-simple"
      className={classes.labelInput}
      id={"qty-label"}
    >
      QUANTITY
    </InputLabel>
    <Select
      disableUnderline={true}
      value={quantity}
      onChange={handleChange}
      name="quantity"
      inputProps={{
        name: "quantity",
        id: "quantity-simple"
      }}
      onClick={trackElement}
      displayEmpty
      className={classes.selectQuantity}
    >
      {quantities.map(num => (
        <MenuItem key={num} value={num}>
          {num}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
