import Image from 'next/image';
import styled from '@emotion/styled';

export const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 8px 12px;
`;

export const TextInput = styled.input`
  outline-style: none;
  border: 0;
  outline: 0;
  width: 98%;
  font-size: 16px;
  font-weight: 600;
`;

export const DeleteButton = styled(Image)`
  cursor: pointer;
  position: absolute;
  right: 16px;
`;
