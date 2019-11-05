import { connect } from "react-redux";
import ReviewsButtons from "../../components/ReviewsComponents/ReviewButtons.jsx";
import getReviewList from "../../actions/getReviewList.js";
import addReview from "../../actions/addReview.js";
import clearForm from "../../actions/clearForm.js";
import updateReview from "../../lib/reviewsHelperFunctions/updateReviews.js";

const mapStateToProps = store => ({
  productInfo: store.productInfo,
  prodMeta: store.reviewMetaData,
  newReview: store.newReview,
  numOfReviews: store.reviews.results ? store.reviews.results.length : 0
});
const mapDispatchToProps = dispatch => {
  return {
    handleClick: page => {
      dispatch(getReviewList(page));
    },
    addNewReview: review => {
      dispatch(addReview(review));
    },
    clearReviewForm: () => {
      dispatch(clearForm());
    }
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsButtons);

export default ReviewsContainer;
