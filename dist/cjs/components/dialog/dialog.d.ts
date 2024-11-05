import "../../styles/dialog.css";
type icons = "success" | "danger" | "info" | "question" | "warning";
type styles = "primary" | "secondary" | "danger" | "success" | "info" | "dark" | "light" | "none";
type positions = "top-center" | "top-left" | "top-right" | "center" | "center-left" | "center-right" | "bottom-center" | "bottom-left" | "bottom-right";
type AlertProps = {
    /**
     * Title to be displayed as a header in the dialog.
     */
    title?: string;
    /**
     * Title to be displayed as a top-left header in the dialog.
     */
    headerTitle?: string;
    /**
     * Description text to be displayed right bellow the title.
     */
    text?: string;
    /**
     * Controls if the cancel button is visible or not.
     */
    showCancelButton?: boolean;
    /**
     * Defines in wich style pattern the cancel button will be shown.
     */
    cancelButtonStyle?: styles;
    /**
     * Defines the text to be displayed in the cancel button.
     */
    cancelButtonText?: string;
    /**
     * Controls if the confirm button is visible or not.
     */
    showConfirmButton?: boolean;
    /**
     * Defines in wich style pattern the confirm button will be shown.
     */
    confirmButtonStyle?: styles;
    /**
     * Defines the text to be displayed in the confirm button.
     */
    confirmButtonText?: string;
    /**
     * Controls if the close button is visible or not.
     */
    showCloseButton?: boolean;
    /**
     * Controls if the dialog closes when clicked outside or not.
     */
    allowClose?: boolean;
    /**
     * Defines a HTML string to be rendered right bellow the text.
     */
    html?: string;
    /**
     * Defines a HTMLX object to be rendered right bellow the text.
     */
    htmlx?: HTMLElement | any;
    /**
     * Defines a HTMLX object to be rendered as the header of the dialog.
     */
    customHeader?: HTMLElement | any;
    /**
     * Defines if the dialog is mainly custom or not.
     */
    isCustomDialog?: boolean;
    /**
     * Defines wich animated icons will be displayed.
     */
    icon?: icons;
    /**
     * Defines wich screen position the dialog will be shown.
     */
    position?: positions;
};
type DialogReturn = {
    /**
     * Indicates if the user confirmed the dialog at the confirm button.
     */
    isConfirmed: boolean;
    /**
     * Indicates if the user canceled the dialog at the cancel button.
     */
    isCanceled: boolean;
    /**
     * Indicates if the user aborted the dialog at the close button or the backLayer box.
     */
    isAborted: boolean;
};
type DialogType = {
    /**
     * Show a dialog alert box.
     */
    show: (props: AlertProps) => Promise<DialogReturn>;
    /**
     * Hide the dialog alert box.
     */
    hide: () => void;
};
declare const dialog: DialogType;
export default dialog;
