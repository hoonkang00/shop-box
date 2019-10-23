import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
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
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "200px"
  }
}));

export default function QuantitySelector() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    quantity: "placeholder"
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={values.quantity}
        onChange={handleChange}
        name="quantity"
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="placeholder" disabled>
          SELECT SIZE
        </MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </FormControl>
  );
}
