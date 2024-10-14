import React, { ReactNode } from "react";
import "../../styles/container.css";

type ContainerProps = {
  /**Controls if there will be a shadow property on the container */
  shadow?: boolean;
  /**HTML content to be displayed inside the component */
  children: ReactNode | any;
  /**Defines the flex direction to be set on the container*/
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  /**Control the way the component will handle content wrap*/
  flexWrap?: "wrap" | "nowrap";
  /**Value to be set as a gap between the children*/
  gap?: string;
  /**Custom classname to be set on the component*/
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
    //teste gabriel
    <div
      className={
        "r-container-flex-main-box " +
        (className ? className : "") +
        (shadow == true ? " r-box-shadow" : "")
      }
      style={{
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        gap: gap,
      }}
      {...rest}
    >
      {children ?? ''}
    </div>
  );
}
