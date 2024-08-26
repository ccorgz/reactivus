import React from "react";
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
    onChange?: (inputValue: {
        value: boolean;
    }) => void;
};
<<<<<<< HEAD
export default function Switch({ defaultChecked, label, activeColor, onChange, checked }: SwitchProps): React.JSX.Element;
=======
export default function Switch({ defaultChecked, label, activeColor, onChange, checked, }: SwitchProps): React.JSX.Element;
>>>>>>> 44ee67923725c91f9ba2173ca356cb2f7a55ccde
export {};
