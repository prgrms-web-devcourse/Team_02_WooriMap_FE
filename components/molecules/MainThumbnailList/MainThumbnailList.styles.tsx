import styled from '@emotion/styled';

interface ICardContainerProps {
  url: string;
}

export const MainThumbnailListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  flex-grow: 1;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const CardContainer = styled.div<ICardContainerProps>`
  width: 8rem;
  height: 7rem;

  border-radius: 0.5rem;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.25rem;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5));
  }
`;

export const Title = styled.h3`
  width: 100%;
  height: 1.3rem;
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 90%;
`;

export const CreateDate = styled.div`
  font-size: 0.7rem;
  opacity: 70%;
`;
