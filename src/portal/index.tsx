import styled from '@emotion/styled';
import customcss from '@src/utils/css';
import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { ProtalProps } from './type';
const Portal = forwardRef(function Portal(props: ProtalProps, ref: any) {
  const { children, sx, ...resProps } = props;
  return createPortal(
    <Div {...resProps} css={customcss(sx)} ref={ref}>
      {children}
    </Div>,
    document.body
  );
});

const Div = styled.div();

export default Portal;
