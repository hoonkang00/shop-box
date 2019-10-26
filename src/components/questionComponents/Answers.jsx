import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Answers({ answer, getAnswers }) {
  let d = new Date(answer.date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let day = d.getDate();
  const [helpful, updateHelpful] = useState(false);

  const markAnswerHelpful = () => {
    axios
      .put(`http://18.223.1.30/qa/answer/${answer.answer_id}/helpful`)
      .then(() => {
        getAnswers();
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [reported, updateReported] = useState(false);

  return (
    <div className="answer-block">
      <div>
        {answer.body}
        <br />
        by {answer.answerer_name} {month}, {day}, {year}{" "}
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Helpful?{" "}
        <span
          className="yes-button"
          onClick={() => {
            if (!helpful) {
              updateHelpful(true);
              markAnswerHelpful();
            }
          }}
        >
          Yes
        </span>{" "}
        {"("}
        {answer.helpfulness}
        {")"} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span
          className="yes-button"
          onClick={() => {
            console.log("yes working");
          }}
        >
          Report
        </span>
      </div>
    </div>
  );
}
