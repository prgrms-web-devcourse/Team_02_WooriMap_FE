import styled from '@emotion/styled';
import Image from 'next/image';

export const CalendarInputWrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 13px 16px;
  position: relative;
`;

export const CalendarInput = styled.input`
  outline-style: none;
  border: 0;
  outline: 0;
  width: 98%;
  font-size: 16px;
  font-weight: 600;
`;

export const CalendarButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  right: 15px;
  z-index: 0;
`;

export const CalendarImage = styled(Image)``;
