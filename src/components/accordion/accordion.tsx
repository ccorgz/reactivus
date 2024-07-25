import React, { ReactNode, SetStateAction, useEffect, useState } from "react";

import "../../styles/accordion.css";

type AccordionProps = {
  title: string;
  isOpenControl?: boolean;
  setIsOpenControl?: React.Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  alwaysOpen?: boolean;
};

export default function Accordion({
  title,
  isOpenControl,
  setIsOpenControl,
  children,
  alwaysOpen,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(
    isOpenControl ? isOpenControl : true
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

  return (
    <div className={"reactivus-accordion-main-box"}>
      <div
        className="reactivus-accordion-header-box"
        onClick={() => {
          if (alwaysOpen == undefined || alwaysOpen == false) {
            setIsOpen(!isOpen);
            setIsOpenControl && setIsOpenControl(!isOpen);
          }
        }}
      >
        <div className={"reactivus-accordion-header-title"}>
          {title ? title : ""}
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
            isOpen
              ? "reactivus-accordion-rotate-svg-up"
              : "reactivus-accordion-rotate-svg-down"
          }
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        className={"reactivus-accordion-content-box"}
        style={{
          maxHeight: isOpenControl || isOpen ? "100dvh" : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
