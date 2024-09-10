import React, { ReactNode } from "react";
import "../../styles/container.css";
type ContainerProps = {
    shadow?: boolean;
    children: ReactNode | any;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    flexWrap?: "wrap" | "nowrap";
    gap?: string;
    className?: any;
};
export default function Container({ shadow, children, flexDirection, flexWrap, gap, className, ...rest }: ContainerProps & Record<string, unknown>): React.JSX.Element;
export {};
