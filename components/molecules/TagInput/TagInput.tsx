// 1. 외부 클릭시 검색 중단
// 2. Input 아래에 Tag들 드롭다운 형식으로 출력
// 3. Input 입력시 value에 이미 있는 태그인지 검사, 있으면 추가 안 함
// 4. Input 입력시 tagData에 이미 있는 태그인지 검사, 있으면 tagData에 있는 태그를 추가
// 5. 색깔 Randomize
// 6. Deletable TagList 넣기

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
  tagData: ITag[];
}

export function TagInput({ name, text, error, tags, tagData }: ITagInputProps) {
  const [value, setValue] = useState<ITag[]>(tags);
  const [inputOptions, setInputOptions] = useState<ITag[]>([]);

  const handleSubmit = (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const tagName = elements.tagName.value;
    const newValue: ITag[] = [...value];
    newValue.push({ name: tagName, color: '#FFFF00' });
    setValue(newValue);

    elements.tagName.value = '';
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let newOptions: ITag[] = [];

    if (inputValue !== '') {
      const regex = new RegExp(`^${inputValue}`, 'i');
      newOptions = tagData.filter((tag) => regex.test(tag.name));
    }
    setInputOptions(newOptions);
  };
  // 추후에 form tag 내부에 colorInput 삽입하기
  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor="addTag">{text}</label>
        <form id="addTag" onSubmit={handleSubmit}>
          <TextInput
            name="tagName"
            onChange={onInputChange}
            onClickButton={() => {}}
          />
        </form>
      </S.Wrapper>
      <S.ValidationError>{error}</S.ValidationError>
      자동완성된애들
      <ul>
        {inputOptions.map((tag) => (
          <li key={tag.name}>
            <Tag tagName={tag.name} tagColor={tag.color} />
          </li>
        ))}
      </ul>
      선택된애들
      <ul>
        {value.map((tag) => (
          <li key={tag.name}>
            <Tag tagName={tag.name} key={name} tagColor={tag.color} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
