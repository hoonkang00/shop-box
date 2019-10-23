import React, { useState, useEffect } from 'react';
import ProductDetails from "./ProductDetails.jsx";
import RelatedItemsContainer from "../containers/RelatedItemsContainers/RelatedContainer.js";



export default function App(props) {


  return (
    <div>
      <ProductDetails />
        <RelatedItemsContainer />
    </div>
  )
}


