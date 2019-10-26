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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 65,
    raised: true
  },
  media: {
    height: 100,
    paddingTop: "56.25%" // 16:9
  }
}));

const defaultStyle = styles => {
  if (styles === undefined || styles.length === 0) {
    return null;
  }

  return styles.reduce(
    (memo, item) => (item["default?"] === 1 ? item : memo),
    styles[0]
  );
};

const findAverage = ratingsObject => {
  let totalRatings = 0;
  let totalRatingsValue = 0;

  for (let p in ratingsObject) {
    totalRatingsValue += Number(p * ratingsObject[p]);
    totalRatings += Number(ratingsObject[p]);
  }
  let averageRating = totalRatingsValue / totalRatings || 0;

  return averageRating;
};

export default function MyOutfitCard(props) {
  const classes = useStyles();
  let style = defaultStyle(props.myOutfit.productStyles);
  let averageReview = findAverage(props.myOutfit.ratings);
  return (
    <Card className={"item-card-box"}>
      <CardActionArea
        className={"item-card-box-action-area"}
        onClick={() => {
          props.resetCarousel(0);
        }}
      >
        <CardMedia
          className={classes.media}
          image={
            style === null
              ? "https://avatars1.githubusercontent.com/u/5233442?s=460&v=4"
              : style.photos[0].thumbnail_url
          }
          title={style.name}
        />

        <CardContent>
          <Typography> {props.myOutfit.category}</Typography>
          <Typography> {props.myOutfit.name}</Typography>
          <Typography> ${props.myOutfit.default_price}</Typography>
        </CardContent>
      </CardActionArea>
      {averageReview === 0 ? (
        <Typography>No reviews</Typography>
      ) : (
        <StarRatings rating={averageReview} />
      )}
    </Card>
  );
}
