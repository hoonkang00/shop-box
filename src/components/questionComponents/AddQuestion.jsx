import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

export default function FormDialog({ qbody }) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    multiline: ""
  });

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  }));
  const classes = useStyles();
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add A Question +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ask your Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            About the PRODUCTNAME...get from store
          </DialogContentText>
          Question
          <TextField
            required
            id="outlined-multiline-flexible"
            label="Input question here"
            multiline
            rowsMax="4"
            maxLength="1000"
            value={values.multiline}
            onChange={handleChange("multiline")}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          Nickname
          <TextField
            required
            autoFocus
            margin="dense"
            id="nickname"
            label="Example: jack543!"
            helperText="For privacy reasons, do not use your full name or email address"
            fullWidth
          />
          Email
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Example: jack@email.com"
            maxLength="60"
            type="email"
            helperText="For authentication reasons, you will not be emailed"
            fullWidth
          />
          Upload Photos:
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
