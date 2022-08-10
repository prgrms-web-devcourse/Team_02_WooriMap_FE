import React, { useCallback, useRef, useState } from 'react';
import * as S from './Dropdown.styles';

interface IDropdown {
  trigger?: React.ReactElement;
  children?: React.ReactNode;
}

function Dropdown({ trigger, children }: IDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [boundary, setBoundary] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggle = useCallback(() => {
    setBoundary(window.innerWidth);
    setIsOpen((prev) => !prev);
  }, []);

  const clonedTrigger = trigger
    ? React.cloneElement(trigger, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          toggle();
          trigger.props.onClick?.(e);
        },
      })
    : null;

  return (
    <S.DropdownWrapper>
      <S.DropdownTrigger>{clonedTrigger}</S.DropdownTrigger>
      <S.DropdownMenu display={isOpen} widthBoundary={boundary} ref={ref}>
        {children}
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
}

export default Dropdown;
