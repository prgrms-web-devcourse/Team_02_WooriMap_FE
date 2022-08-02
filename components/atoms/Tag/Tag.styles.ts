import styled from '@emotion/styled';

interface ITagStyleProps {
  tagColor: string;
}

export const Tag = styled.div<ITagStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 8px 12px;

  text-decoration: none;
  font-size: 16px;

  border-radius: 25px;
  border: none;
  background-color: ${(props) => props.tagColor};
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  margin: 0;
  padding: none;
  border: none;
  border-radius: 50%;

  font-size: 14px;
  background-color: rgba(0, 0, 0, 0);
`;
