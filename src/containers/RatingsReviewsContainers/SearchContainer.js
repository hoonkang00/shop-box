import { connect } from "react-redux";
import SearchReviews from "../../components/ReviewsComponents/SearchReviews.jsx";
const mapStateToProps = store => ({
  reviewList: store.reviews
});
const mapDispatchToProps = dispatch => {
  return {};
};

const SearchReview = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchReviews);

export default SearchReview;
