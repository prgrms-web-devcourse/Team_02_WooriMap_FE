import React, { useCallback, useRef, useState } from 'react';
import { useClickAway } from 'hooks/useClickAway';
import * as S from './Dropdown.styles';

interface IDropdown extends React.HTMLAttributes<HTMLUListElement> {
  trigger?: React.ReactElement;
  children?: React.ReactNode;
}

interface IDropdownItem extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

function DropdownItem({ children, ...props }: IDropdownItem) {
  return <S.DropdownItem {...props}>{children}</S.DropdownItem>;
}

function Dropdown({ trigger, children, ...props }: IDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [boundary, setBoundary] = useState(0);
  const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

  const calculateWidth = useCallback(() => {
    if (!dropdownMenuRef.current) return;
    setBoundary(
      dropdownMenuRef.current.getBoundingClientRect().width +
        dropdownMenuRef.current.getBoundingClientRect().left,
    );
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dropdownRef = useClickAway<HTMLDivElement>(close);

  const triggerWithProps = trigger
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
    <S.DropdownWrapper ref={dropdownRef}>
      <S.DropdownTrigger>{triggerWithProps}</S.DropdownTrigger>
      <S.DropdownMenu
        isOpen={isOpen}
        widthBoundary={boundary}
        ref={dropdownMenuRef}
        {...props}
      >
        {childrenWithProps}
      </S.DropdownMenu>
    </S.DropdownWrapper>
  );
}

export { Dropdown, DropdownItem };
