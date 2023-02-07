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
