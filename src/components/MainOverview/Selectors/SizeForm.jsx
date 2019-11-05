import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import trackElement from "../../../../api/trackElement";

export default ({ disabled, size, handleChange, style, classes }) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="size-simple" className={classes.labelInput}>
      {size === "" ? "SELECT SIZE" : "SIZE"}
    </InputLabel>
    <Select
      disableUnderline={true}
      value={!disabled ? size : "-"}
      onChange={handleChange}
      onClick={trackElement}
      name="size"
      inputProps={{
        name: "size",
        id: "size-simple"
      }}
      displayEmpty
      className={!disabled ? classes.selectSize : classes.disabledSize}
      disabled={disabled}
    >
      {!disabled ? (
        Object.keys(style.skus).map(size => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))
      ) : (
        <MenuItem value="-">{"OUT OF STOCK"}</MenuItem>
      )}
    </Select>
  </FormControl>
);
