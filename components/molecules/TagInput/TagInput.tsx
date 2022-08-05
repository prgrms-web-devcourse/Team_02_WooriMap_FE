// 1. 외부 클릭시 검색 중단
// 2. 임의의 색깔 부여
// 3. 드롭다운 메뉴에서 항목 선택 (클릭이든 엔터든)
// 4. css
// 5. Deletable TagList 넣기

import { ITextInputProps, ITag } from 'types';
import React, { useState } from 'react';
import { Tag } from 'components/atoms/Tag';
import * as S from './TagInput.styles';

interface IFormElements extends HTMLFormControlsCollection {
  tagName: HTMLInputElement;
}

interface IFormElement extends HTMLFormElement {
  readonly elements: IFormElements;
}

interface ITagFormProps {
  name: string;
  data: ITag[];
  onSubmit: (e: React.FormEvent<IFormElement>) => void;
}

interface ITagInputProps extends ITextInputProps {
  name: string;
  text: string;
  error: string;
  tags: ITag[];
  tagData: ITag[];
}

export function TagForm({
  name,
  data,
  onSubmit,
}: ITagFormProps): React.ReactElement {
  const [inputOptions, setInputOptions] = useState<ITag[]>([]);
  const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let newOptions: ITag[] = [];

    if (inputValue !== '') {
      const regex = new RegExp(`^${inputValue}`, 'i');
      newOptions = data.filter((tag) => regex.test(tag.name));
    }
    setInputOptions(newOptions);
    setDisplayDropDown(newOptions.length > 0);
  };

  return (
    <S.TagForm id={name} onSubmit={onSubmit}>
      <S.NameInput
        id="tagName"
        onChange={onInputChange}
        dropDownActivated={displayDropDown}
      />
      {displayDropDown && (
        <S.DropDown>
          {inputOptions.map((tag) => (
            <li key={tag.name}>
              <div>
                <Tag tagName={tag.name} tagColor={tag.color} />
              </div>
            </li>
          ))}
        </S.DropDown>
      )}
    </S.TagForm>
  );
}

export function TagInput({ name, text, error, tags, tagData }: ITagInputProps) {
  const [value, setValue] = useState<ITag[]>(tags);

  const handleSubmit = (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    const tagName = e.currentTarget.elements.tagName.value;
    e.currentTarget.elements.tagName.value = '';

    if (value.some((tag) => tag.name === tagName)) return;

    const newValue: ITag[] = [...value];
    const newTag = { name: tagName, color: '#FFFF00' };
    tagData.forEach((tagInfo) => {
      if (newTag.name === tagInfo.name) {
        newTag.color = tagInfo.color;
      }
    });
    newValue.push(newTag);
    setValue(newValue);
  };

  // 추후에 form tag 내부에 colorInput 삽입하기
  return (
    <S.TagInput>
      <S.FormContainer>
        <S.InputTitle htmlFor="addTag">{text}</S.InputTitle>
        <TagForm name={name} onSubmit={handleSubmit} data={tagData} />
      </S.FormContainer>
      <S.ValidationError>{error}</S.ValidationError>
      <ul>
        {value.map((tag) => (
          <li key={tag.name}>
            <Tag tagName={tag.name} key={name} tagColor={tag.color} />
          </li>
        ))}
      </ul>
    </S.TagInput>
  );
}
