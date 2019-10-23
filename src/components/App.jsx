import React from "react";
import ProductDetailsContainer from "../containers/ProductDetailsContainer.js";
import QAContainer from "../containers/QAContainer.js";
import RelatedItemsContainer from "../containers/RelatedItemsContainers/RelatedContainer.js";

const App = () => (
  <div className="app-container">
    <div className="nav"></div>
    <ProductDetailsContainer />
    <RelatedItemsContainer />
    <QAContainer />
  </div>
);

export default App;
