import { connect } from "react-redux";
import addReview from "../../actions/addReview.js";
import AddReviewForm from "../../components/ReviewsComponents/AddReviewForm.jsx";

const mapStateToProps = store => ({ prodId: store.productInfo.id });
const mapDispatchToProps = dispatch => {
  return {
    handleClick: prodId => {
      dispatch(addReview(prodId));
    }
  };
};

const AddReview = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);

export default AddReview;
