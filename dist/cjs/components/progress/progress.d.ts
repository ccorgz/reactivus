import React from "react";
import "../../styles/progress.css";
type ProgressProps = {
    label: string;
    color: "danger" | "success" | "info" | "dark" | "light" | "none" | "warning" | "black" | string;
    rounded?: boolean;
    shadow?: boolean;
    width?: string;
    percentage: number;
    stroke?: number;
};
export default function Progress({ label, color, rounded, shadow, percentage, width, stroke, ...rest }: ProgressProps & Record<string, unknown>): React.JSX.Element;
export {};
