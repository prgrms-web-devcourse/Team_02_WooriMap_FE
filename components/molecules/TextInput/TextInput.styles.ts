import styled from '@emotion/styled';

export const TextInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 2.3rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;

export const TextInput = styled.input`
  width: 100%;
  margin-right: 2rem;
  outline: none;
  border: none;
  font-family: 'Noto Serif KR', serif;
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1rem;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const DeleteAllBtnContainer = styled.div`
  position: absolute;
  right: 0.9rem;
`;
