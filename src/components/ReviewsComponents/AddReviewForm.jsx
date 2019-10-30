import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Radio from "@material-ui/core/Radio";
import FormCharacteristics from "./FormCharacteristics.jsx";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great"
};

export default function AddReview({ prodMeta, newReview }) {
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState(0);
  const [recommended, setRecommended] = useState(0);

  const updateReview = event => {
    if (event.target.name === "recommend") {
      setRecommended(event.target.value);
      if (event.target.value === "true") {
        newReview[event.target.name] = true;
      } else {
        newReview[event.target.name] = false;
      }
    } else {
      newReview[event.target.name] = event.target.value;
    }
  };
  const [scroll, setScroll] = useState("paper");

  const img = event => {
    var files = [...event.target.files];
    if (files) {
      files.map(file => {
        var reader = new FileReader();

        reader.onload = function(readerEvt) {
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
              newReview["photos"].push(data.data.link);
            })
            .catch(err => {
              console.log(err);
            });
        };
        reader.readAsBinaryString(file);
      });
    }
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
                updateReview(event);
              }}
              className="review-form-field"
            />
            <Box ml={2}>{labels[value !== 0 ? value : hover]}</Box>
          </div>
          <Grid item>
            <label>Recommend</label>
            <Radio
              name="recommend"
              value="true"
              label="Yes"
              checked={recommended === "true"}
              onChange={event => {
                updateReview(event);
              }}
              className="review-form-field"
            />
            <Radio
              name="recommend"
              value="false"
              label="No"
              checked={recommended === "false"}
              onChange={event => {
                updateReview(event);
              }}
              className="review-form-field"
            />
            <FormCharacteristics
              newReviewCharacteristic={newReview.characteristics}
              characteristicId={prodMeta.characteristics}
            />

            <form className="form-content3" autoComplete="off">
              <div className="review-form-field">
                <label>Summary: </label>
                <TextField
                  required
                  id="standard-error"
                  name="summary"
                  margin="normal"
                  inputProps={{ maxLength: 60 }}
                  onChange={event => {
                    updateReview(event);
                  }}
                />
              </div>
              <div className="review-form-field">
                <label>Body: </label>
                <TextField
                  required
                  id="outlined-multiline-flexible"
                  label="Review"
                  multiline
                  rowsMax="4"
                  inputProps={{ minLength: 50, maxLength: 1000 }}
                  onChange={event => {
                    updateReview(event);
                  }}
                  name="body"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </div>
              {/* TODO: Add materialui image button*/}
              <div className="review-form-field">
                <input
                  type="file"
                  onChange={event => {
                    event.persist();
                    img(event);
                  }}
                  multiple
                ></input>
              </div>
              <div className="review-form-field">
                <label>Nickname</label>
                <TextField
                  type="text"
                  name="name"
                  id=""
                  required
                  maxLength="60"
                  onChange={event => {
                    updateReview(event);
                  }}
                />
              </div>
              <div className="review-form-field">
                <label>Email</label>
                <TextField
                  type="text"
                  name="email"
                  id=""
                  required
                  maxLength="60"
                  placeholder="Example: jackson11@email.com"
                  onChange={event => {
                    updateReview(event);
                  }}
                />
              </div>
            </form>
          </Grid>
        </Box>
      </DialogContent>
    </div>
  );
}
