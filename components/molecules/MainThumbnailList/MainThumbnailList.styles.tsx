import styled from '@emotion/styled';

interface ICardContainerProps {
  url: string;
}

export const MainThumbnailListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem;
  flex-grow: 1;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const CardContainer = styled.div<ICardContainerProps>`
  width: 11rem;
  height: 10rem;

  border-radius: 0.5rem;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 4px;
    width: 100%;
    height: 100%;
    padding: 16px 8px;
    border-radius: 8px;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5));
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CreateDate = styled.div``;
