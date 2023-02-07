/// <reference types="react" />
type ButtonShape = "default" | "circle" | "round";
export declare const ButtonShapeToCss: (input: ButtonShape) => string;
type ButtonSize = "large" | "middle" | "small";
export declare const ButtonSizeToCss: (input: ButtonSize) => string;
type ButtonType = "primary" | "default" | "text" | "dashed";
export declare const ButtonTypeToCss: (input: ButtonType) => string;
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;
export type CustomButtonProps = Partial<{
    shape: ButtonShape;
    size: ButtonSize;
    type: ButtonType;
    sx: React.CSSProperties;
}>;
export type ButtonProps = NativeButtonProps & CustomButtonProps;
export {};
