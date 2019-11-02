import { connect } from "react-redux";
import ItemList from "../../components/RelatedItemsComponents/ItemList.jsx";
import getProductInfo from "../../actions/getProductInfo.js";

const mapStateToProps = (store, ownProps) => {
  return {
    productInfo: store.productInfo
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
