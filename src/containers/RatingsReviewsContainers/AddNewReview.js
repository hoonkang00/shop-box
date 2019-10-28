import { connect } from "react-redux";
import addReview from "../../actions/addReview.js";
import AddReviewForm from "../../components/ReviewsComponents/AddReviewForm.jsx";

const mapStateToProps = store => ({
  prodMeta: store.reviewMetaData,
  newReview: store.newReview
});
const mapDispatchToProps = dispatch => {
  return {
    handleClick: review => {
      dispatch(addReview(review));
    }
  };
};

const AddReview = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);

export default AddReview;
