import { RefObject } from "react";

export type NativeDivProps = React.HTMLAttributes<HTMLDivElement>;

export type ReactClientRect = DOMRect | null;

export type ReactRef = RefObject<HTMLElement | null>;

export type ReactClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type CustomSxType = {
  sx?: React.CSSProperties;
};
