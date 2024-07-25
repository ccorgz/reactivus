import React, { ReactNode, SetStateAction } from "react";
import "../../styles/accordion.css";
type AccordionProps = {
    title: string;
    isOpenControl?: boolean;
    setIsOpenControl?: React.Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    alwaysOpen?: boolean;
};
export default function Accordion({ title, isOpenControl, setIsOpenControl, children, alwaysOpen, }: AccordionProps): React.JSX.Element;
export {};
