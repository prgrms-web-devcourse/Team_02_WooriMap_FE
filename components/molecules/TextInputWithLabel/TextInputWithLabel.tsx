import { ITextInputProps } from 'types';
import { TextInput } from 'components';
import * as S from './TextInputWithLabel.styles';

interface ITextInputWithLabelProps extends ITextInputProps {
  error?: string;
  variant: 'input' | 'calendar' | 'textarea';
}

export function TextInputWithLabel(props: ITextInputWithLabelProps) {
  const { name, text, error, deleteAll, variant } = props;

  const onClickDeleteButton = () => {
    if (deleteAll && name) deleteAll(name);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor={name}>{text}</label>
        {variant === 'input' && (
          <TextInput onClickButton={onClickDeleteButton} {...props} />
        )}
      </S.Wrapper>
      <S.ValidationError>{error}</S.ValidationError>
    </S.Container>
  );
}
