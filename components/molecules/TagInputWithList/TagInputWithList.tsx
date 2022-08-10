import { ITextInputProps, ITag, IApiResponse, IResponseTag } from 'types';
import React, { useState } from 'react';
import { TagInput } from 'components/atoms/TagInput';
import { useAxiosInstance } from '@hooks/useAxiosInstance';
import * as S from './TagInputWithList.styles';

interface ITagInputWithListProps extends ITextInputProps {
  value?: ITag[] | string;
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
  value,
  handleChange,
  onClickButton,
  ...props
}: ITagInputWithListProps) {
  const [inputValue, setInputValue] = useState<ITag[]>(
    value === undefined ? [] : (value as ITag[]),
  );

  const [allTags, setAllTags] = useState<ITag[]>([]);

  const instance = useAxiosInstance();

  const getAllTags = async () => {
    try {
      const data = await instance
        .get<IApiResponse<IResponseTag[]>>('/couples/tags', {})
        .then((response) => response.data.data);
      const tags = data.map(({ name, color }) => ({
        name,
        color,
      }));
      setAllTags(tags);
      return tags;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  getAllTags();

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
    if (handleChange) handleChange({ name: 'tags', value: newInputValue });
  };

  const handleDelete = (key: string) => {
    const newInputValue: ITag[] = inputValue.filter(({ name }) => name !== key);
    setInputValue(newInputValue);
    if (handleChange) handleChange({ name: 'tags', value: newInputValue });
  };

  const handleClickButton = (e?: React.MouseEvent<HTMLImageElement>) => {
    setInputValue([]);
    onClickButton(e);
  };

  return (
    <S.Container>
      <TagInput
        allTags={allTags}
        onEnterType={handleEnterType}
        onClickButton={handleClickButton}
        {...props}
      />
      <S.SelectedTags tagList={inputValue} onDelete={handleDelete} />
    </S.Container>
  );
}
