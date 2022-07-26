import styled from '@emotion/styled';
import Image from 'next/image';

export const CalendarInputWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-shrink: 0;

  position: relative;

  padding: 0.5rem 0.75rem;
  width: 100%;
  height: fit-content;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
`;

export const CalendarInput = styled.input`
  width: 100%;

  border: none;
  outline: none;

  font-family: 'Noto Serif KR', serif;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CalendarButton = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;

  z-index: 0;

  border: none;

  background: transparent;
`;

export const CalendarImage = styled(Image)``;
