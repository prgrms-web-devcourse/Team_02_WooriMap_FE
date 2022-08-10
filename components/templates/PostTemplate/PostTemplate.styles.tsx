import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 2rem 5%;

  box-sizing: border-box;
`;

export const PostContent = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55%;
`;

export const ImageSection = styled.div`
  width: 45%;
  overflow: auto;
`;

export const ContentSection = styled.div`
  width: 45%;
  overflow: auto;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  & > button:first-child {
    margin-right: 1rem;
  }

  grid-column: 1 / 3;
`;
