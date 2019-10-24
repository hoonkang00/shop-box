import { connect } from "react-redux";
import Ratings from "../../components/ReviewsComponents/Ratings.jsx";

const mapStateToProps = store => ({ rating: store.reviewMetaData });

const RatingsContainer = connect(mapStateToProps)(Ratings);

export default RatingsContainer;
