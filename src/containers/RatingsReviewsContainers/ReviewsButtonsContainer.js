import { connect } from "react-redux";
import ReviewsButtons from "../../components/ReviewsComponents/ReviewButtons.jsx";
import getReviewList from "../../actions/getReviewList.js";

const mapStateToProps = store => ({ productInfo: store.productInfo });
const mapDispatchToProps = dispatch => {
  return {
    handleClick: page => {
      dispatch(getReviewList(page));
    }
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsButtons);

export default ReviewsContainer;
