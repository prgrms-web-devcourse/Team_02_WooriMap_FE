/* eslint-disable react/destructuring-assignment */
import { ITextInputProps, HandleChangeTypes, ITag } from 'types';
import { TextInput, CalendarInput, TextArea } from 'components';
import * as S from './TextInputWithLabel.styles';
import { TagInputWithList } from '../TagInputWithList';

interface ITextInputWithLabelProps extends ITextInputProps {
  error?: string;
  allTags?: ITag[];
}

export function TextInputWithLabel(props: ITextInputWithLabelProps) {
  const { name, text, deleteAll, variant, handleChange, value, allTags } =
    props;

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
        {variant === 'tag' && allTags && (
          <TagInputWithList
            value={value as ITag[]}
            onClickButton={onClickDeleteButton}
            handleChange={handleChange as HandleChangeTypes}
            allTags={allTags}
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
