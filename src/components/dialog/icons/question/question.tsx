import React from "react";

import "./questionIcon.css";

const QuestionSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="path circles"
        fill="none"
        stroke="#60606070"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <text
        className="path question"
        x="65.1"
        y="75"
        font-size="70"
        font-family="Arial, sans-serif"
        fill="#60606070"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ?
      </text>
    </svg>
  );
};

export default QuestionSvg;
