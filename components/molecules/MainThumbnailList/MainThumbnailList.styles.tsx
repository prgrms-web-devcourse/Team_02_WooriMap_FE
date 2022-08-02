import styled from '@emotion/styled';

export const MainThumbnailListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 400px;
  height: 512px;
  overflow: auto;
`;

export const CardContainer = styled.div`
  width: 184px;
  height: 160px;
  border-radius: 8px;
  background-image: url('https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/test+5.png');
  background-size: cover;
  /* background-image: url(${({ url }: { url: string }) => url}); */
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
