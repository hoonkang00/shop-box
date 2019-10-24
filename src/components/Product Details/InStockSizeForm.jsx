import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default ({ size, handleChange, style, classes }) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="size-simple" className={classes.labelInput}>
      {size === "" ? "SELECT SIZE" : "SIZE"}
    </InputLabel>
    <Select
      disableUnderline={true}
      value={size}
      onChange={handleChange}
      name="size"
      inputProps={{
        name: "size",
        id: "size-simple"
      }}
      displayEmpty
      className={classes.selectSize}
    >
      {Object.keys(style.skus).map(size => (
        <MenuItem key={size} value={size}>
          {size}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
