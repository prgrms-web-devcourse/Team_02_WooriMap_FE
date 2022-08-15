import { Global, css } from '@emotion/react';
import { reset } from './reset';
import theme from './theme';

const globalStyles = css`
  ${reset}
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: ${theme.colors.pinkTransparent};
      background-clip: padding-box;
      border: 0.2rem solid transparent;
    }
    ::-webkit-scrollbar-track {
      border-radius: inherit;
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    background: transparent;
    z-index: 99;
    opacity: 0;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyles} />;
}
