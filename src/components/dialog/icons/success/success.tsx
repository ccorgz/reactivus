import React from "react";

import "../../../../styles/dialog-icons/successIcon.css";

const SuccessSvg = () => {
  return (
    <svg version="1.1" viewBox="0 0 130.2 130.2">
      <circle
        className="r-path r-circle"
        fill="none"
        stroke="#73AF5570"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        className="r-path r-check"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
  );
};

export default SuccessSvg;
