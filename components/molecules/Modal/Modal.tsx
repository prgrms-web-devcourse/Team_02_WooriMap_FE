import ReactDOM from 'react-dom';
import { HTMLAttributes, useEffect, useMemo } from 'react';
import { useClickAway } from 'hooks';
import * as S from './Modal.styles';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function Modal({ isVisible, onClose, children, ...props }: IModalProps) {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  });

  return ReactDOM.createPortal(
    <S.BackgroundDim isVisible={isVisible}>
      <S.ModalContainer ref={ref} {...props}>
        {children}
      </S.ModalContainer>
    </S.BackgroundDim>,
    element,
  );
}
