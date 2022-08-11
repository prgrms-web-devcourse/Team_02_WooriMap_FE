import React, { useCallback, useRef, useState } from 'react';
import * as S from './Dropdown.styles';

interface IDropdown {
  trigger?: React.ReactElement;
  children?: React.ReactElement[];
}

function Dropdown({ trigger, children }: IDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [boundary, setBoundary] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const calculateWidth = useCallback(() => {
    if (!ref.current) return;
    setBoundary(
      ref.current.getBoundingClientRect().width +
        ref.current.getBoundingClientRect().left,
    );
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const clonedTrigger = trigger
    ? React.cloneElement(trigger, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          calculateWidth();
          toggle();
          trigger.props.onClick?.(e);
        },
      })
    : null;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        close();
        child.props.onClick?.(e);
      },
    });
  });

  return (
    <S.DropdownWrapper>
      <S.DropdownTrigger>{clonedTrigger}</S.DropdownTrigger>
      <S.DropdownMenu display={isOpen} widthBoundary={boundary} ref={ref}>
        {childrenWithProps}
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
}

export default Dropdown;
