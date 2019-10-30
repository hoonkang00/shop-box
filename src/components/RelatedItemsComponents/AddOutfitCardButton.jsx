import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import StarRatings from "../ReviewsComponents/StarRatings.jsx";
import RemoveMyOutfit from "./RemoveMyOutfit.jsx";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  cardSpecial: {
    width:180,
    height:350

  },
  media: {
    height: 100,
    paddingTop: "56.25%" // 16:9
  },
  
  content:{
    'margin-top':33
  },
  
  icon:{
    'margin-left':54
  }
}));

export default function AddOutfitCardButton(props) {
  const classes = useStyles();
  return (
    <Card className={`item-card-box ${classes.cardSpecial}`} id="addOutfit-card-box">
      <CardActionArea
        className={"item-card-box-action-area"}
        onClick={() => {
          props.add();
        }}
      >
        <CardContent className={classes.content} id="addOutfit-card-content">
          <AddIcon className={classes.icon} htmlColor='black' fontSize='large'/>
          <AddIcon className={classes.icon} htmlColor='black' fontSize='large'/>
          <Typography variant='h4'> ADD TO MY OUTFITS</Typography>
          <AddIcon className={classes.icon} htmlColor='black' fontSize='large'/>
          <AddIcon className={classes.icon} htmlColor='black' fontSize='large'/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
