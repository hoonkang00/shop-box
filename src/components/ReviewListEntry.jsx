import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ReviewListEntry = ({ review }) => {
  return (
    <ListItem button>
      <ListItemText primary={review.summary} />
    </ListItem>
  );
};

export default ReviewListEntry;
