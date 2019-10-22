import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import QAContainer from "../containers/QAContainer.js";
import RelatedItemsContainer from "../containers/RelatedContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductDetails />
        <QAContainer className="q-and-a" />
        <RelatedItemsContainer />
      </div>
    );
  }
}

export default App;
