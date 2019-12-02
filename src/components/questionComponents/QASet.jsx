import React, { Component } from "react";
import axios from "axios";
import Answers from "./Answers.jsx";
import AddAnswer from "./AddAnswer.jsx";
import MoreAnswers from "./MoreAnswers.jsx";
import Grid from "@material-ui/core/Grid";

export default class QASet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      counter: 2,
      qHelpful: false,
      reported: false
    };
    this.getAnswers = this.getAnswers.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.reportQuestion = this.reportQuestion.bind(this);
  }
  componentDidMount() {
    this.getAnswers(this.props.question.question_id);
  }

  getAnswers() {
    axios
      .get(
        `http://3.134.102.30/qa/${this.props.question.question_id}/answers/?count=1000`
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
        `http://3.134.102.30/qa/question/${this.props.question.question_id}/helpful`
      )
      .then(() => {
        this.props.getQuestions(this.props.product.id);
      })
      .catch(err => {
        console.log(err);
      });
  }
  reportQuestion() {
    if (!this.state.reported) {
      axios
        .put(
          `http://3.134.102.30/qa/question/${this.props.question.question_id}/report`
        )
        .then(() => {
          this.setState({ reported: true });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    let moreAnswersBtn;
    if (this.state.counter >= this.state.answers.length) {
      moreAnswersBtn = null;
    } else {
      moreAnswersBtn = <MoreAnswers />;
    }
    return (
      <Grid container spacing={4}>
        <Grid item xs={1}>
          <div className="question">
            <div className="question-title">Q:</div>
          </div>
        </Grid>
        <Grid item xs={7}>
          {this.props.question.question_body}
        </Grid>
        <Grid item xs={4}>
          <div className="answer-detail">
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
            {")"} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {this.state.reported ? (
              <span className="yes-button" style={{ color: "red" }}>
                Reported!
              </span>
            ) : (
              <span
                className="yes-button"
                onClick={() => {
                  this.reportQuestion();
                }}
              >
                Report
              </span>
            )}
            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <AddAnswer
              getAnswers={this.getAnswers}
              product={this.props.product}
              qbody={this.props.question.question_body}
              questionId={this.props.question.question_id}
            />
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className="answer">
            <div className="answer-title">A: </div>
          </div>
        </Grid>
        <Grid item xs={7}>
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
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    );
  }
}
