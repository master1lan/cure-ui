/// <reference types="react" />
declare const Button: import("react").ForwardRefExoticComponent<Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "type"> & Partial<{
    htmlType: "submit" | "reset" | "button" | undefined;
}> & Partial<{
    shape: "default" | "circle" | "round";
    size: "large" | "middle" | "small";
    type: "default" | "primary" | "text" | "dashed";
}> & import("../utils/type").CustomSxType & import("react").RefAttributes<unknown>>;
export default Button;
