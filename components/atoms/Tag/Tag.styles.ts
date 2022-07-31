import styled from '@emotion/styled';

interface ITagStyleProps {
  tagColor: string;
}

export const Tag = styled.div<ITagStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;

  font-size: 16px;
  padding: 8px 12px;
  border-radius: 25px;
  border: 1px solid black;
  background-color: ${(props) => props.tagColor};
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  margin: 0;

  font-size: 14px;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
