import React, { ReactNode, SetStateAction } from "react";
import "../../styles/accordion.css";
type AccordionProps = {
    /**Defines the title to be displayed as a header inside the component */
    title: string;
    /**State value to control if the accordion is open or close */
    isOpenControl?: boolean;
    /**State dispatch set state value function */
    setIsOpenControl?: React.Dispatch<SetStateAction<boolean>>;
    /**HTML object to be displayed inside the accordion */
    children: ReactNode | any;
    /**Property that when true keeps the accordion always open */
    alwaysOpen?: boolean;
    /**Property that controls the default open state value */
    defaultOpen?: boolean;
    /**HTML Element that allow custom content display in the header */
    headerTemplate?: HTMLElement | any;
};
export default function Accordion({ title, isOpenControl, setIsOpenControl, children, alwaysOpen, defaultOpen, headerTemplate, ...rest }: AccordionProps): React.JSX.Element;
export {};
