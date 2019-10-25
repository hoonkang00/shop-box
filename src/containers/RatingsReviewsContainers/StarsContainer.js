import { connect } from "react-redux";
import Ratings from "../../components/ReviewsComponents/Ratings.jsx";
import getFilteredReviewsList from "../../actions/getFilteredReviewsList.js";

const mapStateToProps = store => ({ rating: store.reviewMetaData });
const mapDispatchToProps = dispatch => {
  return {
    handleClick: actionType => {
      dispatch(getFilteredReviewsList(actionType));
    }
  };
};

const RatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ratings);

export default RatingsContainer;
