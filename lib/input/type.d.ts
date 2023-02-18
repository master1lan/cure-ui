/// <reference types="react" />
import { CustomSxType } from '../utils/type';
type CustomInputProps = {
    defaultValue: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'>;
export type InputProps = CustomInputProps & NativeInputProps & CustomSxType;
export {};
