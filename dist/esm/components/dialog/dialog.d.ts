import "../../styles/dialog.css";
type icons = "success" | "danger" | "info" | "question" | "warning";
type styles = "btn-primary" | "btn-secondary" | "btn-danger" | "btn-success" | "btn-info" | "btn-dark" | "btn-light" | "btn-none";
type positions = "top-center" | "top-left" | "top-right" | "center" | "center-left" | "center-right" | "bottom-center" | "bottom-left" | "bottom-right";
type AlertProps = {
    /**
     * Title to be displayed as a header in the dialog.
     */
    title?: string;
    /**
     * Description text to be displayed right bellow the title.
     */
    text?: string;
    /**
     * Controls wether the cancel button is visible or not.
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
     * Controls wether the confirm button is visible or not.
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
     * Controls wether the close button is visible or not.
     */
    showCloseButton?: boolean;
    /**
     * Defines a HTML string to be rendered right bellow the text.
     */
    html?: string;
    /**
     * Defines a HTMLX object to be rendered right bellow the text.
     */
    htmlx?: HTMLElement;
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
     * Indicates whether the user confirmed the dialog at the confirm button.
     */
    isConfirmed: boolean;
    /**
     * Indicates whether the user canceled the dialog at the cancel button.
     */
    isCanceled: boolean;
    /**
     * Indicates whether the user aborted the dialog at the close button or the backLayer box.
     */
    isAborted: boolean;
};
type DialogType = {
    show: (props: AlertProps) => Promise<DialogReturn>;
};
declare const dialog: DialogType;
export default dialog;
