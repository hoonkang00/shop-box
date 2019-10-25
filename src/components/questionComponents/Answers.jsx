import React from "react";

export default function Answers({ answer }) {
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
            console.log("yes working");
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
