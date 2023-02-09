import customcss from "@src/utils/css";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { ProtalProps } from "./type";
const Portal = forwardRef(function Portal(props: ProtalProps, ref: any) {
  const { children, sx, ...resProps } = props;
  return createPortal(
    <div {...resProps} css={customcss(sx)} ref={ref}>
      {children}
    </div>,
    document.body
  );
});
export default Portal;
