import { connect } from "react-redux";
import SearchReviews from "../../components/ReviewsComponents/SearchReviews.jsx";
const mapStateToProps = store => ({
  reviewList: store.reviews
});

const SearchReview = connect(mapStateToProps)(SearchReviews);

export default SearchReview;
