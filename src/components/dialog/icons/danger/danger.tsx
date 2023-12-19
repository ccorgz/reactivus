import React from "react";

import "./dangerIcon.css";

const SuccessSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="path circle"
        fill="none"
        stroke="#CB2A29B9"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <line
        className="path cross1"
        fill="none"
        stroke="#CB2A29B9"
        stroke-width="6"
        stroke-linecap="round"
        x1="40.2"
        y1="40.2"
        x2="90"
        y2="90"
      />
      <line
        className="path cross2"
        fill="none"
        stroke="#CB2A29B9"
        stroke-width="6"
        stroke-linecap="round"
        x1="90"
        y1="40.2"
        x2="40.2"
        y2="90"
      />
    </svg>
  );
};

export default SuccessSvg;
