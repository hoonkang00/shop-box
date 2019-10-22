import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import RelatedItemsContainer from "../containers/RelatedContainer.js";

const App = () => (
  <div className="app-container">
    <div className="nav"></div>
    <ProductDetails />
    <RelatedItemsContainer />
  </div>
);

export default App;
