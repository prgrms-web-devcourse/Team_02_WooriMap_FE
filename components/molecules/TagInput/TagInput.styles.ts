import styled from '@emotion/styled';
import { TextInput } from 'components/molecules/TextInput';

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
  box-shadow: ${({ theme }) => theme.boxShadow.atom};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 0px 0px 10px 10px;
  & > li {
    width: 100%;
    height: 3rem;
  }
`;

export const ListItem = styled.button`
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
