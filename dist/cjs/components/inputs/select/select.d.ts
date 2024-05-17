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
     * React state with value to be set to the component.
     */
    value?: any;
    /**
     * Array containing the defualt value to be displayed in the component.
     */
    defaultValue?: any;
    /**
     * Array with the options to be listed in the component.
     */
    options: Array<any>;
    /**
     * Name of the property to be displayed by default in the options list of the component.
     */
    optionLabel: string;
    /**
     * Custom element to be rendered in the options list of the component.
     */
    optionTemplate?: HTMLElement | any;
    /**
     * Custom data label string that defines wich field will be displayed at the selected fields.
     */
    selectedLabel?: string;
    /**
     * Boolean to control if must be rendered a filter option in the component.
     */
    filter?: boolean;
    /**
     * String to be displayed as a placeholder in the filter text of the component.
     */
    filterPlaceHolder?: string;
    /**
     * String containing the list of fields that the search logic mus consider in the component.
     */
    filterBy?: string;
    /**
     * String to be displayed by default in the component.
     */
    placeholder?: string;
    /**
     * Boolean that controls if multi options can be selected in the component.
     */
    multiSelect?: boolean;
    /**
     * Boolean that controls if the option to select all the options at once will be abled in the component.
     */
    selectAll?: boolean;
    /**
     * Function that returns the value of the component.
     */
    onChange: (selectedOption: any) => void;
    /**
     * Defines a custom className object to be set as the input box styles.
     */
    className?: any;
} & ({} extends {
    multiSelect: boolean;
} ? {
    value: any;
} : {});
export default function Select({ label, width, value, defaultValue, options, optionLabel, selectedLabel, optionTemplate, filter, filterPlaceHolder, filterBy, placeholder, multiSelect, onChange, selectAll, className, ...rest }: SelectInputProps & Record<string, unknown>): React.JSX.Element;
export {};
