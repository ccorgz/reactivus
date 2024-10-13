import React from "react";
import "../../styles/progress.css";

type ProgressProps = {
  /**String value to be displayed inside the component when it's rounded or right above it when it's not */
  label?: string;
  /**When it's rounded, controls the label position between right or left. Default will be left */
  labelPosition?: "right" | "left";
  /**String value that controls the styling mode */
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
  /**Value that defines if the progress style will be rounded or a bar */
  rounded?: boolean;
  /**Controls if a shadow will be displayed in the component */
  shadow?: boolean;
  /**Defines the width of the progress */
  width?: string;
  /**Value that controls how much of the progress will be filled */
  percentage: number;
  /**Controls the width of the stroke when it's rounded */
  stroke?: number;
  /**Controls the height of the bar when it's not rounded */
  barHeight?: number;
};

export default function Progress({
  label,
  labelPosition,
  color,
  rounded,
  shadow,
  percentage,
  width,
  stroke,
  barHeight,
  ...rest
}: ProgressProps & Record<string, unknown>) {
  const predefinedColors = [
    "danger",
    "success",
    "info",
    "dark",
    "light",
    "none",
    "warning",
    "black",
  ];

  if (rounded != undefined && rounded == true) {
    return (
      <span
        className={"r-progress-main-box "}
        style={{
          minWidth: width ?? "50px",
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
              className={`${
                predefinedColors.includes(color) ? `r-progress-${color}` : ""
              }`}
              style={{
                stroke: predefinedColors.includes(color) ? undefined : color,
              }}
            />
          </svg>
        )}
      </span>
    );
  } else {
    return (
      <div className={`r-progress-bar-box-main`}>
        <div
          className={`r-progress-bar-box-label`}
          style={{
            justifyContent:
              labelPosition && labelPosition == "right"
                ? "flex-end"
                : "flex-start",
          }}
        >
          {label}
        </div>
        <div
          className={
            (shadow == undefined || (shadow != undefined && shadow == false)
              ? ""
              : "r-box-shadow ") + "r-progress-bar-box"
          }
          style={{
            minWidth: width ?? "50px",
            height: barHeight ? `${barHeight}px` : "6px",
          }}
          {...rest}
        >
          <div
            className={`r-progress-bar ${
              predefinedColors.includes(color) ? `r-progress-${color}` : ""
            }`}
            style={{
              width: `${percentage}%`,
              backgroundColor: predefinedColors.includes(color)
                ? undefined
                : color,
            }}
          />
        </div>
      </div>
    );
  }
}
