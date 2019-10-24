import { connect } from "react-redux";
import store from "../../store/store.js";
import ItemList from "../../components/RelatedItemsComponents/ItemList.jsx";
import getProductInfo from "../../actions/getProductInfo.js";
import getReviewMetaData from "../../actions/getReviewMetaData.js";

const mapStateToProps = (store, oldProps) => {
  return {
    productInfo: store.productInfo,
    oldProductInfo: oldProps.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStoreProductInfo: id => {
      return dispatch(getProductInfo(id));
    }
  };
};

const ItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default ItemListContainer;
