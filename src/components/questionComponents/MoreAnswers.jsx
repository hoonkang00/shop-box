import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function OutlinedButtons({ showMoreAnswers }) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} onClick={showMoreAnswers}>
        Load more answers
      </Button>
    </div>
  );
}
