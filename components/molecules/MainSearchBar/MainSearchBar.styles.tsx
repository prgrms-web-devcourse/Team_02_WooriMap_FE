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
