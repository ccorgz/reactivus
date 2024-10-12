import React from "react";
import "../../../styles/inputs/select.css";
type SelectInputProps = {
    /**
     * Text to be displayed as a label above the component.
     */
    label?: string;
    /**
     * Custom value for width style of the component.
     */
    width?: string;
    /**
     * Array containing the default value to be displayed in the component.
     */
    defaultValue?: any;
    /**
     * Array with the options to be listed in the component.
     */
    options: Array<any>;
    /**
     * Name of the property to be displayed by default in the options list of the component.
     * This is optional if `options` is an array of strings.
     */
    optionLabel?: string;
    /**
     * Custom element to be rendered in the options list of the component.
     */
    optionTemplate?: HTMLElement | any;
    /**
     * Custom data label string that defines which field will be displayed at the selected fields.
     */
    selectedLabel?: string;
    /**
     * Boolean to control if a filter option must be rendered in the component.
     */
    filter?: boolean;
    /**
     * String to be displayed as a placeholder in the filter text of the component.
     */
    filterPlaceHolder?: string;
    /**
     * String containing the list of fields that the search logic must consider in the component.
     */
    filterBy?: string;
    /**
     * String to be displayed by default in the component.
     */
    placeholder?: string;
    /**
     * React state that determines if multiple options can be selected.
     */
    multiSelect?: boolean;
    /**
     * Function that returns the value of the component.
     */
    onChange?: (selectedOption: {
        value: any;
    }) => void;
    /**
     * Defines a custom className object to be set as the input box styles.
     */
    className?: any;
} & ({
    multiSelect: true;
    /**
     * Optional property that enables the selection of all options at once.
     * This property is only allowed if `multiSelect` is true.
     */
    selectAll?: boolean;
    /**
     * React state with value to be set to the component.
     */
    value: any;
} | {
    multiSelect?: false;
    value?: any;
    selectAll?: never;
}) & ({
    options: string[];
    optionLabel?: never;
} | {
    options: Array<any>;
    optionLabel: string;
});
export default function Select({ label, width, value, defaultValue, options, optionLabel, selectedLabel, optionTemplate, filter, filterPlaceHolder, filterBy, placeholder, multiSelect, onChange, selectAll, className, ...rest }: SelectInputProps & Record<string, unknown>): React.JSX.Element;
export {};
