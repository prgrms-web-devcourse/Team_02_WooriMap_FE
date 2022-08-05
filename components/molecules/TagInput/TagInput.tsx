import { ITextInputProps, ITag } from 'types';
import React, { useState, useRef } from 'react';
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
  tags: ITag[];
  tagData: ITag[];
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

export function TagForm({
  name,
  data,
  onSubmit,
}: ITagFormProps): React.ReactElement {
  const [value, setValue] = useState<string>('');
  const [options, setOptions] = useState<ITag[]>([]);
  const ref = useRef<null | HTMLInputElement>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 10) return;

    if (newValue.length > 0) {
      const regex = new RegExp(`^${newValue}`, 'i');
      const newOptions: ITag[] = data.filter((tag) => regex.test(tag.name));
      if (
        options.length !== newOptions.length ||
        options.some((tag, i) => tag.name === newOptions[i].name)
      )
        setOptions(newOptions);
    }
    setValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent<IFormElement>) => {
    onSubmit(e);
    setValue('');
    setOptions([]);
  };

  return (
    <S.TagForm id={name} onSubmit={handleSubmit}>
      <S.NameInput
        ref={ref}
        id="tagName"
        value={value}
        onChange={onInputChange}
        autoComplete="off"
        dropDownActivated={options.length > 0}
      />
      {options.length > 0 && (
        <S.DropDown>
          {options.map((tag) => (
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

export function TagInput({ name, text, tags, tagData }: ITagInputProps) {
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

  return (
    <S.TagInput>
      <S.FormContainer>
        <S.InputTitle htmlFor="addTag">{text}</S.InputTitle>
        <TagForm name={name} onSubmit={handleSubmit} data={tagData} />
      </S.FormContainer>
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
