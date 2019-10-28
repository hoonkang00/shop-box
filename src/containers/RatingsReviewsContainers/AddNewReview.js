import { connect } from "react-redux";
import AddReviewForm from "../../components/ReviewsComponents/AddReviewForm.jsx";

const mapStateToProps = store => ({
  prodMeta: store.reviewMetaData,
  newReview: store.newReview
});

const AddReview = connect(mapStateToProps)(AddReviewForm);

export default AddReview;
