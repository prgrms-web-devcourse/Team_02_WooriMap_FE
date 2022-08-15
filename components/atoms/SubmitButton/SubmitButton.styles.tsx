import { Button } from 'components';
import styled from '@emotion/styled';

export const SubmitButton = styled(Button)`
  width: 7rem;
  height: 2rem;

  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.atom};

  font-size: 0.8rem;
`;
