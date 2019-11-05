import { connect } from "react-redux";
import MyOutfitsList from "../../components/RelatedItemsComponents/MyOutfitsList.jsx";
import getProductInfo from "../../actions/getProductInfo.js";
import getReviewMetaData from "../../actions/getReviewMetaData.js";

const mapStateToProps = (store, ownProps) => {
  return {
    productInfo: store.productInfo,
    productStyles: store.productStyles,
    reviewMetaData: store.reviewMetaData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStoreProductInfo: id => {
      return dispatch(getProductInfo(id));
    }
  };
};

const MyOutfitsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOutfitsList);

export default MyOutfitsListContainer;
