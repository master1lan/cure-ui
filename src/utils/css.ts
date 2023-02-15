import { css } from '@emotion/react';
export default function customcss(sx?: React.CSSProperties) {
  return css(sx as any);
}

/**
 * 给元素style添加属性。
 */
export const ObjectToHtmlStyle = (
  obj: React.CSSProperties,
  ele: HTMLElement
) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      //@ts-ignore
      ele.style[key] = value;
    }
  });
};
