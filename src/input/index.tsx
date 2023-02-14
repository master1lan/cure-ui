import { InputWrapper } from "./style";
import { InputProps } from "./type";
import customcss from "@src/utils/css";
import { forwardRef } from "react";
const Input = forwardRef(function Input(props: InputProps, ref: any) {
  const { defaultValue, onChange, sx, ...resProps } = props;
  return (
    <InputWrapper
      css={customcss(sx)}
      defaultValue={defaultValue}
      onChange={onChange}
      {...resProps}
      ref={ref}
    />
  );
});
export default Input;
