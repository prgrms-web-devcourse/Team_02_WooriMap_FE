import '@emotion/react';

interface IColors {
  black: string;
  gray: string;
  white: string;
  skyblue: string;
  alert: string;
  pink: string;
}

interface ISizes {
  images: {
    medium: SerializedStyles;
    large: SerializedStyles;
  };
  buttons: {
    xsmall: SerializedStyles;
    small: SerializedStyles;
    medium: SerializedStyles;
    large: SerializedStyles;
    xlarge: SerializedStyles;
  };
}
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
