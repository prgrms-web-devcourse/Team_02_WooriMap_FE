import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-image: url('/image/pagebackground.png');
  background-size: cover;

  color: #000000bb;

  font-family: 'Noto Sans KR', sans-serif;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  height: fit-content;

  margin-bottom: 3rem;
`;

export const Wrapper = styled.main``;
