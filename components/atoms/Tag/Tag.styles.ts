import styled from '@emotion/styled';

interface ITagStyleProps {
  tagColor: string;
}

export const Tag = styled.div<ITagStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  margin: 0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.tagColor};
  font-size: 1rem;
  text-decoration: none;
`;

export const DeleteButton = styled.button`
  margin: 0;
  padding: none;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  text-align: center;
  font-size: 0.5rem;
  cursor: pointer;
  appearance: none;
`;
