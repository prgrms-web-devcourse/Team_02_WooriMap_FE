import styled from '@emotion/styled';

interface IToastContainerProps {
  status: 'success' | 'fail';
}

interface IProgressBarProps extends IToastContainerProps {
  duration: number;
}

export const Container = styled.div<IToastContainerProps>`
  position: absolute;
  z-index: 999;

  display: flex;
  justify-content: start;
  align-items: center;

  width: 250px;
  height: 52px;

  border-radius: 4px;

  background-color: ${(props) =>
    props.status === 'success' ? '#00e676' : '#FF6247'};

  & div {
    position: absolute;
    left: 4px;
    width: 50px;
    height: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & p {
    margin-left: 64px;
    font-size: 0.85rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  & button {
    all: unset;

    position: absolute;
    right: 10px;
    top: 5px;

    cursor: pointer;
  }
`;

export const ProgressBar = styled.div<IProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.skyblue};
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
