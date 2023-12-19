import "../../styles/button.css";

// DEFINE TIPAGEM DE DADOS DO COMPONENTE
interface IButton {
  options: {
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
      | "btn-warning";
    width?: string;
    heigth?: string;
    icon?: any;
    iconPosition?: "left" | "right";
    size?: "btn-sm" | "btn-md" | "btn-lg";
    rounded?: true | false;
    disabled?: true | false;
    tooltip?: {
      show: true | false;
      text: string;
      position: "top" | "right" | "bottom" | "left";
    };
    loading?: boolean;
  };
}

import React from "react";

// EXPORTA COMPONENTE POR PADRÃO
export default function Button({
  options,
  ...rest
}: IButton & Record<string, unknown>) {
  // DEFINE VALOR PARA STYLE OPTIONS
  let styleOp: any = rest.style ?? {};
  styleOp.width = options.width ?? "auto";

  return (
    <button
      className={`buttonMainBox ${options.style ?? "btn-light"} ${
        options.size ?? "btn-md"
      } ${options.disabled ? "btn-disabled" : ""}
      ${options.rounded ? "btn-rounded" : ""}`}
      style={styleOp}
      {...rest}
    >
      {options.tooltip && options.tooltip.show && (
        <span className={`tooltip ${"tooltip-" + options.tooltip.position}`}>
          {options.tooltip?.text}
        </span>
      )}

      {options.iconPosition === "left" && (
        <>{options.loading ? <div className={"loading"} /> : options.icon}</>
      )}
      {options.label}
      {options.iconPosition === "right" && (
        <>{options.loading ? <div className={"loading"} /> : options.icon}</>
      )}
    </button>
  );
}
