import React from "react";
import ProductDetailsContainer from "../containers/ProductDetailsContainer.js";
import QAContainer from "../containers/QAContainer.js";
import RelatedItemsContainer from "../containers/RelatedItemsContainers/RelatedContainer.js";
import RelatedItems from "./RelatedItemsComponents/RelatedItems.jsx";

const App = () => (
  <div className="app-container">
    <div className="nav"></div>
    <ProductDetailsContainer />
    <RelatedItems />
    <QAContainer />
  </div>
);

export default App;
