import React, { ChangeEvent, useRef, useState } from "react";

import "../../../styles/inputs/switch.css";

type SwitchProps = {
  /**
   * Defines if the default value of the checked property of the input checkbox.
   */
  defaultChecked?: boolean;
  /**
   * Defines if the value of the checked property of the input checkbox.
   */
  checked?: boolean;
  /**
   * Defines a text label to be shown above the switch.
   */
  label?: string;
  /**
   * Defines a custom color to be set as background when switch is checked.
   */
  activeColor?: string;
  /**
   * Defines a custom function to be called when the input switch changes it's value.
   */
  onChange?: (inputValue: { value: boolean }) => void;
};

export default function Switch({
  defaultChecked,
  label,
  activeColor,
  onChange,
  checked,
}: SwitchProps) {
  const [isInputChecked, setIsInputChecked] = useState<boolean>(
    defaultChecked ? defaultChecked : checked ? checked : false
  );

  const switchRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsInputChecked(e.target.checked);
    onChange && onChange({ value: e.target.checked });
  };

  return (
    <div
      className={`r-switch-main-box ${
        isInputChecked ? "r-switch-active" : ""
      }  r-box-shadow`}
      style={{
        backgroundColor: isInputChecked && activeColor ? `${activeColor}` : "",
      }}
    >
      <label className="r-switch-main-label">{label ? label : ""}</label>
      <label
        className="r-switch-checkbox-label"
        onClick={() => {
          if (switchRef.current) {
            switchRef.current.click();
          }
        }}
      >
        <div className={"r-switch-button-box"} />
      </label>

      <input
        id={"r-switch-checkbox"}
        type="checkbox"
        checked={checked ?? isInputChecked}
        onChange={handleInputChange}
        ref={switchRef}
      />
    </div>
  );
}
