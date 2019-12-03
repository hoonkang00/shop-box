import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";

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

class AddAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      email: "",
      nickname: "",
      photos: [],
      showIcon: false,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.img = this.img.bind(this);
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
  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  handleSubmit(e) {
    e.preventDefault();
    let answerObj = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos
    };
    let errorMsg = [];
    if (this.state.answer === "" || this.state.answer == null) {
      errorMsg.push("Answer is required");
    }
    if (this.state.nickname === "" || this.state.nickname == null) {
      errorMsg.push("Name is required");
    }
    if (this.state.email === "" || this.state.email == null) {
      errorMsg.push("Email is required");
    }
    if (!this.emailIsValid(this.state.email)) {
      errorMsg.push("Email format is incorrect");
    }
    if (errorMsg.length > 0) {
      alert(errorMsg.join("\n"));
    } else {
      axios
        .post(
          `http://3.134.102.30/qa/${this.props.questionId}/answers`,
          answerObj
        )
        .then(() => {
          this.props.getAnswers();
          this.setState({ photos: [] });
        })
        .catch(err => {
          console.log(err);
        });

      this.setState({ open: false });
    }
  }
  img(event) {
    var files = [...event.target.files];
    this.setState({ showIcon: true });
    if (files) {
      files.map(file => {
        var reader = new FileReader();

        reader.onload = readerEvt => {
          var binaryString = readerEvt.target.result;
          var imageBase64 = btoa(binaryString);
          return axios
            .post(
              "https://api.imgur.com/3/image",
              { image: imageBase64 },
              {
                headers: {
                  Authorization: "Client-ID 6e6d850fc03dd7f"
                }
              }
            )
            .then(({ data }) => {
              this.setState({
                photos: this.state.photos.concat(data.data.link),
                showIcon: false
              });
            })
            .catch(err => {
              console.log(err);
            });
        };
        reader.readAsBinaryString(file);
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="answer-detail add-answer">
        <span className="yes-button" onClick={this.handleClickOpen}>
          Add Answer
        </span>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Submit your Answer</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.product.name}: {this.props.qbody}
            </DialogContentText>
            Answer
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
            <input
              type="file"
              onChange={event => {
                event.persist();
                this.img(event);
              }}
              multiple
            ></input>
            {this.showIcon ? <LoopOutlinedIcon /> : null}
            <br />
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

export default withStyles(styles, { withTheme: true })(AddAnswer);
