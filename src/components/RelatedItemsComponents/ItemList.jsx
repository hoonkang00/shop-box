import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import getRelatedItems from "../../lib/relatedItemsHelpers/relatedItemsApiCall.js";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ItemsCarousel from "react-items-carousel";

export default function ItemList(props) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0)
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
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={2}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={(value)=>{setActiveItemIndex(value)}}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {relatedProducts.map((item)=>{
          return (
            <ItemCard setStoreProductInfo={props.setStoreProductInfo} relatedProduct={item} currentProduct={props.productInfo}/>
        
          )} 
        )}
      </ItemsCarousel>
    </div>
  );
}
