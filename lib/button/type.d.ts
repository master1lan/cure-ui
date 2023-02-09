/// <reference types="react" />
import { SerializedStyles } from "@emotion/react";
import { CustomSxType } from "@src/utils/type";
/**
 * button的外形，circle为圆形，round则比较圆滚。
 */
type ButtonShape = "default" | "circle" | "round";
export declare const ButtonShapeToCss: (input: ButtonShape) => SerializedStyles;
type ButtonSize = "large" | "middle" | "small";
type ButtonType = "primary" | "default" | "text" | "dashed";
export declare const ThemeToCss: (theme: unknown) => SerializedStyles;
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & Partial<{
    htmlType: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}>;
export type CustomButtonProps = Partial<{
    shape: ButtonShape;
    size: ButtonSize;
    type: ButtonType;
}>;
export type ButtonThemeType = Required<CustomButtonProps>;
export type ButtonProps = NativeButtonProps & CustomButtonProps & CustomSxType;
export {};
