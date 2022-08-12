import styled from '@emotion/styled';

interface IToastContainerProps {
  status: 'success' | 'fail';
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
  /* background: #00ddb3; */

  & div {
    position: absolute;
    left: 4px;
    width: 50px;
    height: 100%;

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
