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
    | "white"
    | string;
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
        "r-tag-main-box " +
        (shadow == undefined || (shadow != undefined && shadow == false)
          ? ""
          : "r-box-shadow ") +
        (text != undefined
          ? "r-tag-text-" +
            color +
            (border == true ? ` r-tag-text-${color}-border` : "")
          : "r-tag-" + color) +
        (rounded != undefined && rounded == true ? " r-tag-rounded" : " ")
      }
      {...rest}
    >
      {iconPosition == "left" && icon != undefined && icon}
      <div className="r-tag-label-box">{label}</div>
      {((iconPosition == "right" && icon != undefined) ||
        (icon != undefined && iconPosition != "left")) &&
        icon}
    </span>
  );
}
