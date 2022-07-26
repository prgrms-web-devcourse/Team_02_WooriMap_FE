import { ITag } from 'types';
import React, { useState, InputHTMLAttributes } from 'react';
import { Tag } from 'components';
import * as S from './TagInput.styles';

interface ITagInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  allTags: ITag[];
  onEnterType: (newTagName: string) => void;
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function TagInput({
  allTags,
  onEnterType,
  onKeyPress,
  ...props
}: ITagInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<ITag[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newInputValue = e.target.value;
    if (newInputValue.slice(-1) === '\\') {
      newInputValue = newInputValue.slice(0, -1);
      return;
    }
    if (newInputValue.length > 10) return;
    if (newInputValue.length === 0) {
      setOptions([]);
      setInputValue('');
      return;
    }

    const startsWith = new RegExp(`^${newInputValue}`);
    const newOptions: ITag[] = allTags.filter(({ name }) =>
      startsWith.test(name),
    );

    setInputValue(newInputValue);
    setOptions(newOptions);
  };

  const handleComplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return;
    if (inputValue.length > 0) onEnterType(inputValue);
    setInputValue('');
    setOptions([]);
  };

  const handleClick = (tagName: string) => () => {
    onEnterType(tagName);
    setInputValue('');
    setOptions([]);
  };

  return (
    <S.TagInputContainer>
      <S.TagInput
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleComplete}
        hasOption={options.length > 0}
        autoComplete="off"
        onKeyPress={onKeyPress}
        {...props}
      />
      {options.length > 0 && (
        <S.DropDown>
          {options.map(({ name, color }) => (
            <li key={name}>
              <S.ListItem type="button" onClick={handleClick(name)}>
                <Tag name={name} color={color} />
              </S.ListItem>
            </li>
          ))}
        </S.DropDown>
      )}
    </S.TagInputContainer>
  );
}
