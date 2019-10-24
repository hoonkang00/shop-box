import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default ({ classes }) => (
  <FormControl className={classes.formControl} disabled>
    <InputLabel
      htmlFor="quantity-simple"
      className={classes.labelInput}
      id={"qty-label"}
    >
      QUANTITY
    </InputLabel>
    <Select
      disableUnderline={true}
      value={"-"}
      name="quantity"
      inputProps={{
        name: "quantity",
        id: "quantity-simple"
      }}
      displayEmpty
      className={classes.selectQuantity}
    >
      <MenuItem value={"-"}>-</MenuItem>
    </Select>
  </FormControl>
);
