import { ITag } from 'types';
import React, { useState, InputHTMLAttributes } from 'react';
import { Tag } from 'components';
import * as S from './TagInput.styles';

interface ITagInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  allTags: ITag[];
  onEnterType: (newTagName: string) => void;
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

export function TagInput({ allTags, onEnterType, ...props }: ITagInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<ITag[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
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
    onEnterType(inputValue);
    setInputValue('');
    setOptions([]);
  };

  return (
    <S.TagInputContainer>
      <S.TagInput
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleComplete}
        hasOption={options.length > 0}
        {...props}
      />
      {options.length > 0 && (
        <S.DropDown>
          {options.map(({ name, color }) => (
            <li key={name}>
              <Tag name={name} color={color} />
            </li>
          ))}
        </S.DropDown>
      )}
    </S.TagInputContainer>
  );
}
