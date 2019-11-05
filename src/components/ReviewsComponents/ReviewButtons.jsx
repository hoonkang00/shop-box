import React, { useState, useEffect } from "react";
import Form from "../../containers/RatingsReviewsContainers/AddNewReview.js";
import validateForm from "../../lib/reviewsHelperFunctions/validateFormHelper.js";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import {
  DialogContent,
  Button,
  Dialog,
  Box,
  DialogActions,
  DialogTitle
} from "@material-ui/core";

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

export default function ReviewButtons(props) {
  const classes = useStyles();
  const [page, updatePage] = useState(1);
  const [more, setMore] = useState(0);
  const [prevNumOfReviews, setPreviousNumOfReviews] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const [collapseable, setCollapseable] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [reviewSentModal, setReviewSentModal] = useState(false);

  useEffect(() => {
    setMore(props.numOfReviews);
  }, [props.numOfReviews]);

  const checkCollapseable = () => {
    if (prevNumOfReviews === more || props.numOfReviews === 0) {
      setShowMore(false);
    }
    if (prevNumOfReviews > 0 && prevNumOfReviews === more) {
      setCollapseable(true);
    }
  };

  const searchMoreProducts = () => {
    let nextPage = page + 1;
    setPreviousNumOfReviews(more);
    props.handleClick([nextPage, "UPDATE-REVIEWS", props.productInfo.id]);
    updatePage(page + 1);
    checkCollapseable();
  };

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    props.clearReviewForm();
    setOpen(false);
  };

  const add = () => {
    if (validateForm(props.newReview, props.prodMeta)) {
      props.addNewReview([props.prodMeta.product_id, props.newReview]);
      props.handleClick([1, "REVIEWS", props.productInfo.id]);
      setReviewSentModal(true);
      handleClose();
      setTimeout(() => {
        setReviewSentModal(false);
      }, 3000);
    }
  };

  const collapse = () => {
    updatePage(1);
    setShowMore(true);
    setCollapseable(false);
    props.handleClick([1, "REVIEWS", props.productInfo.id]);
  };

  return (
    <div className="arr">
      {showMore ? (
        <Button
          variant="outlined"
          className={classes.button}
          onClick={searchMoreProducts}
          aria-label="more-reviews"
        >
          More Reviews
        </Button>
      ) : collapseable ? (
        <Button
          variant="outlined"
          className={classes.button}
          onClick={collapse}
          aria-label="collapse-reviews"
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
        aria-label="add-reviews"
      >
        Add Review +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-label="scroll-dialog-title"
        className="add-review-modal"
      >
        <DialogTitle id="scroll-dialog-title" className="form-title">
          Write Your Review
        </DialogTitle>
        <DialogTitle
          id="scroll-dialog-title"
          className="form-subheading"
          aria-label="scroll-dialog-title"
        >{`About the ${props.productInfo.name}`}</DialogTitle>
        <Form />
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            aria-label="cancel-button"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              add();
            }}
            color="primary"
            aria-label="add-review"
          >
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={reviewSentModal}>
        <DialogContent
          className="review-sent-dialog-content"
          aria-label="dialog-rev-sent"
        >
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            className="review-sent-container"
            aria-label="revsent-container"
          >
            <CheckCircleTwoToneIcon
              className="review-sent-checkmark"
              aria-label="checkmark"
            />
            <p className="review-sent-text" aria-label="rev sent">
              Review Sent!
            </p>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
