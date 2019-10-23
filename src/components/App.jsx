import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import QAContainer from "../containers/QAContainer.js";
import RelatedItemsContainer from "../containers/RelatedItemsContainers/RelatedContainer.js";

const App = () => (
  <div className="app-container">
    <div className="nav"></div>
    <ProductDetails />
    <RelatedItemsContainer />
    <QAContainer />
  </div>
);

export default App;
