import styled from '@emotion/styled';
import { TextInput } from 'components';

interface ITagInputStyleProps {
  hasOption: boolean;
}

export const TagInputContainer = styled.div`
  position: relative;
`;

export const TagInput = styled(TextInput)<ITagInputStyleProps>`
  position: relative;
  z-index: 5;
`;

export const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 4;
  top: 30px;
  width: 100%;
  padding-top: 10px;
  max-height: 12rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  & > li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-left: 0.5rem;
  }
`;
