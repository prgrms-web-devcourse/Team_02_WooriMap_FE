import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > label {
    width: 52px;
    height: 20px;

    margin-right: 10px;

    font-size: 14px;
    font-weight: bold;
    word-break: break-all;
    text-align: center;
  }
`;

export const Inner = styled.div`
  width: 100%;
  margin: 4px 0 0 30%;
`;

export const ValidationError = styled.p`
  height: 12px;
  font-size: 10px;
  font-weight: bold;

  margin: 4px 0 12px 56px;
  color: ${({ theme }) => theme.colors.alert};
`;
