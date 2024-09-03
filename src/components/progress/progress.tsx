import React from "react";

import "../../styles/progress.css";

type ProgressProps = {
  label: string;
  color:
    | "danger"
    | "success"
    | "info"
    | "dark"
    | "light"
    | "none"
    | "warning"
    | "black"
    | string;
  rounded?: boolean;
  shadow?: boolean;
  width?: string;
  percentage: number;
  stroke?: number;
};

export default function Progress({
  label,
  color,
  rounded,
  shadow,
  percentage,
  width,
  stroke,
  ...rest
}: ProgressProps & Record<string, unknown>) {
  if (rounded != undefined && rounded == true) {
    return (
      <span
        className={"r-progress-main-box "}
        style={{
          minWidth: `${width}` ?? "50px",
        }}
        {...rest}
      >
        <label className="r-progress-label-box">{label}</label>
        {rounded != undefined && rounded == true && (
          <svg viewBox="0 0 36 36">
            <path
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#d3d3d350"
              strokeWidth={stroke ?? 2}
            />
            <path
              d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeWidth={stroke ?? 2}
              strokeLinecap="round"
              strokeDasharray={(percentage == 0 ? 100 : percentage) + ", 100"}
              className={"r-progress-" + color}
            />
          </svg>
        )}
      </span>
    );
  } else {
    return (
      <span
        className={
          (shadow == undefined || (shadow != undefined && shadow == false)
            ? ""
            : "r-box-shadow ") + "r-progress-bar-main-box"
        }
        style={{
          minWidth: `${width}` ?? "50px",
        }}
        {...rest}
      >
        <label className="r-progress-bar-label-box">{label}</label>
        <div
          className={`r-progress-bar-box r-progress-${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </span>
    );
  }
}
