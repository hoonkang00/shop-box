import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DialogContent from "@material-ui/core/DialogContent";
import Radio from "@material-ui/core/Radio";
import FormCharacteristics from "./FormCharacteristics.jsx";
import TextField from "@material-ui/core/TextField";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
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
  const [imageLoading, setImageLoading] = useState(false);

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
    setImageLoading(true);
    var files = [...event.target.files];
    if (files) {
      if (files.length > 5 || newReview["photos"].length > 5) {
        alert("Please select a maximum of 5 Images");
      } else {
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
                setImageLoading(false);
              })
              .catch(err => {
                console.log(err);
              });
          };
          reader.readAsBinaryString(file);
        });
      }
    }
  };

  return (
    <div>
      <DialogContent dividers={scroll === "paper"}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <div className="form-overall-rating">
            <Typography component="legend">
              Overall Rating (mandatory)
            </Typography>
            <div className="form-rating-container">
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
                className="review-form-field star-rating-review-form"
              />
              <Box ml={2}>{labels[value !== 0 ? value : hover]}</Box>
            </div>
          </div>
          <div className="form-recommend-radio-buttons">
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
            {"Yes"}
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
            {"No"}
          </div>
          <FormCharacteristics
            newReviewCharacteristic={newReview.characteristics}
            characteristicId={prodMeta.characteristics}
          />
          <form className="form-content3" autoComplete="off">
            <div className="review-form-field">
              <label>Summary</label>
              <TextField
                autoFocus
                id="standard-error"
                name="summary"
                margin="normal"
                inputProps={{ maxLength: 60 }}
                onChange={event => {
                  updateReview(event);
                }}
                className="review-form-textfield"
                label="Example: Best purchase ever!"
              />
            </div>
            <div className="review-form-field">
              <label>Body</label>
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
                className="review-form-textfield"
                label="Why did you like the product or not?"
              />
            </div>
            <div className="review-form-field">
              <input
                type="file"
                onChange={event => {
                  event.persist();
                  img(event);
                }}
                multiple
              ></input>
              {imageLoading ? <LoopOutlinedIcon className="loading" /> : ""}
            </div>
            <div className="review-form-field">
              <label>Nickname</label>
              <TextField
                type="text"
                name="name"
                id=""
                autoFocus
                required
                maxLength="60"
                onChange={event => {
                  updateReview(event);
                }}
                label="Example: jackson11!"
                helperText="For privacy reasons, do not use your full name or email address"
                className="review-form-textfield"
              />
            </div>
            <div className="review-form-field">
              Email
              <br />
              <TextField
                type="text"
                name="email"
                id=""
                autoFocus
                required
                maxLength="60"
                label="Example: jackson11@email.com"
                helperText="For authentication reasons, you will not be emailed"
                onChange={event => {
                  updateReview(event);
                }}
                className="review-form-textfield"
              />
            </div>
          </form>
        </Box>
      </DialogContent>
    </div>
  );
}
