import React from "react";

import "../../../../styles/dialog-icons/infoIcon.css";

const InfoSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="reactivus-path reactivus-circle"
        fill="none"
        stroke="#2375ac70"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <text
        className="reactivus-path reactivus-info"
        x="65.1"
        y="75"
        fontSize="70"
        fontFamily="Arial, sans-serif"
        fill="#2375ac"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        i
      </text>
    </svg>
  );
};

export default InfoSvg;
