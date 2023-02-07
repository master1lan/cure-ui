import { createPortal } from "react-dom";
import { ProtalProps } from "./type";
export default function Portal(props: ProtalProps) {
  const { children, ...resProps } = props;
  return createPortal(<div {...resProps}>{children}</div>, document.body);
}
