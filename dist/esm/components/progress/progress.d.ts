import React from "react";
import "../../styles/progress.css";
type ProgressProps = {
    /**String value to be displayed inside the component when it's rounded or right above it when it's not */
    label?: string;
    /**When it's rounded, controls the label position between right or left. Default will be left */
    labelPosition?: "right" | "left";
    /**String value that controls the styling mode */
    color: "danger" | "success" | "info" | "dark" | "light" | "none" | "warning" | "black" | string;
    /**Value that defines if the progress style will be rounded or a bar */
    rounded?: boolean;
    /**Controls if a shadow will be displayed in the component */
    shadow?: boolean;
    /**Defines the width of the progress */
    width?: string;
    /**Value that controls how much of the progress will be filled */
    percentage: number;
    /**Controls the width of the stroke when it's rounded */
    stroke?: number;
    /**Controls the height of the bar when it's not rounded */
    barHeight?: number;
};
export default function Progress({ label, labelPosition, color, rounded, shadow, percentage, width, stroke, barHeight, ...rest }: ProgressProps & Record<string, unknown>): React.JSX.Element;
export {};
