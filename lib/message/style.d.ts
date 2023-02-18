/// <reference types="react" />
/**
 * message components keyframes
 */
export declare const keyframesMessageIn: import("@emotion/react").Keyframes, keyframesMessageOut: import("@emotion/react").Keyframes;
/**
 * message animation constructor
 */
export declare const MessagePAnimationConstructor: (durantion?: number, transformTime?: number) => import("@emotion/react").SerializedStyles;
export declare const MessageP: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
