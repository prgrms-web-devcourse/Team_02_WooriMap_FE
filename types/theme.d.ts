import '@emotion/react';

declare global {
  // for css``
  interface IThemeProps {
    theme: Theme;
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: IColors;
    sizes: ISizes;
  }
}

interface IColors {
  black: string;
  gray: string;
  white: string;
  skyblue: string;
}

interface ISizes {
  buttons: {
    xsmall: SerializedStyles;
    small: SerializedStyles;
    medium: SerializedStyles;
    large: SerializedStyles;
    xlarge: SerializedStyles;
  };
}
