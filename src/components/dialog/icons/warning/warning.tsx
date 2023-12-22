import React from "react";

import "../../../../styles/dialog-icons/warningIcon.css";

const WarningSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="path circle"
        fill="none"
        stroke="#FFA50070"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <text
        className="path warning"
        x="65.1"
        y="75"
        font-size="70"
        font-family="Arial, sans-serif"
        fill="#FFA500"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        !
      </text>
    </svg>
  );
};

export default WarningSvg;
