import { CustomSxType, NativeDivProps } from '@src/utils/type';

type CustomModalProps = {
  visible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export type ModalProps = CustomModalProps & NativeDivProps & CustomSxType;
