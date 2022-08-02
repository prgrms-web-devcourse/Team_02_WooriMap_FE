import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  min-height: 176px;
`;

export const UserName = styled.div`
  width: 80%;
  height: 50px;
  padding-top: 16px;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 24px;
  font-weight: 900;
  font-family: serif;
  overflow: hidden;
  white-space: nowrap;
`;
