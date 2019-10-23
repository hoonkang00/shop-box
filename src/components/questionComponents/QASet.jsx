// import React from "react";

// export default function QASet() {
//   const getAnswers = () => {

//   };
//   return (
//     <div>
//       <li>Q: render question here</li>
//       <li>A: render answer here</li>
//     </div>
//   );
// }

import React, { Component } from "react";
import axios from "axios";

export default class QASet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
    this.getAnswers = this.getAnswers.bind(this);
  }
  componentDidMount() {
    // this.getAnswers(this.props.question.question_id);
  }
  getAnswers() {
    axios.get("http://18.223.1.30/qa/37/answers").then(({ data }) => {
      console.log(data);
      this.setState({ answers: data.results });
    });
  }

  render() {
    return (
      <div>
        Q: {this.props.question.question_body}
        {/* <Answers/> */}
      </div>
    );
  }
}
