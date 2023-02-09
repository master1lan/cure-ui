import { InputWrapper } from "./style";
import { InputProps } from "./type";
import customcss from "@src/utils/css";
import { forwardRef, useState } from "react";
const Input = forwardRef(function Input(props: InputProps, ref: any) {
  const { defaultValue, onChange, sx, ...resProps } = props;
  const [value, set] = useState(defaultValue),
    handlerchange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      set(() => newValue);
      onChange(event);
    };
  return (
    <InputWrapper
      css={customcss(sx)}
      value={value}
      onChange={handlerchange}
      {...resProps}
      ref={ref}
    />
  );
});
export default Input;
