import styled from '@emotion/styled';
import { TextInput } from 'components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > label {
    width: 52px;
    height: 20px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    word-break: break-all;
  }
`;

export const TagInfoInputContainer = styled.form`
  border: none;
`;

export const TagNameInput = styled(TextInput)`
  width: 160px;
`;

export const DropDownContainer = styled.ul`
  width: 160px;
  height: 12rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  & > li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const Inner = styled.div`
  width: 100%;
  margin: 4px 0 0 30%;
`;

export const ValidationError = styled.p`
  height: 12px;
  margin: 4px 0 12px 56px;
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.alert};
`;
