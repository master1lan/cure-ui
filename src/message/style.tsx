import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

/**
 * message components keyframes
 */
export const keyframesMessageIn = keyframes`
     from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,
  keyframesMessageOut = keyframes`
    0% {
            opacity: 1;
            transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;
/**
 * message animation constructor
 */
export const MessagePAnimationConstructor = (
  durantion = 3,
  transformTime = 0.1
) => {
  if (durantion < transformTime) {
    throw new Error(
      `You can't let the animation transition time exceed the total duration!`
    );
  }
  return css`
    animation: ${keyframesMessageIn} ${transformTime} linear,
      ${keyframesMessageOut} ${transformTime} linear
        ${durantion - transformTime} forwards;
  `;
};

export const MessageP = styled.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  color: black;
  ${MessagePAnimationConstructor(3, 0.1)}
`;
