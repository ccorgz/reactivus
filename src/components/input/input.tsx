import React, { useState } from "react";

import "../../styles/input.css";

interface InputProps {
  /**
   * Defines the type of the input. (For a select input type, use the <Select /> component.)
   */
  type: "text" | "password" | "date" | "number";
  /**
   * Defines the icon to be rendered inside the input box.
   */
  icon?: any;
  /**
   * Defines the position the icon must be rendered inside the input box.
   */
  iconPosition?: "left" | "right";
  /**
   * Defines the text label to be displayed as a description outisde the input box.
   */
  label?: string;
  /**
   * Defines a custom width string value to be used in the input box.
   */
  width?: string;
  /**
   * Defines a custom React Ref variable to be set in the input.
   */
  ref?: React.Ref<any>;
  /**
   * Defines a string to be displayed as a placeholder in the input.
   */
  placeholder?: string;
  /**
   * Defines a custom object to control the input when it is set to be a password input type.
   */
  password?: {
    /**
     * Defines if will be displayed an option so the user can view the password informed.
     */
    seePwd?: boolean;
    /**
     * Defines the icon to be displayed to show the password.
     */
    onIcon?: any;
    /**
     * Defines the icon to be displayed to hide the password.
     */
    offIcon?: any;
  };
  /**
   * Defines a custom function to be called when a key is pressed in the input.
   */
  onKeyDown?: any;
  /**
   * Defines a custom size for the component. (md is set by default)
   */
  size?: "sm" | "md";
}

// EXPORTA COMPONENTE POR PADRÃO
export default function Input({
  options,
  onKeyDown,
  type,
  icon,
  iconPosition,
  label,
  width,
  ref,
  placeholder,
  password,
  size,
  ...rest
}: InputProps & Record<string, unknown>) {
  const [seePwd, setSeePwd] = useState(false);

  return (
    <div
      {...rest}
      className={"reactivus-input-box " + ("reactivus-input-" + size ?? "md")}
      style={{ width: width }}
    >
      {label && <label>{label}</label>}
      {icon && (!iconPosition || (iconPosition && iconPosition == "left")) && (
        <span>{icon}</span>
      )}
      <input
        type={type == "password" && seePwd ? "text" : type}
        placeholder={placeholder ?? ""}
        {...rest}
        ref={ref ?? null}
        onChange={(e: any) => e.preventDefault()}
        onKeyDown={onKeyDown}
      />
      {password?.seePwd && (
        <span onClick={(e) => setSeePwd(!seePwd)} style={{ cursor: "pointer" }}>
          {seePwd ? password?.onIcon : password?.offIcon}{" "}
        </span>
      )}
      {icon && iconPosition && iconPosition == "right" && <span>{icon}</span>}
    </div>
  );
}
