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

export const ProgressBar = styled.span<IProgressBarProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 200px;

  height: 2px;

  background-color: ${({ theme }) => theme.colors.skyblue};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

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
