import styled from '@emotion/styled';

interface ITagStyleProps {
  color: string;
  isDelete: boolean;
}

export const Tag = styled.div<ITagStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.2rem 0.5rem;

  border-radius: 1rem;

  background-color: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
  font-size: 0.8rem;
`;

export const DeleteButton = styled.button`
  padding-top: 0.2rem;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.5rem;
  cursor: pointer;
  appearance: none;
  opacity: 50%;

  transition: opacity ease-in 0.3s;
  :hover {
    opacity: 100%;
  }
`;
