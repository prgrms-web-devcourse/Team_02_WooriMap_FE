import { Theme, css } from '@emotion/react';

const theme: Theme = {
  colors: {
    black: '#000000',
    gray: '#D9D9D9',
    white: '#FFFFFF',
    skyblue: '#97BAFF',
  },
  sizes: {
    buttons: {
      xsmall: css`
        width: 4.8rem;
        height: 2.5rem;
        font-size: 1rem;
      `,
      small: css`
        width: 6rem;
        height: 3.2rem;
        font-size: 1rem;
      `,
      medium: css`
        width: 9rem;
        height: 3rem;
        font-size: 1.25rem;
      `,
      large: css`
        width: 17rem;
        height: 3.6rem;
        font-size: 1.5rem;
      `,
      xlarge: css`
        width: 21.8rem;
        height: 4.5rem;
        font-size: 1.25rem;
      `,
    },
    images: {
      medium: css`
        width: 4.5rem;
        height: 4.5rem;
      `,
      large: css`
        width: 37rem;
        height: 37.5rem;
      `,
    },
  },
};

export default theme;
