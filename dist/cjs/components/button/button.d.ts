import "../../styles/button.css";
interface IButton {
    options: {
        label?: string;
        style?: "btn-primary" | "btn-secondary" | "btn-danger" | "btn-success" | "btn-info" | "btn-dark" | "btn-light" | "btn-none" | "btn-warning";
        width?: string;
        heigth?: string;
        icon?: any;
        iconPosition?: "left" | "right";
        size?: "btn-sm" | "btn-md" | "btn-lg";
        rounded?: true | false;
        disabled?: true | false;
        tooltip?: {
            show: true | false;
            text: string;
            position: "top" | "right" | "bottom" | "left";
        };
        loading?: boolean;
    };
}
import React from "react";
export default function Button({ options, ...rest }: IButton & Record<string, unknown>): React.JSX.Element;
export {};
