import styled from '@emotion/styled';

interface ICardContainerProps {
  url: string;
}

export const MainThumbnailListContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem 0.5rem;
  flex-grow: 1;

  width: 100%;
  height: 100%;

  padding: 0.5rem 1rem 0.5rem 0.5rem;
  overflow: auto;
  overflow-x: hidden;
`;

export const CardContainer = styled.div<ICardContainerProps>`
  width: 100%;
  height: 7rem;

  border-radius: 0.5rem;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  transform: none;
  transition: transform ease-in 0.15s;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }

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
