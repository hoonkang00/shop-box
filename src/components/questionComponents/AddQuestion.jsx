import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

// export default function FormDialog({ qbody }) {
//   const [open, setOpen] = React.useState(false);
//   const [values, setValues] = React.useState({
//     name: "",
//     multiline: ""
//   });

//   const useStyles = makeStyles(theme => ({
//     container: {
//       display: "flex",
//       flexWrap: "wrap"
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1)
//     },
//     dense: {
//       marginTop: theme.spacing(2)
//     },
//     menu: {
//       width: 200
//     }
//   }));
//   const classes = useStyles();
//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Add A Question +
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Ask your Question</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             About the PRODUCTNAME...get from store
//           </DialogContentText>
//           Question
//           <TextField
//             required
//             id="outlined-multiline-flexible"
//             label="Input question here"
//             multiline
//             rowsMax="4"
//             maxLength="1000"
//             value={values.multiline}
//             onChange={handleChange("multiline")}
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             fullWidth
//           />
//           Nickname
//           <TextField
//             required
//             autoFocus
//             margin="dense"
//             id="nickname"
//             label="Example: jack543!"
//             helperText="For privacy reasons, do not use your full name or email address"
//             fullWidth
//           />
//           Email
//           <TextField
//             required
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Example: jack@email.com"
//             maxLength="60"
//             type="email"
//             helperText="For authentication reasons, you will not be emailed"
//             fullWidth
//           />
//           Upload Photos:
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

const styles = theme => ({
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
});

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      email: "",
      nickname: "",
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    let questionObj = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email
    };

    axios
      .post(`http://18.223.1.30/qa/${this.props.product.id}`, questionObj)
      .then(() => {
        console.log(this.props.product.id);
        this.props.getQuestions(this.props.product.id);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add A Question +
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ask your Question</DialogTitle>
          <DialogContent>
            <DialogContentText>
              About {this.props.product.name}
            </DialogContentText>
            Question
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Input answer here"
              multiline
              rowsMax="4"
              maxLength="1000"
              value={this.state.answer}
              onChange={e => {
                this.handleChange(e);
              }}
              name="answer"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            Nickname
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              margin="dense"
              id="nickname"
              name="nickname"
              value={this.state.nickname}
              label="Example: jack543!"
              helperText="For privacy reasons, do not use your full name or email address"
              fullWidth
            />
            Email
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              margin="dense"
              id="email"
              name="email"
              value={this.state.email}
              label="Example: jack@email.com"
              type="email"
              maxLength="60"
              helperText="For authentication reasons, you will not be emailed"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddQuestion);
