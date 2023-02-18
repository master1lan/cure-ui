import { ReactClientRect, ReactRef } from './type';
/**
 * @description 获取ref元素的clientRect属性值
 */
export declare const useClientRect: (ele: ReactRef) => ReactClientRect;
interface HuseplacementProps {
    triggerRect: ReactClientRect;
    contentRect: ReactClientRect;
}
interface TransFormCss {
    transform: string;
}
export declare const usePlacement: ({ triggerRect, contentRect, }: HuseplacementProps) => TransFormCss;
export declare const useBodyScrollHide: (hidden: boolean) => void;
export {};
