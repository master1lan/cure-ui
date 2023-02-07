import { NativeDivProps } from "@src/utils/type";

type CustomModalProps = {
  visible: boolean;
  closeModal: () => void;
};

export type ModalProps = CustomModalProps & NativeDivProps;
