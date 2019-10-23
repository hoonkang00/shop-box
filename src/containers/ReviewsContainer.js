import { connect } from "react-redux";
import ReviewButtons from "../components/ReviewButtons.jsx";
import ReviewList from "../components/Reviews.jsx";
import getReviewList from "../actions/getReviewList.js";

const mapStateToProps = store => ({ reviews: store.reviews });
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
