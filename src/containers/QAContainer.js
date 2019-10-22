import { connect } from "react-redux";
import QuestionAnswer from "../components/questionComponents/QuestionAnswer.jsx";

const mapStateToProps = store => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // storeProductInfo: id => {
    //   return dispatch(getProductInfo(id));
    // }
  };
};

const QAContainer = connect(
  mapStateToProps
  //   ,
  //   mapDispatchToProps
)(QuestionAnswer);

export default QAContainer;
