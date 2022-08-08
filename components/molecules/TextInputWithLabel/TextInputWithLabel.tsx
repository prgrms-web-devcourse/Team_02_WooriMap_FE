/* eslint-disable react/destructuring-assignment */
import { ITextInputProps, HandleChangeTypes } from 'types';
import { TextInput, CalendarInput, TextArea } from 'components';
import * as S from './TextInputWithLabel.styles';

interface ITextInputWithLabelProps extends ITextInputProps {
  error?: string;
}

export function TextInputWithLabel(props: ITextInputWithLabelProps) {
  const { name, text, deleteAll, variant, handleChange } = props;

  const onClickDeleteButton = () => {
    if (deleteAll && name) deleteAll(name);
  };

  return (
    <S.Container>
      <S.Wrapper isValidationNotUsed={props.error === undefined}>
        <label htmlFor={name}>{text}</label>
        {variant === 'input' && (
          <TextInput
            onClickButton={onClickDeleteButton}
            handleChange={handleChange as HandleChangeTypes}
            {...props}
          />
        )}
        {variant === 'calendar' && (
          <CalendarInput
            handleChange={handleChange as HandleChangeTypes}
            {...props}
          />
        )}
        {variant === 'textarea' && (
          <TextArea
            onClickButton={onClickDeleteButton}
            handleChange={handleChange as HandleChangeTypes}
            {...props}
          />
        )}
      </S.Wrapper>
      {props.error !== undefined && (
        <S.ValidationError>{props.error}</S.ValidationError>
      )}
    </S.Container>
  );
}
