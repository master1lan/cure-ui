import { useState } from "react";
import { InputProps } from "./type";
export default function Input(props: InputProps) {
  const { defaultValue, onChange } = props;

  return <input value={defaultValue} onChange={onChange} />;
}
