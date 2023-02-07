import Portal from "@src/portal";
import { useClientRect, usePlacement } from "@src/utils/hook";
import {
  cloneElement,
  createElement,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { PopOverProps } from "./type";
import { ReactRef } from "../utils/type";

export default function Popover(props: PopOverProps) {
  const { defaultOpen, children, content, ...resProps } = props;
  const [open, set] = useState(defaultOpen);
  const anchorRef = useRef(null);
  return (
    <>
      {cloneElement(children, {
        onClick: () => set((item) => !item),
        ref: anchorRef,
      })}
      {open && (
        <Portal>
          <PopoverContent
            anchorRef={anchorRef}
            onClose={() => {
              set((item) => !item);
            }}
          >
            {content}
          </PopoverContent>
        </Portal>
      )}
    </>
  );
}

type PopoverContentProps = Omit<PopOverProps, "defaultOpen" | "content"> & {
  onClose: () => void;
  anchorRef: ReactRef;
};

const PopoverContent: FC<PopoverContentProps> = (props) => {
  const { children, anchorRef, onClose } = props;
  const popoverItemRef = useRef(null);
  const anchorRect = useClientRect(anchorRef),
    popoverItemRect = useClientRect(popoverItemRef);
  useEffect(() => {
    const filterDomArr = [anchorRef.current, popoverItemRef.current];
    const handlerClick = (event: MouseEvent) => {
      const target = event?.target;
      !filterDomArr.some((item) => item === target) && onClose();
    };
    window.addEventListener("click", handlerClick);
    return () => window.removeEventListener("click", handlerClick);
  }, []);
  const styleTransform = usePlacement({
    triggerRect: popoverItemRect,
    contentRect: anchorRect,
  });
  return (
    <div
      ref={popoverItemRef}
      //todo 修改样式
      style={{
        visibility: styleTransform.transform ? "visible" : "hidden",
        ...styleTransform,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
};
