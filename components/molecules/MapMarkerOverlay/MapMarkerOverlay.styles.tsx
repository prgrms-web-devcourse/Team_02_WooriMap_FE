import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  max-width: 30rem;
  min-height: 9rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 7rem;
  height: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  position: relative;
  min-width: fit-content;
`;

export const Title = styled.h4`
  max-width: 13rem;
  height: 1.7rem;
  padding-bottom: 0.5rem;
  font-family: 'Noto Serif KR', serif;
  font-weight: 900;
  font-size: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  flex-shrink: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CircularIconContainer = styled.div``;
