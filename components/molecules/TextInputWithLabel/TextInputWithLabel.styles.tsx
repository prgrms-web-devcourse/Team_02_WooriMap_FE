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
    align-self: flex-start;
    flex-shrink: 0;

    width: 5rem;
    padding-top: 0.5rem;

    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    word-break: break-all;
  }
`;

export const ValidationError = styled.p`
  height: 1.2rem;
  margin-left: 6rem;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1rem;

  color: ${({ theme }) => theme.colors.alert};
`;
