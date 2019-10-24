import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ReviewButtons(props) {
  const classes = useStyles();

  const [page, updatePage] = useState(1);

  const searchMoreProducts = () => {
    let nextPage = page + 1;
    props.handleClick.listOfReviews([nextPage, "UPDATE-REVIEWS"]);
    updatePage(page + 1);
  };
  return (
    <div className="arr">
      <Button
        variant="outlined"
        className={classes.button}
        onClick={searchMoreProducts}
      >
        More Reviews
      </Button>
      <Button variant="outlined" className={classes.button}>
        Add Review +
      </Button>
    </div>
  );
}
