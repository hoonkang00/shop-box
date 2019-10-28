import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));



export default function RemoveMyOutfit(props) {
  const classes = useStyles();


  const removeFromLocalStorage = ()=>{
    console.log(props.index)
    props.removeFromOutfits(props.index)
    props.setisItInMyOutfit(false)
  }

  return (
    <div className={"PopOut"}>
      <IconButton
        variant="contained"
        onClick={removeFromLocalStorage}
      >
        <DeleteForeverIcon htmlColor='black' />
      </IconButton>

    </div>
  );
}
