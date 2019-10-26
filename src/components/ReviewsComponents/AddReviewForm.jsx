import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormCharacteristics from "./FormCharacteristics.jsx";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great"
};

export default function AddReview({ handleClick, prodId }) {
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState(0);

  const [formData, setFormData] = useState({
    rating: 0,
    summary: "",
    body: "",
    recommend: "",
    name: "",
    email: "",
    photos: [],
    characteristics: {}
  });

  const add = () => {
    handleClick(propdId, formData);
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

  return (
    <div>
      <DialogContent dividers={scroll === "paper"}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Overall Rating (mandatory)</Typography>
          <div>
            <Rating
              name="rating"
              value={value}
              precision={1}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              onClickCapture={event => {
                event.persist();
                setValue(hover);
                setFormData({
                  ...formData,
                  [event.target.name]: hover
                });
              }}
            />
            <Box ml={2}>{labels[value !== 0 ? value : hover]}</Box>
          </div>
          <Grid item>
            <label>Recommend</label>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
            <FormCharacteristics />
            <form className="form-content3">
              <label>Summary: </label>
              <input
                type="text"
                name="Review Summary"
                id=""
                required
                maxLength="60"
              />
              <label>Body: </label>
              <input
                type="text"
                name="Review Body"
                id=""
                required
                minLength="50"
                maxLength="1000"
              />
              {/* TODO: Add materialui image button*/}
              <label>Nickname</label>
              <input
                type="text"
                name="Nickname"
                id=""
                required
                maxLength="60"
              />
              <label>Email</label>
              <input
                type="text"
                name="Email"
                id=""
                required
                maxLength="60"
                placeholder="jackson11@email.com"
              />
              {/* TODO: radio buttons for characteristics */}
            </form>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary" onClick={add}>
          Add Review
        </Button>
      </DialogActions>
    </div>
  );
}
