import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Radio from "@material-ui/core/Radio";
import FormCharacteristics from "./FormCharacteristics.jsx";
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
            />
            <Radio
              name="recommend"
              value="false"
              label="No"
              checked={recommended === "false"}
              onChange={event => {
                updateReview(event);
              }}
            />
            <FormCharacteristics
              newReviewCharacteristic={newReview.characteristics}
              characteristicId={prodMeta.characteristics}
            />
            <form className="form-content3">
              <label>Summary: </label>
              <input
                type="text"
                name="summary"
                id=""
                required
                maxLength="60"
                onChange={event => {
                  updateReview(event);
                }}
              />
              <label>Body: </label>
              <input
                type="text"
                name="body"
                id=""
                required
                minLength="50"
                maxLength="1000"
                onChange={event => {
                  updateReview(event);
                }}
              />
              {/* TODO: Add materialui image button*/}
              <input
                type="file"
                onChange={event => {
                  event.persist();
                  img(event);
                }}
                multiple
              ></input>
              <label>Nickname</label>
              <input
                type="text"
                name="name"
                id=""
                required
                maxLength="60"
                onChange={event => {
                  updateReview(event);
                }}
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                id=""
                required
                maxLength="60"
                placeholder="jackson11@email.com"
                onChange={event => {
                  updateReview(event);
                }}
              />
            </form>
          </Grid>
        </Box>
      </DialogContent>
    </div>
  );
}
