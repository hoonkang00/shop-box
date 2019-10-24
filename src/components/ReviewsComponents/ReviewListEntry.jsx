import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ListSubheader } from "@material-ui/core";

const ReviewListEntry = ({ review }) => {
  console.log(review);
  return (
    <div className="rowEntry">
      <Grid container>
        <Grid item>{review.date.substr(0, 10)}</Grid>
        <ListItem button>
          <ListItemText primary={review.summary} secondary={review.body} />
        </ListItem>
        <Divider />
      </Grid>
    </div>
  );
};

export default ReviewListEntry;
