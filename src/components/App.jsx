import React from "react";
import ProductDetailsContainer from "../containers/ProductDetailsContainer.js";
import RelatedItemsContainer from "../containers/RelatedContainer.js";

const App = () => (
  <div className="app-container">
    <div className="nav"></div>
    <ProductDetailsContainer />
    <RelatedItemsContainer />
  </div>
);

export default App;
