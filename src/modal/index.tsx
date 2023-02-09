import Portal from "@src/portal";
import { ModalContainer } from "./style";
import type { ModalProps } from "./type";
import { useBodyScrollHide } from "@src/utils/hook";
import { ReactClickEvent } from "@src/utils/type";
import customcss from "@src/utils/css";

export default function Modal(props: ModalProps) {
  const { visible = true, children, closeModal, sx, ...resProps } = props,
    handlerClick = (event: ReactClickEvent) => {
      event.stopPropagation();
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
  useBodyScrollHide(visible);
  return (
    <>
      {visible && (
        <Portal>
          <ModalContainer
            onClick={handlerClick}
            {...resProps}
            css={customcss(sx)}
          >
            {children}
          </ModalContainer>
        </Portal>
      )}
    </>
  );
}
