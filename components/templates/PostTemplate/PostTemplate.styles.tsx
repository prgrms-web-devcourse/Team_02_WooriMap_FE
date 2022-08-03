import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  height: 100%;

  gap: 1rem;
  padding: 2rem 1.5rem;

  box-sizing: border-box;
`;

export const ImageSection = styled.div`
  background: red;
  overflow: auto;
`;

export const ContentSection = styled.div`
  background: blue;
  overflow: auto;
`;
