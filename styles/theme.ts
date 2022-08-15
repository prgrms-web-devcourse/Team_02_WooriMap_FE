import { Theme, css } from '@emotion/react';

const theme: Theme = {
  colors: {
    black: '#000000',
    gray: '#D9D9D9',
    white: '#FFFFFF',
    whiteTransparent: '#ffffffaa',
    skyblue: '#97BAFF',
    alert: '#FF3737',
    pink: '#ff8f8f80',
    pinkTransparent: '#ff8f8f30',
  },
  tagColors: [
    '#d9d9d9',
    '#d9d9d980',
    '#ff8f8f',
    '#ff8f8f80)',
    '#97baff',
    '#97baff80',
    '#ffea7a',
    '#ffea7a80',
  ],
  sizes: {
    buttons: {
      xsmall: css`
        width: 4.8rem;
        height: 2.5rem;
        font-size: 1rem;
      `,
      small: css`
        width: 96px;
        height: 48px;
      `,
      medium: css`
        width: 166px;
        height: 48px;
      `,
      large: css`
        width: 352px;
        height: 64px;
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
  boxShadow: {
    atom: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
    molecule: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)',
    organism: '0 0.5rem 1rem rgba(0, 0, 0, 0.25)',
  },
  opacityTransition: 'opacity ease-in 0.2s',
};

export default theme;
