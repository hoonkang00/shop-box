import { connect } from "react-redux";
import Ratings from "../../components/ReviewsComponents/Ratings.jsx";
import getFilteredReviewsList from "../../actions/getFilteredReviewsList.js";
import getReviewList from "../../actions/getReviewList.js";

const mapStateToProps = store => ({ rating: store.reviewMetaData });
const mapDispatchToProps = dispatch => {
  return {
    handleClick: actionType => {
      dispatch(getFilteredReviewsList(actionType));
    },
    clear: page => {
      dispatch(getReviewList(page));
    }
  };
};

const RatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ratings);

export default RatingsContainer;
