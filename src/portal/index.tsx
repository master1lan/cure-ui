import customcss from "@src/utils/css";
import { createPortal } from "react-dom";
import { ProtalProps } from "./type";
export default function Portal(props: ProtalProps) {
  const { children, sx, ...resProps } = props;
  return createPortal(
    <div {...resProps} css={customcss(sx)}>
      {children}
    </div>,
    document.body
  );
}
