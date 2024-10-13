"use client";
import React, { ReactNode, SetStateAction, useEffect, useState } from "react";
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

export default function Accordion({
  title,
  isOpenControl,
  setIsOpenControl,
  children,
  alwaysOpen,
  defaultOpen,
  headerTemplate,
  ...rest
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(
    isOpenControl
      ? isOpenControl
      : defaultOpen != undefined && !alwaysOpen
      ? defaultOpen
      : true
  );

  useEffect(() => {
    if (isOpenControl != undefined) {
      setIsOpen(isOpenControl);
    }
  }, [isOpenControl]);

  useEffect(() => {
    if (alwaysOpen != undefined && alwaysOpen == true) {
      setIsOpen(true);
    }
  }, [alwaysOpen]);

  useEffect(() => {
    if (defaultOpen != undefined) {
      setIsOpen(defaultOpen);
    }
  }, [defaultOpen]);

  return (
    <div className={"r-accordion-main-box r-box-shadow"} {...rest}>
      <div
        className="r-accordion-header-box"
        onClick={() => {
          if (alwaysOpen == undefined || alwaysOpen == false) {
            setIsOpen(!isOpen);
            setIsOpenControl && setIsOpenControl(!isOpen);
          }
        }}
      >
        <div className={"r-accordion-header-title"}>
          {headerTemplate ? headerTemplate : title ? title : ""}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            isOpen ? "r-accordion-rotate-svg-up" : "r-accordion-rotate-svg-down"
          }
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        className={"r-accordion-content-box"}
        style={{
          maxHeight: isOpenControl || isOpen ? "100dvh" : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
