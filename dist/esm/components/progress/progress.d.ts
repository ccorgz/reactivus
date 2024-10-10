import React from "react";
import "../../styles/progress.css";
type ProgressProps = {
    label?: string;
    labelPosition?: 'right' | 'left';
    color: "danger" | "success" | "info" | "dark" | "light" | "none" | "warning" | "black" | string;
    rounded?: boolean;
    shadow?: boolean;
    width?: string;
    percentage: number;
    stroke?: number;
    barHeight?: number;
};
export default function Progress({ label, labelPosition, color, rounded, shadow, percentage, width, stroke, barHeight, ...rest }: ProgressProps & Record<string, unknown>): React.JSX.Element;
export {};
