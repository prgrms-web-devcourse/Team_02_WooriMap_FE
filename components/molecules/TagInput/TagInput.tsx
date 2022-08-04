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
    // 1. input과 동일한 이름을 가진 tag가 있는지 검색
    // 2. 없다면 새 색깔을 가진 tag를 만들어서 push
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
