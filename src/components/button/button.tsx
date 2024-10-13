import React from "react";
import "../../styles/button.css";

type ButtonProps = {
  /**Defines the text to be displayed inside the button */
  label?: string;
  /**Defines the button style */
  style?:
    | "btn-primary"
    | "btn-secondary"
    | "btn-danger"
    | "btn-success"
    | "btn-info"
    | "btn-dark"
    | "btn-light"
    | "btn-none"
    | "btn-warning"
    | "btn-black";
  /**Defines the button width. Default will be auto. */
  width?: string;
  /**Defines the button heigth. Default will be auto.  */
  heigth?: string;
  /**Defines the button icon to be displayed inside.  */
  icon?: any;
  /**Defines the button icon position. Default will be left.  */
  iconPosition?: "left" | "right";
  /**Defines the button size. Default will be md.  */
  size?: "btn-sm" | "btn-md" | "btn-lg";
  /**Controls if the button will be rounded.  */
  rounded?: true | false;
  /**Controls if the button is disabled.  */
  disabled?: true | false;
  /**Controls the button tooltip string to be displayed.  */
  tooltip?: string;
  /**Defines the tooltip position.  */
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  /**Controls the button loading state.  */
  loading?: boolean;
  /**Controls if the button is in text style mode. This mode consists of low opacity colors and text colored.  */
  text?: boolean;
  /**Controls the button have a shadow on it or not.  */
  shadow?: boolean;
};

export default function Button({
  label,
  style,
  width,
  heigth,
  icon,
  iconPosition,
  size,
  rounded,
  disabled,
  tooltip,
  tooltipPosition,
  loading,
  text,
  shadow,
  ...rest
}: ButtonProps & Record<string, unknown>) {
  let styleOption: any = rest.style ?? {};
  styleOption.width = width ?? "auto";

  return (
    <button
      className={`r-button-main-box 
      r-${style ?? "btn-light"} r-${size ?? "btn-md"} 
      ${disabled ? "r-btn-disabled" : ""} 
      ${rounded ? "r-btn-rounded" : ""} 
      ${text ? "r-text-button" : ""} 
      ${shadow ? "r-box-shadow" : ""}
      ${rounded && icon && !label ? "r-btn-rounded-icon" : ""}`}
      style={styleOption}
      {...rest}
    >
      {tooltip && (
        <span className={`r-tooltip ${"r-tooltip-" + tooltipPosition}`}>
          {tooltip ?? ""}
        </span>
      )}

      <span className={`r-button-label-icon-box`}>
        {iconPosition != "right" && icon && (
          <>{loading ? <div className={"r-loading"} /> : <span>{icon}</span>}</>
        )}
        {label}
        {iconPosition == "right" && (
          <>{loading ? <div className={"r-loading"} /> : <span>{icon}</span>}</>
        )}
      </span>
    </button>
  );
}
