import { CustomSxType, NativeDivProps } from "../utils/type";
import { ReactElement } from "react";
type CustomToolTipProps = {
    title: string;
    children: ReactElement;
};
export type ToolTipProps = CustomToolTipProps & Omit<NativeDivProps, "title"> & CustomSxType;
export {};
