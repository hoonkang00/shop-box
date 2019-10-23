import React from "react";

export default function ItemCard(props) {
    const defaultStyle = styles => {
        if (styles === undefined || styles.length === 0) {
          return null;
        }
      
        return styles.reduce(
          (memo, item) => (item["default?"] === 1 ? item : memo),
          styles[0]
        );
      };
      console.log(defaultStyle(props.relatedProduct.results))
  return (
      <div>
          <img src={defaultStyle(props.relatedProduct.results).photos[0].thumbnail_url}/>
          <h4>{props.relatedProduct.category}</h4>
          <h3>{props.relatedProduct.name}</h3>
          <h4>${props.relatedProduct.default_price}</h4>

      
      </div>




  )
}
