import { connect } from "react-redux";
import ReviewList from "../../components/ReviewsComponents/Reviews.jsx";
import getReviewList from "../../actions/getReviewList.js";

const mapStateToProps = store => ({
  reviews: store.reviews,
  prodInfo: store.productInfo
});
const mapDispatchToProps = dispatch => {
  return {
    listOfReviews: page => {
      dispatch(getReviewList(page));
    }
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);

export default ReviewsContainer;
