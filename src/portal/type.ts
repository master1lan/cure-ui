import { ReactElement } from "react";
import { NativeDivProps } from "@src/utils/type";

type CustomProtalProps = {
  children: ReactElement;
};
export type ProtalProps = CustomProtalProps & NativeDivProps;
