/**
 * @description 简化版选择器
 */
export declare function DefensiveSwitch<T extends string>(params: T, targetObj: Record<T, string>, defaultRes: string): string;
export declare function curry<T extends (...args: any) => any>(callback: T): (...args: Parameters<T>) => any;
export declare const getElementStyleByName: (ele: HTMLElement, ...cssPropertyName: string[]) => string[];
export declare const getBodyMarginAndPadding: () => {
    margin: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    padding: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
};
export declare function openValueExampleMarginAndPadding(str: string): {
    top: string;
    right: string;
    bottom: string;
    left: string;
};
export declare function humpStringToDashString(str: string): string;
