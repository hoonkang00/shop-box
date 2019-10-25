import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import getRelatedItems from "../../lib/relatedItemsHelpers/relatedItemsApiCall.js";
import { makeStyles } from "@material-ui/core/styles";
import ItemsCarousel from "react-items-carousel";
import Typography from "@material-ui/core/Typography";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function ItemList(props) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  let getData = async id => {
    let data;
    data = await getRelatedItems(id);
    setRelatedProducts(data);
  };

  useEffect(() => {
    getData(props.productInfo.id);
  }, [props.productInfo.id]);

  return (
    <div style={{ padding: "0 60px", maxWidth: 800, margin: "0 auto" }}>
      <Typography>Related Items</Typography>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={30}
        activePosition={"center"}
        chevronWidth={70}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => {
          setActiveItemIndex(value);
        }}
        rightChevron={<NavigateNextIcon />}
        leftChevron={<NavigateBeforeIcon />}
      >
        {relatedProducts.map(item => {
          return (
            <ItemCard
              key={item.id}
              resetCarousel={setActiveItemIndex}
              setStoreProductInfo={props.setStoreProductInfo}
              relatedProduct={item}
              currentProduct={props.productInfo}
            />
          );
        })}
      </ItemsCarousel>
    </div>
  );
}
