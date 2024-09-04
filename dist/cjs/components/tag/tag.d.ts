import React from "react";
import "../../styles/tag.css";
type TagProps = {
    label: string;
    color: "danger" | "success" | "info" | "dark" | "light" | "none" | "warning" | "black" | "white" | string;
    rounded?: boolean;
    icon?: HTMLElement | any;
    iconPosition?: "right" | "left";
    text?: boolean;
    shadow?: boolean;
    border?: boolean;
};
export default function Tag({ label, color, rounded, icon, iconPosition, text, shadow, border, ...rest }: TagProps & Record<string, unknown>): React.JSX.Element;
export {};
