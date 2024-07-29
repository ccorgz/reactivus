import React, { ReactNode } from "react";

import "../../styles/container.css";

type ContainerProps = {
  shadow?: boolean;
  children: ReactNode;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "wrap" | "nowrap";
  gap?: string;
  className?: any;
};

export default function Container({
  shadow,
  children,
  flexDirection,
  flexWrap,
  gap,
  className,
  ...rest
}: ContainerProps & Record<string, unknown>) {
  return (
    <div
      className={
        "reactivus-container-flex-main-box " +
        (className ? className : "") +
        (shadow == true ? " reactivus-box-shadow" : "")
      }
      style={{
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        gap: gap,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
