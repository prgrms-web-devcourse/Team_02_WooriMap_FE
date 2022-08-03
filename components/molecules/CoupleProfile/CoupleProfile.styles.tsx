import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 384px;
  height: 177px;
  padding: 0 10px;
`;

export const EachProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  min-height: 176px;
`;

export const Nickname = styled.div`
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

export const CoupleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: absolute;
  left: 128px;
  z-index: 1;
  width: 128px;
  height: 128px;
  border: 1px dashed;
  border-radius: 64px;
  background-color: ${({ theme }) => theme.colors.pink};
`;

export const DDay = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const StartingDate = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
