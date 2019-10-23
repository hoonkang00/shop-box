import { connect } from "react-redux";
import store from "../../store/store.js";
import ItemList from "../../components/RelatedItemsComponents/ItemList.jsx";

const mapStateToProps = (store, oldProps) => {
  return {
    productInfo: store.productInfo,
    oldProductInfo: oldProps.productInfo
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setStoreProductInfo: id => {
//       return dispatch(getProductInfo(id));
//     },

//     setStoreReviewMetaData: id => {
//       return dispatch(getReviewMetaData(id));
//     }
//   };
// };

const ItemListContainer = connect(mapStateToProps)(ItemList);

export default ItemListContainer;
