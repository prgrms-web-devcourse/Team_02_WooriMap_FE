/* eslint-disable react/destructuring-assignment */
import { ITextInputProps, HandleChangeTypes } from 'types';
import { TextInput, CalendarInput, TextArea } from 'components';
import * as S from './TextInputWithLabel.styles';

interface ITextInputWithLabelProps extends ITextInputProps {
  error?: string;
}

export function TextInputWithLabel(props: ITextInputWithLabelProps) {
  const { name, text, deleteAll, variant, handleChange, value } = props;

  const onClickDeleteButton = () => {
    if (deleteAll && name) deleteAll(name);
  };

  return (
    <S.Container>
      <S.Wrapper isValidationNotUsed={props.error === undefined}>
        <label htmlFor={name}>{text}</label>
        {variant === 'input' && (
          <TextInput
            value={value as string}
            onClickButton={onClickDeleteButton}
            handleChange={handleChange as HandleChangeTypes}
            {...props}
          />
        )}
        {variant === 'calendar' && (
          <CalendarInput
            value={value as string}
            handleChange={handleChange as HandleChangeTypes}
            {...props}
          />
        )}
        {variant === 'textarea' && (
          <TextArea
            value={value as string}
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
