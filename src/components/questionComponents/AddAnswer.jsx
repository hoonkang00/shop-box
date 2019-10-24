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
    axios.post('')
  };

  return (
    <div>
      <Button onClick={handleClickOpen} className={classes.button}>
        Add Answer
      </Button>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Productname...get from store: {qbody}
          </DialogContentText>
          Answer
          <TextField
            required
            id="outlined-multiline-flexible"
            label="Input answer here"
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
            type="email"
            maxLength="60"
            helperText="For authentication reasons, you will not be emailed"
            fullWidth
          />
          Upload Photos:
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Button
              variant="outlined"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
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
