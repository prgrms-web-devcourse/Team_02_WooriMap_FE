import '@emotion/react';

declare global {
  // for css``
  interface ThemeProps {
    theme: Theme;
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}

interface Colors {
  black: string;
  gray: string;
  white: string;
}
