import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import getRelatedItems from "../../lib/relatedItemsHelpers/relatedItemsApiCall.js";

export default function ItemList(props) {
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
      {relatedProducts.map(item => {
        return <ItemCard key={item.id} relatedProduct={item} currentProduct={props.productInfo} />;
      })}
    </div>
  );
}