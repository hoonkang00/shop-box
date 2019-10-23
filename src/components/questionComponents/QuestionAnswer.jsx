import React from "react";
import SearchQuestions from "./SearchQuestions.jsx";
import QASet from "./QASet.jsx";

export default function QuestionAnswer() {
  return (
    <div className="q-and-a">
      QUESTIONS & ANSWERS
      <SearchQuestions />
      <QASet />
      more question button add question button
    </div>
  );
}
