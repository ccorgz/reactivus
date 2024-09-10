import React, { ReactNode, SetStateAction } from "react";
import "../../styles/accordion.css";
type AccordionProps = {
    title: string;
    isOpenControl?: boolean;
    setIsOpenControl?: React.Dispatch<SetStateAction<boolean>>;
    children: ReactNode | any;
    alwaysOpen?: boolean;
    defaultOpen?: boolean;
    headerTemplate?: HTMLElement | any;
};
export default function Accordion({ title, isOpenControl, setIsOpenControl, children, alwaysOpen, defaultOpen, headerTemplate, ...rest }: AccordionProps): React.JSX.Element;
export {};
