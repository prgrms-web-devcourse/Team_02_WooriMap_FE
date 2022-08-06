import styled from '@emotion/styled';

export const TextAreaWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  height: 176px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 8px 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;

  border: none;
  resize: none;
  outline: none;
`;

export const DeleteButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
`;
