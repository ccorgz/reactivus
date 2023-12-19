import "../../styles/dialog.css";
type icons = "success" | "danger" | "info" | "question" | "warning";
type styles = "btn-primary" | "btn-secondary" | "btn-danger" | "btn-success" | "btn-info" | "btn-dark" | "btn-light" | "btn-none";
type AlertProps = {
    title?: string;
    text?: string;
    showCancelButton?: boolean;
    cancelButtonStyle?: styles;
    cancelButtonText?: string;
    showConfirmButton?: boolean;
    confirmButtonStyle?: styles;
    confirmButtonText?: string;
    html?: string;
    jsxHtml?: any;
    icon?: icons;
};
type DialogType = {
    show: (props: AlertProps) => Promise<boolean>;
};
declare const dialog: DialogType;
export default dialog;
