import { connect } from "react-redux";
import getProductInfo from "../actions/getProductInfo.js";
import store from "../store/store.js"
import RelatedItems from "../components/RelatedItems.jsx"

const mapStateToProps = (store, oldProps) => {
  return { productInfo: store.productInfo, oldProductInfo: oldProps.productInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeProductInfo: (id) => {
      return dispatch(getProductInfo(id));
    }
  };
};




const RelatedItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RelatedItems)


export default RelatedItemsContainer