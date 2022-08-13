import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const Wrapper = styled.div<{ isValidationNotUsed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  & > label {
    flex-shrink: 0;

    width: 5rem;

    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    line-height: 2.3rem;
    word-break: break-all;
  }
`;

export const ValidationError = styled.p`
  height: 12px;
  font-size: 10px;
  font-weight: bold;

  margin: 4px 0 12px 56px;
  color: ${({ theme }) => theme.colors.alert};
`;
