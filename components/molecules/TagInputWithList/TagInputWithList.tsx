import { ITextInputProps, ITag } from 'types';
import React, { useState } from 'react';
import { TagInput } from 'components/atoms/TagInput';
import * as S from './TagInputWithList.styles';

interface ITagInputWithListProps extends ITextInputProps {
  allTags: ITag[];
  onClickButton: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

const defaultTagColors: string[] = [
  '#d9d9d9',
  '#d9d9d980',
  '#ff8f8f',
  '#ff8f8f80)',
  '#97baff',
  '#97baff80',
  '#ffea7a',
  '#ffea7a80',
];

export function TagInputWithList({
  allTags,
  ...props
}: ITagInputWithListProps) {
  const [inputValue, setInputValue] = useState<ITag[]>([]);

  const handleEnterType = (newTagName: string) => {
    if (inputValue.some((tag) => tag.name === newTagName)) return;

    const tagColor = defaultTagColors[Math.floor(Math.random() * 8)];
    const newTag = { name: newTagName, color: tagColor };

    allTags.forEach(({ name, color }) => {
      if (newTag.name === name) {
        newTag.color = color;
      }
    });

    const newInputValue = [...inputValue];
    newInputValue.push(newTag);
    setInputValue(newInputValue);
  };

  const handleDelete = (key: string) => {
    const newValue: ITag[] = inputValue.filter(({ name }) => name !== key);
    setInputValue(newValue);
  };

  return (
    <S.TagInput>
      <TagInput allTags={allTags} onEnterType={handleEnterType} {...props} />
      <S.SelectedTags tagList={inputValue} onDelete={handleDelete} />
    </S.TagInput>
  );
}
