import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import getRelatedItems from "../../lib/relatedItemsHelpers/relatedItemsApiCall.js";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";



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

export default function ItemList(props) {
  const classes = useStyles();
  const [relatedProducts, setRelatedProducts] = useState([]);
  let getData = async id => {
    let data;
    data = await getRelatedItems(id);
    setRelatedProducts(data);
  };

  useEffect(() => {
    getData(props.productInfo.id);
  }, [props.productInfo.id]);

  return (
    <div>
      <GridList className={classes.gridList} cols={2.5}>
        {relatedProducts.map(item => {
        return (
          <ItemCard
            key={item.id}
            relatedProduct={item}
            currentProduct={props.productInfo}
          />
        )})}
      </GridList>
    </div>
  );
}




// {relatedProducts.map(item => {
//     return (
//       <ItemCard
//         key={item.id}
//         relatedProduct={item}
//         currentProduct={props.productInfo}
//       />
//     );
//   })}