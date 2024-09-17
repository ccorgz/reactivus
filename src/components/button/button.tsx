import "../../styles/button.css";

// DEFINE TIPAGEM DE DADOS DO COMPONENTE
type ButtonProps = {
  label?: string;
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
  width?: string;
  heigth?: string;
  icon?: any;
  iconPosition?: "left" | "right";
  size?: "btn-sm" | "btn-md" | "btn-lg";
  rounded?: true | false;
  disabled?: true | false;
  tooltip?: string;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  loading?: boolean;
  text?: boolean;
  shadow?: boolean;
};

import React from "react";

// EXPORTA COMPONENTE POR PADRÃO
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
  // DEFINE VALOR PARA STYLE OPTIONS
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
        <span
          className={`r-tooltip ${
            "r-tooltip-" + tooltipPosition
          }`}
        >
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
