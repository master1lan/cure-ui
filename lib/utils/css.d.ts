/// <reference types="react" />
export default function customcss(sx?: React.CSSProperties): import("@emotion/react").SerializedStyles;
/**
 * 给元素style添加属性。
 */
export declare const ObjectToHtmlStyle: (obj: React.CSSProperties, ele: HTMLElement) => void;
