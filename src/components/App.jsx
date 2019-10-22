import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import QuestionAnswer from "./questionComponents/QuestionAnswer.jsx";
import RelatedItemsContainer from "../containers/RelatedContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductDetails />
        <QuestionAnswer/>
        <RelatedItemsContainer />
      </div>
    );
  }
}

export default App;
