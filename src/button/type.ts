import { DefensiveSwitch } from "@src/utils/fn";
type ButtonShape = "default" | "circle" | "round";
export const ButtonShapeToCss = (input: ButtonShape) =>
  DefensiveSwitch(
    input,
    { default: "4px", circle: "50%", round: "8px" },
    "0px"
  );
type ButtonSize = "large" | "middle" | "small";
export const ButtonSizeToCss = (input: ButtonSize) =>
  DefensiveSwitch(input, { large: "", middle: "", small: "" }, "");
type ButtonType = "primary" | "default" | "text" | "dashed";
export const ButtonTypeToCss = (input: ButtonType) =>
  DefensiveSwitch(
    input,
    { primary: "", default: "", text: "", dashed: "" },
    ""
  );
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
>;
export type CustomButtonProps = Partial<{
  shape: ButtonShape;
  size: ButtonSize;
  type: ButtonType;
  sx: React.CSSProperties;
}>;
export type ButtonProps = NativeButtonProps & CustomButtonProps;
