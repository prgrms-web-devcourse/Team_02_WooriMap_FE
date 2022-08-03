import styled from '@emotion/styled';

interface ICardContainerProps {
  url: string;
}

export const MainThumbnailListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 400px;
  height: 512px;
  overflow: auto;
`;

export const CardContainer = styled.div<ICardContainerProps>`
  width: 184px;
  height: 160px;
  border-radius: 8px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
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
