import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

export default function FormDialog({ qbody, product }) {
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
    const target = event.target;
    // const name = target.name;
    // this.setState({ [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // axios.post("");
  };

  return (
    <div>
      <Button onClick={handleClickOpen} className={classes.button}>
        Add Answer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {product}: {qbody}
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
            onChange={handleChange("nickname")}
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
            onChange={handleChange("email")}
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
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// import React, { Component } from "react";

// export default class AddAnswer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       answer: "",
//       email: "",
//       nickname: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClickOpen = this.handleClickOpen.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange = e => {
//     const target = event.target;
//     const name = target.name;

//     this.setState({ [name]: value });
//   };

//   handleClickOpen = () => {
//     setOpen(true);
//   };

//   handleClose = () => {
//     setOpen(false);
//     let answerObj = {};
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     console.log("value", this.state.answer);
//     setOpen(false);
//   };

//   render() {
//     const useStyles = makeStyles(theme => ({
//       container: {
//         display: "flex",
//         flexWrap: "wrap"
//       },
//       textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1)
//       },
//       dense: {
//         marginTop: theme.spacing(2)
//       },
//       menu: {
//         width: 200
//       }
//     }));
//     const classes = useStyles();
//     return (
//       <div>
//         <Button onClick={this.handleClickOpen} className={classes.button}>
//           Add Answer
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Submit your Answer</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               {product}: {qbody}
//             </DialogContentText>
//             Answer
//             <TextField
//               // {...bindAnswer}
//               required
//               id="outlined-multiline-flexible"
//               label="Input answer here"
//               multiline
//               rowsMax="4"
//               maxLength="1000"
//               value={this.state.answer}
//               onChange={this.handleChange}
//               className={classes.textField}
//               margin="normal"
//               variant="outlined"
//               fullWidth
//             />
//             Nickname
//             <TextField
//               // {...bindNickname}
//               onChange={this.handleChange}
//               required
//               autoFocus
//               margin="dense"
//               id="nickname"
//               value={this.state.nickname}
//               label="Example: jack543!"
//               helperText="For privacy reasons, do not use your full name or email address"
//               fullWidth
//             />
//             Email
//             <TextField
//               // {...bindEmail}
//               onChange={this.handleChange}
//               required
//               autoFocus
//               margin="dense"
//               id="email"
//               value={this.state.email}
//               label="Example: jack@email.com"
//               type="email"
//               maxLength="60"
//               helperText="For authentication reasons, you will not be emailed"
//               fullWidth
//             />
//             Upload Photos:
//             <input
//               accept="image/*"
//               className={classes.input}
//               id="outlined-button-file"
//               multiple
//               type="file"
//             />
//             <label htmlFor="outlined-button-file">
//               <Button
//                 variant="outlined"
//                 component="span"
//                 className={classes.button}
//               >
//                 Upload
//               </Button>
//             </label>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={this.handleSubmit} color="primary">
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }
