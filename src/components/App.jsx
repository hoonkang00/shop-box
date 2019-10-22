import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import QuestionAnswer from "./questionComponents/QuestionAnswer.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductDetails />
        <QuestionAnswer/>
      </div>
    );
  }
}

export default App;
