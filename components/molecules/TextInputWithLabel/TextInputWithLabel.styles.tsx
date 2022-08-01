import styled from '@emotion/styled';

export const Container = styled.div`
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
