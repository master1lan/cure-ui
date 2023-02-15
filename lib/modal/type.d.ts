/// <reference types="react" />
import { CustomSxType, NativeDivProps } from "../utils/type";
type CustomModalProps = {
    visible: boolean;
    closeModal: () => void;
    children: React.ReactNode;
};
export type ModalProps = CustomModalProps & NativeDivProps & CustomSxType;
export {};
