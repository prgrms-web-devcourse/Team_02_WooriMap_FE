import { ITextInputProps, ITag } from 'types';
import { TextInput } from 'components';
import React, { useState } from 'react';
import { Tag } from 'components/atoms/Tag';
import * as S from './TagInput.styles';

interface IFormElements extends HTMLFormControlsCollection {
  tagName: HTMLInputElement;
}

interface IFormElement extends HTMLFormElement {
  readonly elements: IFormElements;
}

interface ITagInputProps extends ITextInputProps {
  name: string;
  text: string;
  error: string;
  tags: ITag[];
}

export function TagInput({
  name,
  text,
  error,
  tags,
  deleteAll,
}: ITagInputProps) {
  const [value, setValue] = useState(tags);

  const handleSubmit = (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const tagName = elements.tagName.value;
    const newValue: ITag[] = [...value];
    // 1. input과 동일한 이름을 가진 tag가 있는지 검색
    // 2. 없다면 새 색깔을 가진 tag를 만들어서 push
    newValue.push({ name: tagName, color: '#FFFF00' });
    setValue(newValue);

    elements.tagName.value = '';
  };

  const onClickDeleteButton = () => {
    if (deleteAll && name) deleteAll(name);
  };

  // 추후에 form tag 내부에 colorInput 삽입하기
  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor="addTag">{text}</label>
        <form id="addTag" onSubmit={handleSubmit}>
          <TextInput name="tagName" onClickButton={onClickDeleteButton} />
        </form>
      </S.Wrapper>
      <S.ValidationError>{error}</S.ValidationError>
      {value.map((tagInfo) => (
        <Tag tagName={tagInfo.name} key={name} tagColor={tagInfo.color} />
      ))}
    </S.Container>
  );
}
