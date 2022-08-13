import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 65rem;
  height: 40rem;
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

  padding: 0 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const ContentSection = styled.div`
  width: 100%;

  padding: 3rem 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  box-shadow: ${({ theme }) => theme.boxShadow.organism};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  position: absolute;
  bottom: 1rem;
  right: 2rem;

  > button {
    opacity: 70%;

    transition: ${({ theme }) => theme.opacityTransition};

    :hover {
      opacity: 90%;
    }
  }
`;
