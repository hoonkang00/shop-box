import { connect } from "react-redux";
import Stars from "../../components/ReviewsComponents/Stars.jsx";

const mapStateToProps = store => ({ rating: store.reviewMetaData });

const StarsContainer = connect(mapStateToProps)(Stars);

export default StarsContainer;
