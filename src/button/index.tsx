import customcss from "../utils/css";
import { ButtonWrapper } from "./style";
import { ButtonProps, ButtonThemeType } from "./type";
import CustomThemeProvider from "@src/utils/wapper";
import { forwardRef } from "react";

const Button = forwardRef(function Button(props: ButtonProps, ref: any) {
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
      <ButtonWrapper css={customcss(props.sx)} {...resProps} ref={ref}>
        {props.children}
      </ButtonWrapper>
    </CustomThemeProvider>
  );
});

export default Button;
