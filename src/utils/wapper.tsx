import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';

export default function CustomThemeProvider<T>(props: {
  theme: T;
  children: ReactElement;
}) {
  return (
    <ThemeProvider theme={props.theme as any}>{props.children}</ThemeProvider>
  );
}
