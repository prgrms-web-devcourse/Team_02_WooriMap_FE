import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
  padding: 32px 24px;

  box-sizing: border-box;
`;

export const ImageSection = styled.div`
  background: red;
`;

export const ContentSecion = styled.div`
  background: blue;
`;
