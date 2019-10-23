// import React from "react";
import SearchQuestions from "./SearchQuestions.jsx";
import QASet from "./QASet.jsx";
import MoreQuestions from "./MoreQuestions.jsx";
import AddQuestion from "./AddQuestion.jsx";

// export default function QuestionAnswer() {
//   return (
//     <div className="q-and-a">
//       QUESTIONS & ANSWERS
//       {console.log(props.getQuestion())}
//       <SearchQuestions />
//       <QASet />
//       more question button add question button
//     </div>
//   );
// }

import React, { Component } from "react";
import axios from "axios";

export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      counter: 2
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.collapseQuestions = this.collapseQuestions.bind(this);
  }
  componentDidMount() {
    //need to update product id from store
    this.getQuestions(1);
    //need to sort questions
    // console.log(this.props.getQuestions);
  }
  collapseQuestions() {
    console.log("checking collapse");
    this.setState({ counter: 2 });
  }
  getQuestions(id) {
    //need to update productid
    axios
      .get(`http://18.223.1.30/qa/${id}`)
      .then(({ data }) => {
        console.log("results", data.results);
        this.setState({ questions: data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showMoreQuestions() {
    console.log("show more qs check");
    this.setState({ counter: this.state.counter + 2 });
  }
  render() {
    return (
      <div>
        <div className="q-and-a">
          QUESTIONS & ANSWERS
          <SearchQuestions />
          {this.state.questions.slice(0, this.state.counter).map(question => {
            return <QASet key={question.question_id} question={question} />;
          })}
          <MoreQuestions
            showCollapse={this.state.counter >= this.state.questions.length}
            showMoreQuestions={this.showMoreQuestions}
            collapseQuestions={this.collapseQuestions}
          />
          <AddQuestion />
        </div>
      </div>
    );
  }
}
