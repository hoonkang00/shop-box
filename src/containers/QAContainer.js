import { connect } from "react-redux";
import QuestionAnswer from "../components/questionComponents/QuestionAnswer.jsx";
import getProductInfo from "../actions/getProductInfo.js";

const mapStateToProps = store => ({
  productInfo: store.productInfo
});

const QAContainer = connect(mapStateToProps)(QuestionAnswer);

export default QAContainer;
