import { connect } from "react-redux";
import GetMoreReviewsButton from "../components/ReviewsComponents/ReviewButtons.jsx";
import getReviewList from "../actions/getReviewList.js";

const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => {
  return {
    handleClickGetReviews: page => {
      dispatch(getReviewList(page));
    }
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetMoreReviewsButton);

export default ReviewsContainer;
