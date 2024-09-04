import React from "react";
import "../../styles/toast.css";
type positions = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type themes = "light" | "colored";
interface ContainerProps {
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
    /**
     * Defines if the pause option will be available on the toast.
     */
    pauseOnHover?: boolean;
    /**
     * Defines the theme type between light and colored. Light is the default.
     */
    theme?: themes;
}
declare const ToastContainer: (props: ContainerProps) => React.JSX.Element;
type ToastType = {
    /**
     * Show a toast with a success (green) style.
     */
    success: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a danger (red) style.
     */
    error: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a info (blue) style.
     */
    info: (text: string, props?: ContainerProps) => void;
    /**
     * Show a toast with a warn (orange/yellow) style.
     */
    warn: (text: string, props?: ContainerProps) => void;
    /**
     * Dismiss all the toasts.
     */
    dismiss: () => void;
};
declare const toast: ToastType;
export default toast;
export { ToastContainer };
