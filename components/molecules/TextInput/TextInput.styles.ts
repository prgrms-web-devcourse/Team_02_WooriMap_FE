import styled from '@emotion/styled';
import Image from 'next/image';
import Input from '../../atoms/Input';

export const TextInputWrapper = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 13px 16px;
`;

export const TextInput = styled(Input)`
  //color: ${({ theme }) => theme.colors.black};
`;

export const DeleteButton = styled(Image)``;
