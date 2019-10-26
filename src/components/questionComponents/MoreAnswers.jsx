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
      <span
        className="load-more"
        onClick={() => {
          showMoreAnswers();
        }}
      >
        LOAD MORE ANSWERS
      </span>
    </div>
  );
}
