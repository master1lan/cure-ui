import { ReactElement } from "react";
import { CustomSxType, NativeDivProps } from "../utils/type";
type CustomProtalProps = {
    children: ReactElement;
};
export type ProtalProps = CustomProtalProps & NativeDivProps & CustomSxType;
export {};
