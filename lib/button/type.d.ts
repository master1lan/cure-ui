/// <reference types="react" />
import { SerializedStyles } from "@emotion/react";
import { CssSelectRequiredType, CustomSxType } from "../utils/type";
/**
 * button的外形，circle为圆形，round则比较圆滚。
 */
export declare const ButtonShapeToCssChangeStyleNames: readonly ["borderRadius"], ButtonShapeTypeArr: readonly ["default", "circle", "round"];
type ButtonShape = (typeof ButtonShapeTypeArr)[number];
export declare const ButtonShapeToCss: (input: ButtonShape) => CssSelectRequiredType<(typeof ButtonShapeToCssChangeStyleNames)[number]>;
export declare const ButtonSizeToCssChangeStyleNames: readonly ["height", "padding"];
export declare const ButtonSizeTypeArr: readonly ["large", "middle", "small"];
type ButtonSize = (typeof ButtonSizeTypeArr)[number];
export declare const ButtonSizeToCss: (input: ButtonSize) => CssSelectRequiredType<(typeof ButtonSizeToCssChangeStyleNames)[number]>;
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
