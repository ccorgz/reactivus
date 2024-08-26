import React from "react";

import "../../styles/tag.css";

type TagProps = {
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
    | "white";
  rounded?: boolean;
  icon?: HTMLElement | any;
  iconPosition?: "right" | "left";
  text?: boolean;
  shadow?: boolean;
  border?: boolean;
};

export default function Tag({
  label,
  color,
  rounded,
  icon,
  iconPosition,
  text,
  shadow,
  border,
  ...rest
}: TagProps & Record<string, unknown>) {
  return (
    <span
      className={
        "reactivus-tag-main-box " +
        (shadow == undefined || (shadow != undefined && shadow == false)
          ? ""
          : "r-box-shadow ") +
        (text != undefined
          ? "reactivus-tag-text-" +
            color +
            (border == true ? ` reactivus-tag-text-${color}-border` : "")
          : "reactivus-tag-" + color) +
        (rounded != undefined && rounded == true
          ? " reactivus-tag-rounded"
          : " ")
      }
      {...rest}
    >
      {iconPosition == "left" && icon != undefined && icon}
      <div className="reactivus-tag-label-box">{label}</div>
      {((iconPosition == "right" && icon != undefined) ||
        (icon != undefined && iconPosition != "left")) &&
        icon}
    </span>
  );
}
