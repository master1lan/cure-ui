import { css, SerializedStyles } from "@emotion/react";
import { DefensiveSwitch } from "@src/utils/fn";
import { CustomSxType } from "@src/utils/type";
/**
 * button的外形，circle为圆形，round则比较圆滚。
 */
type ButtonShape = "default" | "circle" | "round";
export const ButtonShapeToCss = (input: ButtonShape) => {
  return css`
    border-radius: ${DefensiveSwitch(
      input,
      { default: "4px", circle: "50%", round: "8px" },
      "0px"
    )};
  `;
};
type ButtonSize = "large" | "middle" | "small";
const ButtonSizeToCss = (input: ButtonSize) => {
  return css`
    height: ${DefensiveSwitch(
      input,
      { large: "40px", middle: "32px", small: "24px" },
      "32px"
    )};
    padding: ${DefensiveSwitch(
      input,
      { large: "6px 15px", middle: "4px 15px", small: "0px 7px" },
      "4px 15px"
    )};
  `;
};

type ButtonType = "primary" | "default" | "text" | "dashed";
//todo 增加type，以及说明文档
// export const ButtonTypeToCss = (input: ButtonType) =>
//   DefensiveSwitch(
//     input,
//     { primary: "", default: "", text: "", dashed: "" },
//     ""
//   );

export const ThemeToCss = (theme: unknown): SerializedStyles => {
  const _theme = theme as ButtonThemeType;
  return css`
    ${ButtonSizeToCss(_theme.size)}
    ${ButtonShapeToCss(_theme.shape)}
  `;
};

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> &
  Partial<{
    htmlType: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  }>;
export type CustomButtonProps = Partial<{
  shape: ButtonShape;
  size: ButtonSize;
  type: ButtonType;
}>;

export type ButtonThemeType = Required<CustomButtonProps>;

export type ButtonProps = NativeButtonProps & CustomButtonProps & CustomSxType;
