import styled from '@emotion/styled';

export const MainSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 384px;
  height: 128px;
  //훗날 taglist 스타일이 들어갈 자리
  div[id='taglist'] {
    height: 32px;
  }
`;
export const TagValidation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    width: 24px;
    height: 24px;
    border-radius: 8px;
  }
  div {
    font-weight: 500;
  }
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 384px;
  height: 32px;

  input[type='text'] {
    width: 352px;
    height: 100%;
    padding: 4px 4px;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    font-size: 18px;
  }
  button {
    width: 32px;
    height: 32px;
    padding: 0;
    background: none;
    border: none;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TagSearchBarContainer = styled.div`
  position: relative;
`;
export const FilteredTagList = styled.div`
  width: 22rem;
  min-height: 5rem;
  position: absolute;
  top: 2.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 500;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const FilteredTag = styled.div`
  width: fit-content;
  height: 2rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  background-color: ${({ color }) => color};
`;
