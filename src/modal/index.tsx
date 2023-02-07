import Portal from "@src/portal";
import { ModalContainer } from "./style";
import type { ModalProps } from "./type";
import { useBodyScrollHide } from "@src/utils/hook";
import { ReactClickEvent } from "../utils/type";

export default function Modal(props: ModalProps) {
  const { visible = true, children, closeModal, ...resProps } = props,
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
          <ModalContainer onClick={handlerClick} {...resProps}>
            {children}
          </ModalContainer>
        </Portal>
      )}
    </>
  );
}
