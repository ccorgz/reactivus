import React, { ReactNode } from "react";
import "../../styles/container.css";
type ContainerProps = {
    /**Controls if there will be a shadow property on the container */
    shadow?: boolean;
    /**HTML content to be displayed inside the component */
    children: ReactNode | any;
    /**Defines the flex direction to be set on the container*/
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    /**Defines the flex alignment to be set on the items*/
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "initial" | "inherit";
    /**Control the way the component will handle content wrap*/
    flexWrap?: "wrap" | "nowrap";
    /**Value to be set as a gap between the children*/
    gap?: string;
    /**Custom classname to be set on the component*/
    className?: any;
    /**Custom string value to be set as width*/
    width?: string;
};
export default function Container({ shadow, children, flexDirection, alignItems, flexWrap, gap, className, width, ...rest }: ContainerProps & Record<string, unknown>): React.JSX.Element;
export {};
