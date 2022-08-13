import styled from '@emotion/styled';

export const MainSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  width: 100%;
  height: fit-content;
`;

export const TagValidation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  input {
    width: 1.2rem;
    height: 1.2rem;

    border-radius: 0.5rem;

    box-shadow: ${({ theme }) => theme.boxShadow.atom};
    accent-color: ${({ theme }) => theme.colors.pink};

    cursor: pointer;
  }

  div {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: ${({ theme }) => theme.boxShadow.atom};
  }
`;

export const TagSearchBarContainer = styled.div`
  position: relative;
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  height: 2.3rem;
  padding: 0.5rem 3rem 0.5rem 1rem;

  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};

  :focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.pink};
  }

  input[type='text'] {
    flex-grow: 1;

    width: 100%;
    height: 100%;

    border: none;
    outline: none;
  }

  input[type='text']::placeholder {
    color: lightgray;
  }

  button {
    position: absolute;
    right: 0.6rem;

    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    background: none;
    border: none;

    opacity: 50%;
    transition: ${({ theme }) => theme.opacityTransition};
    cursor: pointer;

    :hover {
      opacity: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FilteredTagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  position: absolute;
  top: 3rem;
  z-index: 500;

  width: 100%;
  min-height: 2rem;

  padding: 0.8rem;

  border-radius: 0.3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};
`;

export const FilteredTag = styled.div`
  width: fit-content;

  padding: 0.3rem 0.8rem;

  border-radius: 1rem;

  opacity: 70%;
  background-color: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};

  font-size: 0.8rem;

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
