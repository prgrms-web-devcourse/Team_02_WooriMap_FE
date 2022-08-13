import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 90rem;
  height: 55rem;
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const ContentSection = styled.div`
  width: 100%;

  padding: 4rem 3rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  bottom: 2rem;
  right: 3rem;

  width: 100%;

  > button {
    opacity: 70%;

    transition: ${({ theme }) => theme.opacityTransition};

    :hover {
      opacity: 90%;
    }
  }

  & > button:first-of-type {
    margin-right: 1rem;
  }
`;
