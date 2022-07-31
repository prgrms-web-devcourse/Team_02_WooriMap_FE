import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 37rem;
  height: 26.25rem;

  border: 4px dashed ${({ theme }) => theme.colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadArea = styled.label`
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;

  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const UploadAreaInput = styled.input`
  display: none;
`;
