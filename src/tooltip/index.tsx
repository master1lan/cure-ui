import styled from "@emotion/styled";
import { cloneElement, FC, useRef, useState } from "react";
import { ToolTipProps } from "./type";
import { useClientRect, usePlacement } from "../utils/hook";
import { ReactRef } from "../utils/type";
import Portal from "@src/portal";
import customcss from "@src/utils/css";

export default function ToolTip(props: ToolTipProps) {
  const { children, title, sx, ...resProps } = props;
  const [visible, set] = useState(false);
  const targetEleRef = useRef(null);

  return (
    <>
      {cloneElement(children, {
        onMouseEnter: set.bind(null, true),
        onMouseLeave: set.bind(null, false),
        ref: targetEleRef,
        ...resProps,
      })}
      {visible && (
        <Portal>
          <ToolTipTrigger childrenRef={targetEleRef} title={title} sx={sx} />
        </Portal>
      )}
    </>
  );
}

const ToolTipTrigger: FC<{ childrenRef: ReactRef; title: string; sx: any }> = (
  props
) => {
  const { childrenRef, title, sx, ...resProps } = props;
  const toolTipRef = useRef(null);
  const toolTipRect = useClientRect(toolTipRef),
    targetEleRect = useClientRect(childrenRef);
  const styleTransform = usePlacement({
    triggerRect: toolTipRect,
    contentRect: targetEleRect,
  });
  return (
    <>
      <P
        ref={toolTipRef}
        style={{
          ...styleTransform,
          visibility: styleTransform.transform ? "visible" : "hidden",
        }}
        {...resProps}
        css={customcss(sx)}
      >
        {title}
      </P>
    </>
  );
};

//todo add theme
const P = styled("p")`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;
