import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const Wrapper = styled.div<{
  isValidationNotUsed: boolean;
  variant: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: ${({ variant }) =>
    variant === 'textarea' ? 'flex-start' : 'center'};
  gap: 1rem;

  width: 100%;

  & > label {
    flex-shrink: 0;

    width: 5rem;
    padding-top: ${({ variant }) =>
      variant === 'textarea' ? '0.5rem' : 'none'};

    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    word-break: break-all;
  }
`;

export const ValidationError = styled.p`
  height: 12px;
  font-size: 10px;
  font-weight: bold;

  margin: 4px 0 12px 6rem;
  color: ${({ theme }) => theme.colors.alert};
`;
