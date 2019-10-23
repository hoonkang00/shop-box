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
      questions: []
    };
    this.getQuestions = this.getQuestions.bind(this);
  }
  componentDidMount() {
    //need to update product id from store
    this.getQuestions(1);
    console.log(this.props.getQuestions);
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
  render() {
    return (
      <div>
        <div className="q-and-a">
          QUESTIONS & ANSWERS
          <SearchQuestions />
          {this.state.questions.map(question => {
            return <QASet key={question.question_id} question={question} />;
          })}
          <MoreQuestions />
          <AddQuestion />
        </div>
      </div>
    );
  }
}
