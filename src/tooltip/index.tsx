import styled from '@emotion/styled';
import { cloneElement, FC, useRef, useState } from 'react';
import { ToolTipProps } from './type';
import { useClientRect, usePlacement } from '../utils/hook';
import { ReactRef } from '../utils/type';
import Portal from '@src/portal';
import customcss from '@src/utils/css';

export default function ToolTip(props: ToolTipProps) {
  const { children, title, sx, ...resProps } = props;
  const [visible, set] = useState(false);
  const targetEleRef = useRef(null);

  return (
    <>
      {cloneElement(children, {
        onMouseEnter: () => {
          if (children.props.onMouseEnter instanceof Function)
            children.props.onMouseEnter();
          set(true);
        },
        onMouseLeave: () => {
          if (children.props.onMouseLeave instanceof Function)
            children.props.onMouseLeave();
          set(false);
        },
        ref: targetEleRef,
        ...resProps,
      })}
      {visible && (
        <Portal
          sx={{
            position: 'fixed',
            left: '0',
            top: '0',
          }}
        >
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
          visibility: styleTransform.transform ? 'visible' : 'hidden',
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
const P = styled('p')`
  display: inline-block;
  padding: 5px 8px;

  position: absolute;
  z-index: 1000;
  word-wrap: break-word;
  border-radius: 8px;
`;
