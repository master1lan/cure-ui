import { InputWrapper } from "./style";
import { InputProps } from "./type";
import customcss from "@src/utils/css";
import { useState } from "react";
export default function Input(props: InputProps) {
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
    />
  );
}
