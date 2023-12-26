import React from "react";

import "../../../../styles/dialog-icons/dangerIcon.css";

const DangerSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="reactivus-path reactivus-circle"
        fill="none"
        stroke="#CB2A29B9"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <line
        className="reactivus-path reactivus-cross1"
        fill="none"
        stroke="#CB2A29"
        strokeWidth="6"
        strokeLinecap="round"
        x1="40.2"
        y1="40.2"
        x2="90"
        y2="90"
      />
      <line
        className="reactivus-path reactivus-cross2"
        fill="none"
        stroke="#CB2A29"
        strokeWidth="6"
        strokeLinecap="round"
        x1="90"
        y1="40.2"
        x2="40.2"
        y2="90"
      />
    </svg>
  );
};

export default DangerSvg;
