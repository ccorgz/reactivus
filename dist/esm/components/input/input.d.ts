interface IInput {
    options: {
        type: "text" | "password" | "date" | "number" | "select";
        icon?: any;
        label?: string;
        width?: string;
        ref?: React.Ref<any>;
        placeholder?: string;
        password?: {
            seePwd?: boolean;
            onIcon?: any;
            offIcon?: any;
        };
        status?: "danger" | "success";
        onKeyDown?: any;
    };
    children?: React.ReactNode;
}
export default function Input({ options, children, onKeyDown, ...rest }: IInput & Record<string, unknown>): import("react").JSX.Element;
export {};
