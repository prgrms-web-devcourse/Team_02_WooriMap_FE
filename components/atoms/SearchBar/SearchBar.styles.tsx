import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 10;
`;

export const Wrapper = styled.div<{ isSearching: boolean }>`
  position: relative;

  width: 208px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 8px;

  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px,
    rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  border-bottom: 1px solid transparent;
  border-radius: ${({ isSearching }) => (isSearching ? '8px 8px 0 0' : '8px')};
  z-index: 1;
  box-sizing: border-box;

  transition-duration: 0.3s;
  transition-property: background, box-shadow;
`;

export const Input = styled.input`
  margin: 0;
  width: 90%;

  background-color: transparent;
  border-radius: 0;
  border-style: initial;
  border-width: 0;
  outline: 0;

  font-family: inherit;
  font-weight: inherit;
  list-style: none;

  overflow: visible;
`;

export const SearchResultBox = styled.ul`
  position: relative;

  width: 208px;
  max-height: 150px;

  padding: 8px 0;

  background-color: #fff;
  border-radius: 0 0 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px;

  font-size: 15px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchResult = styled.li`
  width: 100%;
  min-height: 24px;

  display: flex;
  justify-content: start;
  align-items: center;

  padding: 8px 16px;

  cursor: pointer;
  color: #8c8c8c;

  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    outline: 0;
  }
`;
