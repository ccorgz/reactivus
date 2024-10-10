"use client"

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
   * Defines a function to be called when clicked in the input icon.
   */
  iconAction?: any;
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
  inputRef?: React.Ref<any>;
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
  /**
   * Defines a custom className object to be set as the input box styles.
   */
  className?: any;
  /**
   * Defines a custom string value to be displayed bellow the input as a description of it.
   */
  description?: string;
  /**
   * Defines a custom color for the description.
   */
  descriptionColor?: 'success' | 'danger' | 'info' | 'warning' | 'default';
}

// EXPORTA COMPONENTE POR PADRÃO
const Input = ({
  onKeyDown,
  type,
  icon,
  iconPosition,
  iconAction,
  label,
  width,
  placeholder,
  password,
  size,
  className,
  description,
  descriptionColor,
  inputRef,
  ...rest
}: InputProps & Record<string, unknown>) => {
  const [seePwd, setSeePwd] = useState(false);

  return (
    <div className="r-input-main-box" style={{ width: width }}>
      {label && <label className="r-input-main-box-label">{label}</label>}
      <div
        {...rest}
        className={
          "r-input-box r-box-shadow " +
          ("r-input-" +( size ?? "md")) +
          " " +
          (className ? className : "")
        }
      >
        {icon &&
          (!iconPosition || (iconPosition && iconPosition == "left")) && (
            <span onClick={() => iconAction && iconAction()}>{icon}</span>
          )}
        <input
          type={type == "password" && seePwd ? "text" : type}
          placeholder={placeholder ?? ""}
          {...rest}
          ref={inputRef ?? null}
          onChange={(e: any) => e.preventDefault()}
          onKeyDown={onKeyDown}
        />
        {password?.seePwd && (
          <span
            onClick={(e) => setSeePwd(!seePwd)}
            style={{ cursor: "pointer" }}
          >
            {seePwd ? password?.onIcon : password?.offIcon}{" "}
          </span>
        )}
        {icon && iconPosition && iconPosition == "right" && (
          <span onClick={() => iconAction && iconAction()}>{icon}</span>
        )}
      </div>
      {description && description.length > 0 && (
        <span className={`r-input-box-description r-input-box-description-${descriptionColor ?? 'default'}`}>{description}</span>
      )}
    </div>
  );
};

export default Input;
