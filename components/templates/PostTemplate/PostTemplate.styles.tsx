import styled from '@emotion/styled';

export const Container = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  height: 100%;

  gap: 2rem;
  padding: 2rem 1.5rem;

  box-sizing: border-box;
`;

export const ImageSection = styled.div`
  /* background: red; */
  overflow: auto;
`;

export const ContentSection = styled.div`
  /* background: blue; */
  overflow: auto;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  grid-column: 1 / 3;
`;
