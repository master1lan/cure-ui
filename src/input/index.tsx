import { InputWrapper } from "./style";
import { InputProps } from "./type";
import customcss from "@src/utils/css";
export default function Input(props: InputProps) {
  const { defaultValue, onChange, sx, ...resProps } = props;

  return (
    <InputWrapper
      css={customcss(sx)}
      value={defaultValue}
      onChange={onChange}
      {...resProps}
    />
  );
}
