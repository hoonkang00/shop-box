import React, { Component } from "react";
import axios from "axios";
import Answers from "./Answers.jsx";
import AddAnswer from "./AddAnswer.jsx";
import MoreAnswers from "./MoreAnswers.jsx";

export default class QASet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      counter: 2
    };
    this.getAnswers = this.getAnswers.bind(this);
  }
  componentDidMount() {
    this.getAnswers(this.props.question.question_id);
  }
  getAnswers() {
    axios
      .get(`http://18.223.1.30/qa/${this.props.question.question_id}/answers`)
      .then(({ data }) => {
        this.setState({ answers: data.results });
      });
  }

  render() {
    let moreAnswersBtn;
    console.log("counter", this.state.counter);
    console.log("length", this.state.answers.length);
    if (this.state.counter >= this.state.answers.length) {
      moreAnswersBtn = null;
    } else {
      moreAnswersBtn = <MoreAnswers />;
    }
    return (
      <div>
        <div>Q: {this.props.question.question_body}</div>
        <div>
          Helpful? Yes {"("} {this.props.question.question_helpfulness}
          {")"} |
          <AddAnswer qbody={this.props.question.question_body} />
        </div>
        <div>
          A:{" "}
          {this.state.answers.slice(0, this.state.counter).map(answer => {
            return <Answers key={answer.answer_id} answer={answer} />;
          })}
          {this.state.counter >= this.state.answers.length ? null : (
            <MoreAnswers />
          )}
        </div>
      </div>
    );
  }
}
