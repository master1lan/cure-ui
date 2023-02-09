/**
 * @description 简化版选择器
 */
export declare function DefensiveSwitch<T extends string>(params: T, targetObj: Record<T, string>, defaultRes: string): string;
export declare function curry<T extends (...args: any) => any>(callback: T): (...args: Parameters<T>) => any;
