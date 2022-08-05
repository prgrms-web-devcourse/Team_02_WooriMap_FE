import styled from '@emotion/styled';

interface INameInputProps {
  dropDownActivated: boolean;
}

export const TagInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputTitle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 20px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  word-break: break-all;
`;

export const TagForm = styled.form`
  position: relative;
`;

export const NameInput = styled.input<INameInputProps>`
  position: relative;
  z-index: 5;
  outline-style: none;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  outline: 0;
  width: 96%;
  font-size: 16px;
  font-weight: 600;
  ${({ dropDownActivated }) =>
    dropDownActivated && {
      borderRadius: '10px 10px 0px 0px',
      borderBottom: 'none',
    }}
`;

export const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 4;
  top: auto;
  width: 96%;
  max-height: 12rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0px 0px 10px 10px;
  & > li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-left: 0.5rem;
    // border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const ValidationError = styled.p`
  height: 12px;
  margin: 4px 0 12px 56px;
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.alert};
`;
