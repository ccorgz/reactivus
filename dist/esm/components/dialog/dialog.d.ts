type styles = "btn-primary" | "btn-secondary" | "btn-danger" | "btn-success" | "btn-info" | "btn-dark" | "btn-light" | "btn-none";
type AlertProps = {
    title?: string;
    showCancelButton?: boolean;
    cancelButtonStyle?: styles;
    showConfirmButton?: boolean;
    confirmlButtonStyle?: styles;
    html?: string;
    jsxHtml?: any;
};
declare const dialog: {
    show: (props?: AlertProps) => Promise<boolean>;
};
export default dialog;
