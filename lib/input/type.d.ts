/// <reference types="react" />
import { CustomSxType } from "@src/utils/type";
type CustomInputProps = {
    defaultValue: string;
    onChange: () => void;
};
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
export type InputProps = CustomInputProps & NativeInputProps & CustomSxType;
export {};
