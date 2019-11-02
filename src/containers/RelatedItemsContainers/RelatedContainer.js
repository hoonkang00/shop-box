import { connect } from "react-redux";
import getProductInfo from "../../actions/getProductInfo.js";
import store from "../../store/store.js";
import RelatedItems from "../../components/RelatedItemsComponents/RelatedItems.jsx";
import getReviewMetaData from "../../actions/getReviewMetaData.js";

const mapStateToProps = (store, ownProps) => {
  return {
    productInfo: store.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStoreProductInfo: id => {
      return dispatch(getProductInfo(id));
    },

    setStoreReviewMetaData: id => {
      return dispatch(getReviewMetaData(id));
    }
  };
};

const RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedItems);

export default RelatedItemsContainer;
