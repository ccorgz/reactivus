import React from "react";
import "../../styles/tag.css";
type TagProps = {
    /**String value to be displayed inside the component */
    label: string;
    /**Controls the styling type to be set */
    color: "danger" | "success" | "info" | "dark" | "light" | "none" | "warning" | "black" | "white" | string;
    /**Controls if the border will be rounded */
    rounded?: boolean;
    /**Element to be set as an icon inside the component*/
    icon?: HTMLElement | any;
    /**Controls the icon position. Default will be left*/
    iconPosition?: "right" | "left";
    /**Value that controls if the styling mode will be text*/
    text?: boolean;
    /**Controls if a shadow will be rendered on the component*/
    shadow?: boolean;
    /**Controls if the tag component will have a border on it's styling*/
    border?: boolean;
};
export default function Tag({ label, color, rounded, icon, iconPosition, text, shadow, border, ...rest }: TagProps & Record<string, unknown>): React.JSX.Element;
export {};
