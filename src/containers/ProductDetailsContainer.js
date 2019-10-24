import { connect } from "react-redux";
import getProductInfo from "../actions/getProductInfo.js";
import ProductDetails from "../components/Product Details/ProductDetails.jsx";
import getProductStyles from "../actions/getProductStyles.js";
import getReviewMetaData from "../actions/getReviewMetaData.js";

export default connect(
  state => ({
    product: state.productInfo,
    styles: state.productStyles,
    selectedStyleIndex: state.selectedStyleIndex
  }),
  dispatch => ({
    handleLoadProduct: id => dispatch(getProductInfo(id)),
    handleLoadStyles: id => dispatch(getProductStyles(id)),
    handleLoadMetadata: id => dispatch(getReviewMetaData(id))
  })
)(ProductDetails);
