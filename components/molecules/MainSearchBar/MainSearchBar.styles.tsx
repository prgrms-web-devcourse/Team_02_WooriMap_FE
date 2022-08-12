import styled from '@emotion/styled';

export const MainSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  height: fit-content;
`;

export const TagValidation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 0.5rem;

    box-shadow: ${({ theme }) => theme.boxShadow.atom};
    accent-color: ${({ theme }) => theme.colors.pink};

    cursor: pointer;
  }

  div {
    font-family: 'Noto Sans KR', sans-serif;
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
  height: 3rem;
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

    font-size: 1.2rem;
  }

  input[type='text']::placeholder {
    color: lightgray;
  }

  button {
    position: absolute;
    right: 1rem;

    width: 2.5rem;
    height: 2.5rem;
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
  position: absolute;
  top: 4rem;
  z-index: 500;

  width: 100%;
  min-height: 5rem;

  padding: 1rem;

  border-radius: 0.5rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.molecule};
`;

export const FilteredTag = styled.div`
  width: fit-content;
  height: 2rem;

  margin: 1rem 0;
  padding: 0.5rem 1rem;

  border-radius: 1rem;

  opacity: 70%;
  background-color: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};

  transition: ${({ theme }) => theme.opacityTransition};

  :hover {
    opacity: 100%;
  }
`;
