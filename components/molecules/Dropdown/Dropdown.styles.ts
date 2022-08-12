import styled from '@emotion/styled';

interface IDropdownMenu {
  isOpen: boolean;
  widthBoundary: number;
}

export const DropdownWrapper = styled.div`
  display: inline-block;

  position: relative;
`;

export const DropdownMenu = styled.ul<IDropdownMenu>`
  visibility: ${({ isOpen: display }) => (display ? 'visible' : 'hidden')};
  position: absolute;
  right: 0;

  max-width: ${({ widthBoundary }) =>
    widthBoundary ? `${Math.min(widthBoundary, 20 * 16)}px` : '20rem'};
  max-height: 40rem;
  z-index: 99999;

  padding: 1rem 0;
  background-color: white;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 1px 4px 5px #00000026;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownTrigger = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownItem = styled.li`
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid rgba(191, 191, 191, 0.3);

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  cursor: pointer;

  :hover {
    background-color: rgba(191, 191, 191, 0.3);
  }
`;
