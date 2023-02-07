import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { ReactClientRect, ReactRef } from "./type";
import getScrollBarSize from "./getScrollBarSize";
/**
 * @description 获取ref元素的clientRect属性值
 */
export const useClientRect = (ele: ReactRef) => {
  const [clientRect, setClientRect] = useState<ReactClientRect>(null);

  // 更新元素的 ClientRect
  const updateClientRect = useCallback(() => {
    // return () =>
    setClientRect(ele.current!.getBoundingClientRect());
  }, []);

  // 只有当 React 组件 didMount 时，才能取到元素的 ClientRect，所以这里要使用 useLayoutEffect
  useLayoutEffect(() => {
    if (ele.current) {
      updateClientRect();
    }
  }, []);

  return clientRect;
};

interface HuseplacementProps {
  triggerRect: ReactClientRect;
  contentRect: ReactClientRect;
  //todo 添加位置
}
interface TransFormCss {
  transform: string;
}

export const usePlacement = ({
  triggerRect,
  contentRect,
}: HuseplacementProps): TransFormCss => {
  const [transform, set] = useState<TransFormCss>({ transform: "" });
  useEffect(() => {
    if (!contentRect || !triggerRect) {
      return;
    }
    const {
        left: ContentLeftPxNum,
        width: ContentWidthPxNum,
        top: ContentTopPxNum,
        height: ContentHeightPxNum,
      } = contentRect!,
      {
        left: TriggerLeftPxNum,
        width: TriggerWidthPxNum,
        top: TriggerTopPxNum,
        height: TriggerHeightPxNum,
      } = triggerRect!;
    //todo 目前是放到上面，后续要根据位置调整
    const transFormX = ContentLeftPxNum,
      transFormY = ContentTopPxNum;
    console.log({ transFormX, transFormY });
    set((obj) => ({
      transform: `translate(${transFormX}px,${transFormY}px)`,
    }));
  }, [contentRect, triggerRect]);
  return transform;
};

export const useBodyScrollHide = (hidden: boolean) => {
  useEffect(() => {
    const ScrollSize = getScrollBarSize(),
      bodyStyle = document.body.style;
    if (hidden) {
      bodyStyle.overflow = "hidden";
      bodyStyle.paddingRight = `${ScrollSize}px`;
    }
    return () => {
      bodyStyle.overflow = "";
      bodyStyle.paddingRight = "";
    };
  }, [hidden]);
};
