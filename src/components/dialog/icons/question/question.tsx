import React from "react";

import "../../../../styles/dialog-icons/questionIcon.css";

const QuestionSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="reactivus-path reactivus-circle"
        fill="none"
        stroke="#60606070"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <text
        className="reactivus-path reactivus-question"
        x="65.1"
        y="75"
        fontSize="70"
        fontFamily="Arial, sans-serif"
        fill="#606060"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ?
      </text>
    </svg>
  );
};

export default QuestionSvg;
