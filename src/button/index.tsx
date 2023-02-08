import customcss from "../utils/css";
import { ButtonWrapper } from "./style";
import { ButtonProps, ButtonThemeType } from "./type";
import CustomThemeProvider from "@src/utils/wapper";

export default function Button(props: ButtonProps) {
  const {
    sx,
    shape = "default",
    size = "middle",
    type = "default",
    ...resProps
  } = props;
  const ButtonTheme: ButtonThemeType = {
    shape,
    size,
    type,
  };
  return (
    <CustomThemeProvider theme={ButtonTheme}>
      <ButtonWrapper css={customcss(props.sx)} {...resProps}>
        {props.children}
      </ButtonWrapper>
    </CustomThemeProvider>
  );
}
