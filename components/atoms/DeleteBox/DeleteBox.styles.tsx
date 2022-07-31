import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 1rem;
  position: relative;
  width: fit-content;
  height: fit-content;

  &:not(last-child) {
    margin-right: 1rem;
  }
`;

export const Wrapper = styled.button`
  position: absolute;

  right: -0.625rem;
  top: -0.75rem;

  background: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: 0px 3.77778px 7.55556px rgba(0, 0, 0, 0.5);

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem;

  box-sizing: border-box;

  cursor: pointer;
`;
