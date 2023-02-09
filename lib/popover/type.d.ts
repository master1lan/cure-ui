import { ReactElement } from "react";
import { NativeDivProps } from "../utils/type";
type CustomPopOverProps = {
    defaultOpen: boolean;
    children: ReactElement;
    content: ReactElement;
};
export type PopOverProps = CustomPopOverProps & NativeDivProps;
export {};
