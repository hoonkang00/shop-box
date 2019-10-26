import React, { useState } from "react";
import Form from "./AddReviewForm.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContent";
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

export default function ReviewButtons(props) {
  const classes = useStyles();

  const [page, updatePage] = useState(1);

  const searchMoreProducts = () => {
    let nextPage = page + 1;
    props.handleClick([nextPage, "UPDATE-REVIEWS", props.productInfo.id]);
    updatePage(page + 1);
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
  const MyForm = React.forwardRef((props, ref) => <Form ref={ref} />);

  return (
    <div className="arr">
      <Button
        variant="outlined"
        className={classes.button}
        onClick={searchMoreProducts}
      >
        More Reviews
      </Button>
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
      >
        <DialogTitle id="scroll-dialog-title">Write Your Review</DialogTitle>
        <DialogTitle id="scroll-dialog-title">{`About the ${props.productInfo.name}`}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
