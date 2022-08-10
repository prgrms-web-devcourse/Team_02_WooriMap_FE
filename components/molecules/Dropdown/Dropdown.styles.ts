import styled from '@emotion/styled';

interface IDropdownMenu {
  display: boolean;
  widthBoundary: number;
}

export const DropdownMenu = styled.div<Partial<IDropdownMenu>>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  right: 0;

  max-width: ${({ widthBoundary }) =>
    widthBoundary ? `${Math.min(widthBoundary, 20 * 16)}px` : '20rem'};
  max-height: 40rem;
  z-index: 99999;

  padding: 1rem;
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

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownTrigger = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownItem = styled.div`
  padding: 1rem;
  width: 100%;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
