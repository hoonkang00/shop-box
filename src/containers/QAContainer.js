import { connect } from "react-redux";
import QuestionAnswer from "../components/questionComponents/QuestionAnswer.jsx";
import getQuestions from "../actions/getQuestions.js";

const mapStateToProps = store => {
  return {
    questions: store.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: id => {
      return dispatch(getQuestions(id));
    }
  };
};

const QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswer);

export default QAContainer;
