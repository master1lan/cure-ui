import { RefObject, CSSProperties } from "react";
export type NativeDivProps = React.HTMLAttributes<HTMLDivElement>;
export type ReactClientRect = DOMRect | null;
export type ReactRef = RefObject<HTMLElement | null>;
export type ReactClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type CustomSxType = {
    sx?: React.CSSProperties;
};
export type CssSelectRequiredType<T extends keyof CSSProperties> = Required<Pick<CSSProperties, T>>;
