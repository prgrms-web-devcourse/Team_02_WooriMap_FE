// 1. 임의의 색깔 부여, 후에 tag.styles고치기
// 2. 외부 클릭시 DropDown 닫히게
// 3. 리팩토링- 로직, 컴포넌트 나누기 등
// 2. css

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

const defaultTagColors: string[] = [
  'rgba(217, 217, 217, 1)',
  'rgba(217, 217, 217, 0.5)',
  'rgba(255, 143, 143, 1)',
  'rgba(255, 143, 143, 0.5)',
  'rgba(151, 186, 255, 1)',
  'rgba(151, 186, 255, 0.5)',
  'rgba(255, 234, 122, 1)',
  'rgba(255, 234, 122, 0.5)',
];

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
        autoComplete="off"
        dropDownActivated={displayDropDown}
      />
      {displayDropDown && (
        <S.DropDown>
          {inputOptions.map((tag) => (
            <li key={tag.name}>
              <div>
                <Tag name={tag.name} color={tag.color} />
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
    const tagColor = defaultTagColors[Math.floor(Math.random() * 8)];

    if (value.some((tag) => tag.name === tagName)) return;

    const newValue: ITag[] = [...value];
    const newTag = { name: tagName, color: tagColor };
    tagData.forEach((tagInfo) => {
      if (newTag.name === tagInfo.name) {
        newTag.color = tagInfo.color;
      }
    });
    newValue.push(newTag);
    setValue(newValue);
  };

  const handleDelete = (tagName: string) => () => {
    const newValue: ITag[] = [...value].filter((tag) => tag.name !== tagName);
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
      <S.SelectedTags>
        {value.length > 0 &&
          value.map((tagInfo) => (
            <S.SelectedTag
              key={tagInfo.name}
              name={tagInfo.name}
              color={tagInfo.color}
              onDelete={handleDelete(tagInfo.name)}
            />
          ))}
      </S.SelectedTags>
    </S.TagInput>
  );
}
