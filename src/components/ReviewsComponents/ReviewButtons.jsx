import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ReviewButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        More Reviews
      </Button>
      <Button variant="outlined" className={classes.button}>
        Add Review +
      </Button>
    </div>
  );
}
