import React from "react";

export default function Answers({ answer }) {
  const d = new Date();
  const year = d.getFullYear(answer.date);
  
  return (
    <div>
      <li>{answer.body}</li>
      <li>
        by {answer.answerer_name}, {Date(answer.date)}
      </li>
    </div>
  );
}
