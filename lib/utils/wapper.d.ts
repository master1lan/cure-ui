import { ReactElement } from "react";
export default function CustomThemeProvider<T>(props: {
    theme: T;
    children: ReactElement;
}): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
