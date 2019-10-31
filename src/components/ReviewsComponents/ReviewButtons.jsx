import React, { useState, useEffect, useRef } from "react";
import Form from "../../containers/RatingsReviewsContainers/AddNewReview.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    position: "absolute",
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function ReviewButtons(props) {
  const classes = useStyles();
  const [page, updatePage] = useState(1);
  const [more, setMore] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const [collapseable, setCollapseable] = useState(false);

  useEffect(() => {
    setMore(props.numOfReviews);
    prevNumOfReviews;
  }, [props.numOfReviews]);

  const prevNumOfReviews = usePrevious(more);

  const searchMoreProducts = () => {
    let nextPage = page + 1;
    props.handleClick([nextPage, "UPDATE-REVIEWS", props.productInfo.id]);
    updatePage(page + 1);
    if (prevNumOfReviews === more || props.numOfReviews === 0) {
      setShowMore(false);
    }
    if (prevNumOfReviews > 0 && prevNumOfReviews === more) {
      setCollapseable(true);
    }
  };

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    props.addNewReview([props.prodMeta.product_id, props.newReview]);
    props.handleClick([1, "REVIEWS", props.productInfo.id]);
  };

  const collapse = () => {
    updatePage(1);
    setShowMore(true);
    setCollapseable(false);
    setMore(0);
    prevNumOfReviews;
    props.handleClick([1, "REVIEWS", props.productInfo.id]);
  };

  return (
    <div className="arr">
      {showMore ? (
        <Button
          variant="outlined"
          className={classes.button}
          onClick={searchMoreProducts}
        >
          More Reviews
        </Button>
      ) : collapseable ? (
        <Button
          variant="outlined"
          className={classes.button}
          onClick={collapse}
        >
          Collapse Reviews
        </Button>
      ) : (
        ""
      )}
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleClickOpen("paper")}
      >
        Add Review +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        className="add-review-modal"
      >
        <DialogTitle id="scroll-dialog-title" className="form-title">
          Write Your Review
        </DialogTitle>
        <DialogTitle
          id="scroll-dialog-title"
          className="form-subheading"
        >{`About the ${props.productInfo.name}`}</DialogTitle>
        <Form />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose(), add();
            }}
            color="primary"
          >
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
