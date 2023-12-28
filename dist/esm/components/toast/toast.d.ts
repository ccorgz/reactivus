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
    /**
     * Show a toast with a success (green) style.
     */
    success: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a danger (red) style.
     */
    danger: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a info (blue) style.
     */
    info: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a warning (orange/yellow) style.
     */
    warning: (text: string, props?: ContainerProps) => void;
    /**
     * Dismiss all the toasts.
     */
    dismiss: () => void;
};
declare const toast: ToastType;
export default toast;
export { ToastContainer };
