import Image from 'next/image';
import styled from '@emotion/styled';

export const TextInputWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  width: 100%;
  height: 3rem;

  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;

export const TextInput = styled.input`
  width: 100%;

  margin-right: 2rem;

  border: none;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;

  :focus {
    outline-color: ${({ theme }) => theme.colors.pink};
  }
`;

export const DeleteButton = styled(Image)`
  position: absolute;
  right: 2rem;
  z-index: 10;

  cursor: pointer;
`;
