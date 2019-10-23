import { connect } from "react-redux";
import ReviewButtons from "../components/ReviewButtons.jsx";
import ReviewList from "../components/ReviewList.jsx";

const mapStateToProps = store => ({ reviews: store.reviews });
// const mapDispatchToProps = (dispatch) => {
//     return {
//         listOfReviews: (reviews) => {dispatch()}
//     }
// }

const ReviewsContainer = connect(mapStateToProps)(ReviewList);

export default ReviewsContainer;
