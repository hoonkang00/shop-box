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
  card: {
    maxWidth: 65,
    raised: true,
    height: '100vw'
  },
  media: {
    height: 100,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function AddOutfitCardButton(props) {
  const classes = useStyles();
  return (
    <Card className={"item-card-box"} id={'addOutfit-card-box'}>
      <CardActionArea
        className={"item-card-box-action-area"}
        onClick={() => {
          props.add();
        }}
      >
        <CardContent>
          <AddIcon htmlColor='black' fontSize='large'/>
          <Typography variant='h4'> ADD TO MY OUTFITS</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
