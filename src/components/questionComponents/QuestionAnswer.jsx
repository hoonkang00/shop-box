import React, { useState, useEffect } from "react";
import SearchQuestions from "./SearchQuestions.jsx";
import QASet from "./QASet.jsx";
import MoreQuestions from "./MoreQuestions.jsx";
import AddQuestion from "./AddQuestion.jsx";
import axios from "axios";

export default function QuestionAnswer(props) {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(2);
  let getQuestions = id => {
    axios
      .get(`http://18.223.1.30/qa/${id}`)
      .then(({ data }) => {
        setQuestions(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let showMoreQuestions = () => {
    setCounter(counter + 2);
  };
  let collapseQuestions = () => {
    setCounter(2);
  };

  useEffect(() => {
    getQuestions(props.productInfo.id);
  }, [props]);

  return (
    <div>
      <div className="q-and-a">
        QUESTIONS & ANSWERS
        <SearchQuestions />
        <div className="q-and-a-scroll">
          {questions.slice(0, counter).map(question => {
            return (
              <QASet
                key={question.question_id}
                question={question}
                product={props.productInfo}
              />
            );
          })}
          <MoreQuestions
            showCollapse={counter >= questions.length}
            showMoreQuestions={showMoreQuestions}
            collapseQuestions={collapseQuestions}
          />
        </div>
        <AddQuestion product={props.productInfo} getQuestions={getQuestions} />
      </div>
    </div>
  );
}
