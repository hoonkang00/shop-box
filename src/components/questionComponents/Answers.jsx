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
      <li>
        {answer.body}
        <br />
        by {answer.answerer_name} {month}, {day}, {year}{" "}
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Helpful? Yes {"("}
        {answer.helpfulness}
        {")"} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Report
      </li>
    </div>
  );
}
