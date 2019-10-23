import { connect } from "react-redux";
import getProductInfo from "../actions/getProductInfo.js";
import ProductDetails from "../components/ProductDetails.jsx";
import getProductStyles from "../actions/getProductStyles.js";

export default connect(
  state => ({
    product: state.productInfo,
    styles: state.productStyles
  }),
  dispatch => ({
    handleLoadProduct: () => dispatch(getProductInfo()),
    handleLoadStyles: id => dispatch(getProductStyles(id))
  })
)(ProductDetails);
