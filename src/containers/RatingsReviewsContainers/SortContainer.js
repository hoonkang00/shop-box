import { connect } from "react-redux";
import Sort from "../../components/ReviewsComponents/Sort.jsx";
import getReviewList from "../../actions/getReviewList.js";

const mapStateToProps = store => ({ productId: store.productInfo });
const mapDispatchToProps = dispatch => {
  return {
    sortReviews: (page, actionType, productID, count, sort) => {
      dispatch(getReviewList(page, actionType, productID, count, sort));
    }
  };
};

const SortContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);

export default SortContainer;
