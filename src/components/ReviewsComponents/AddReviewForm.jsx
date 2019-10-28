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
import axios from "axios";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great"
};

export default function AddReview({ handleClick, prodMeta, newReview }) {
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState(0);
  const [recommended, setRecommended] = useState(0);

  const add = () => {
    handleClick([prodMeta.product_id, newReview]);
  };

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

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //TODO: Promisify the img function
  const img = event => {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var p = btoa(binaryString);
        axios
          .post(
            "https://api.imgur.com/3/image",
            { image: p },
            {
              headers: {
                Authorization: "Client-ID 6e6d850fc03dd7f"
              }
            }
          )
          .then(({ data }) => {
            newReview["photos"].push(data.data.link);
            console.log(newReview);
          })
          .catch(err => {
            console.log(err);
          });
      };
      reader.readAsBinaryString(file);
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
              {/* TODO: radio buttons for characteristics */}
            </form>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleClose(), add();
          }}
          color="primary"
        >
          Add Review
        </Button>
      </DialogActions>
    </div>
  );
}
