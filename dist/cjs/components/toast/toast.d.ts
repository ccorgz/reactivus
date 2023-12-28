import React from "react";
import "../../styles/toast.css";
type positions = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type ContainerProps = {
    /**
     * Indicates the time for the toast to auto close.
     */
    autoClose?: number;
    /**
     * Defines wether the toast will close on click.
     */
    closeOnClick: boolean;
    /**
     * Defines in wich position the toast will be shown.
     */
    position: positions;
};
declare const ToastContainer: (props: ContainerProps) => React.JSX.Element;
type ToastType = {
    success: (text: string, props?: ContainerProps) => void;
    danger: (text: string, props?: ContainerProps) => void;
    info: (text: string, props?: ContainerProps) => void;
    warning: (text: string, props?: ContainerProps) => void;
};
declare const toast: ToastType;
export default toast;
export { ToastContainer };
