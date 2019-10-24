import React from "react";
import { connect } from "react-redux";

const ProductHeader = ({ product, styles, styleIndex }) => {
  const styleName = styles[styleIndex] ? styles[styleIndex].name : "";
  return (
    <div>
      <p className="mockup">{product.category}</p>
      <h2>{product.name}</h2>
      <p className="mockup">{`$${product.default_price}`}</p>
      <p className="mockup">
        <b>STYLE ></b> {styleName}
      </p>
    </div>
  );
};

export default connect(state => ({
  product: state.productInfo,
  styles: state.productStyles,
  styleIndex: state.selectedStyleIndex
}))(ProductHeader);
