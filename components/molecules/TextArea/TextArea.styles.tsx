import styled from '@emotion/styled';

export const TextAreaWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  width: 100%;
  height: 9rem;

  padding: 0.5rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;

  border: none;
  resize: none;
  outline: none;

  font-family: 'Noto Serif KR', serif;
  font-size: 0.8rem;
  resize: none;

  ::placeholder {
    font-size: 1.1rem;
  }
`;

export const DeleteAllBtnContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
