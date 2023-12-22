import React from "react";

import "../../../../styles/dialog-icons/infoIcon.css";

const InfoSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="path circle"
        fill="none"
        stroke="#2375ac70"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <text
        className="path info"
        x="65.1"
        y="75"
        font-size="70"
        font-family="Arial, sans-serif"
        fill="#2375ac"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        i
      </text>
    </svg>
  );
};

export default InfoSvg;
