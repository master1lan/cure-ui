/**
 * @description 简化版选择器
 */
export function DefensiveSwitch<T extends string>(
  params: T,
  targetObj: Record<T, string>,
  defaultRes: string
) {
  return targetObj[params] || defaultRes;
}

export function curry<T extends (...args: any) => any>(callback: T) {
  return (...args: Parameters<T>) => {
    const params = [...args];
    if (args.length < callback.length) {
      return curry(callback.bind(null, ...params));
    } else {
      return callback(...params);
    }
  };
}
