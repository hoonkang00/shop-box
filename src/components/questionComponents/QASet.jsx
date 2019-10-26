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
      counter: 2,
      qHelpful: false
    };
    this.getAnswers = this.getAnswers.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
  }
  componentDidMount() {
    this.getAnswers(this.props.question.question_id);
  }

  getAnswers() {
    axios
      .get(
        `http://18.223.1.30/qa/${this.props.question.question_id}/answers/?count=1000`
      )
      .then(({ data }) => {
        this.setState({ answers: data.results });
      });
  }
  showMoreAnswers() {
    this.setState({ counter: this.state.counter + 2 });
  }
  markQuestionHelpful() {
    axios
      .put(
        `http://18.223.1.30/qa/question/${this.props.question.question_id}/helpful`
      )
      .then(() => {
        this.props.getQuestions(this.props.product.id);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let moreAnswersBtn;
    if (this.state.counter >= this.state.answers.length) {
      moreAnswersBtn = null;
    } else {
      moreAnswersBtn = <MoreAnswers />;
    }
    return (
      <div className="q-a-set">
        <div>Q: {this.props.question.question_body}</div>
        <div className="q-a-set-right">
          Helpful? &nbsp;
          <span
            className="yes-button"
            onClick={() => {
              if (!this.state.qHelpful) {
                this.setState({ qHelpful: true });
                this.markQuestionHelpful();
              }
            }}
          >
            Yes
          </span>
          {" ("} {this.props.question.question_helpfulness}
          {")"} |
          <AddAnswer
            getAnswers={this.getAnswers}
            product={this.props.product}
            qbody={this.props.question.question_body}
            questionId={this.props.question.question_id}
          />
        </div>
        <div>
          <div>A: </div>
          {this.state.answers.slice(0, this.state.counter).map(answer => {
            return (
              <Answers
                getAnswers={this.getAnswers}
                key={answer.answer_id}
                answer={answer}
              />
            );
          })}
          {this.state.counter >= this.state.answers.length ? null : (
            <MoreAnswers showMoreAnswers={this.showMoreAnswers} />
          )}
        </div>
      </div>
    );
  }
}
