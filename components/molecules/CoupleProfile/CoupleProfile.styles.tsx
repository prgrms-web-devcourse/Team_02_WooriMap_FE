import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const EachProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 7.5rem;
  height: 7.5rem;

  padding: 0 1rem;

  :first-child {
    position: relative;
    left: 1rem;
  }
  :last-child {
    position: relative;
    right: 1rem;
    z-index: 2;
  }
`;

export const NickName = styled.div`
  display: none;
`;

export const CoupleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  z-index: 2;

  width: 7.5rem;
  height: 7.5rem;

  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.pink};

  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;

export const DDay = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const StartDate = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
