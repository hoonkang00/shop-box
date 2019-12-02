import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Answers({ answer, getAnswers }) {
  let d = new Date(answer.date.replace(/-/g, "/").replace(/T.+/, ""));
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
  // console.log("full date", answer.date);
  // console.log("hellooo");
  // console.log("full month", month);
  // console.log("full day", day);

  const markAnswerHelpful = () => {
    axios
      .put(`http://3.134.102.30/qa/answer/${answer.answer_id}/helpful`)
      .then(() => {
        getAnswers();
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [reported, markReported] = useState(false);
  const reportAnswer = () => {
    if (!reported) {
      axios
        .put(`http://3.134.102.30/qa/answer/${answer.answer_id}/report`)
        .then(() => {
          markReported(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      {answer.body}
      <div>
        {answer.photos.length > 0
          ? answer.photos.map(photo => {
              return (
                <img
                  className="answer-photo"
                  src={photo.url}
                  alt="answer photo"
                  key={photo.id}
                  height="100"
                ></img>
              );
            })
          : null}
        <div className="answer-detail">
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
          {reported ? (
            <span className="yes-button" style={{ color: "red" }}>
              Reported!
            </span>
          ) : (
            <span className="yes-button" onClick={reportAnswer}>
              Report
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
