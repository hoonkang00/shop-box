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

export default function OutlinedButtons({ showCollapse, showMoreQuestions }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          showMoreQuestions();
        }}
      >
        {showCollapse ? "Collapse Questions" : "More Answered Questions"}
      </Button>
    </div>
  );
}
