import '@emotion/react';

declare global {
  // for css``
  interface IThemeProps {
    theme: Theme;
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}

interface IColors {
  black: string;
  gray: string;
  white: string;
}
