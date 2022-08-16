import styled from '@emotion/styled';

interface IToastContainerProps {
  status: 'success' | 'fail';
  duration: number;
  top?: number;
  right?: number;
}

interface IProgressBarProps extends IToastContainerProps {
  duration: number;
}

export const Container = styled.div<IToastContainerProps>`
  position: relative;
  z-index: 999;

  display: flex;
  justify-content: start;
  align-items: center;

  width: 250px;
  height: 52px;
  margin-bottom: 10px;

  border-radius: 4px;

  background-color: ${(props) =>
    props.status === 'success' ? '#00e676' : '#FF6247'};

  animation: toast-opening 0.25s ease-in;

  & div {
    position: absolute;
    left: 0px;
    width: 50px;
    height: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    margin-left: 64px;
    font-size: 0.85rem;
    font-weight: bold;
    color: #fff;
  }

  & button {
    all: unset;
    position: absolute;
    right: 10px;
    top: 5px;

    cursor: pointer;
  }

  @keyframes toast-opening {
    from {
      opacity: 0;
      right: -250px;
    }
    to {
      opacity: 1;
      right: ${(props) => props.right}px;
    }
  }
`;

export const ProgressBar = styled.span<IProgressBarProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 200px;

  height: 2px;

  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-duration: ${(props) => props.duration}ms;

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
