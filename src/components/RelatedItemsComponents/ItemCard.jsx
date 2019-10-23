import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
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
    <div>
      <GridListTile key={props.relatedProduct.product_id}>
        <img src={style.photos[0].thumbnail_url} alt={style.name} onClick={()=>{alert(props.relatedProduct.product_id)}}/>
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
      </GridListTile>
      <h4>{props.relatedProduct.category}</h4>
      <h3>{props.relatedProduct.name}</h3>
      <h4>${props.relatedProduct.default_price}</h4>
    </div>
  );
}

{
  /* <img src={defaultStyle(props.relatedProduct.results).photos[0].thumbnail_url}/>
<h4>{props.relatedProduct.category}</h4>
<h3>{props.relatedProduct.name}</h3>
<h4>${props.relatedProduct.default_price}</h4> */
}
