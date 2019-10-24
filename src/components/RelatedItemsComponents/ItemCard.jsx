import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActionArea from '@material-ui/core/CardActionArea';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 65,
    raised:true
  },
  media: {
    height: 100,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
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

export default function ItemCard(props) {
  const classes = useStyles();
  let style = defaultStyle(props.relatedProduct.results);

  return (
    <Card className="item-card">
      <CardActionArea onClick={() => {
        console.log(props)
          props.setStoreProductInfo(props.relatedProduct.id)
        }}>
      <CardMedia
        className={classes.media}
        image={
          style.photos[0].thumbnail_url ||
          "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"
        }
        title={style.name}
       
      />
      <CardContent>
        <h4>{props.relatedProduct.category}</h4>
        <h3>{props.relatedProduct.name}</h3>
        <h4>${props.relatedProduct.default_price}</h4>
      </CardContent>
      </CardActionArea>
  
    </Card>
  );
}

{
  /* <img src={defaultStyle(props.relatedProduct.results).photos[0].thumbnail_url}/>
<h4>{props.relatedProduct.category}</h4>
<h3>{props.relatedProduct.name}</h3>
<h4>${props.relatedProduct.default_price}</h4> */
}

// <div
//   key={item.product_id}
//   style={{
//     height: 200,
//     background: "url(https://placeimg.com/380/200/nature)"
//   }}
// >

//   {item.product_id}
// </div>

{
  /* <GridListTile key={props.relatedProduct.product_id}>
<img
  src={style.photos[0].thumbnail_url}
  alt={style.name}
  style={{
    height: 400,
    background: "url(https://placeimg.com/380/200/nature)"
  }}
  onClick={() => {
    alert(props.relatedProduct.product_id);
  }}
/>
<GridListTileBar
  title={props.relatedProduct.name}
  classes={{
    root: classes.titleBar,
    title: classes.title
  }}
  actionIcon={
    <IconButton aria-label={`star ${props.relatedProduct.name}`}>
      <StarBorderIcon className={classes.title} />
    </IconButton>
  }
/>
</GridListTile> */
}
