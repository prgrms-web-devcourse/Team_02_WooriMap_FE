import ReactDOM from 'react-dom';
import { HTMLAttributes, useEffect, useRef } from 'react';
import { useClickAway } from 'hooks';
import * as S from './Modal.styles';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function Modal({ isVisible, onClose, children, ...props }: IModalProps) {
  const portal = useRef<HTMLDivElement | null>(null);
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  useEffect(() => {
    if (portal.current) return;
    portal.current = document.createElement('div');
    document.body.appendChild(portal.current);
  });

  if (!portal.current) return <div />;

  return ReactDOM.createPortal(
    <S.BackgroundDim isVisible={isVisible}>
      <S.ModalContainer ref={ref} {...props}>
        {children}
      </S.ModalContainer>
    </S.BackgroundDim>,
    portal.current,
  );
}
