// import React from "react";
import SearchQuestions from "./SearchQuestions.jsx";
import QASet from "./QASet.jsx";

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
    this.getQuestions(1);
    // console.log(props.setStoreProductInfo);
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
            return <QASet question={question} />;
          })}
          more question button add question button
        </div>
      </div>
    );
  }
}
