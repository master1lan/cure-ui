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

export const getElementStyleByName = (
  ele: HTMLElement,
  ...cssPropertyName: string[]
): string[] => {
  const _cssProperty = window.getComputedStyle(ele);
  return cssPropertyName.map((item) => _cssProperty.getPropertyValue(item));
};

export const getBodyMarginAndPadding = () => {
  const res = getElementStyleByName(document.body, "margin", "padding");
  return {
    margin: openValueExampleMarginAndPadding(res[0]),
    padding: openValueExampleMarginAndPadding(res[1]),
  };
};

export function openValueExampleMarginAndPadding(str: string) {
  const [top = "0px", right = top, bottom = top, left = right] = str.split(" ");
  return {
    top,
    right,
    bottom,
    left,
  };
}

export function humpStringToDashString(str: string) {
  return str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
}
