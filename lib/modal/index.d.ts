/// <reference types="react" />
declare const Modal: import("react").ForwardRefExoticComponent<{
    visible: boolean;
    closeModal: () => void;
    children: import("react").ReactNode;
} & import("../utils/type").NativeDivProps & import("../utils/type").CustomSxType & import("react").RefAttributes<any>>;
export default Modal;
