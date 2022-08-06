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
  allTags: ITag[];
  onSubmit: (e: React.FormEvent<IFormElement>) => void;
}

interface ITagInputProps extends ITextInputProps {
  allTags: ITag[];
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
  allTags,
  onSubmit,
}: ITagFormProps): React.ReactElement {
  const [tagName, setTagName] = useState<string>('');
  const [tagOptions, setTagOptions] = useState<ITag[]>([]);
  const nameInputRef = useRef<null | HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (newName.length > 10) return;

    if (newName.length > 0) {
      const startsWith = new RegExp(`^${newName}`);
      const newOptions: ITag[] = allTags.filter(({ name }) =>
        startsWith.test(name),
      );
      setTagOptions(newOptions);
    }
    setTagName(newName);
  };

  const handleSubmit = (e: React.FormEvent<IFormElement>) => {
    onSubmit(e);
    setTagName('');
    setTagOptions([]);
  };

  return (
    <S.TagForm onSubmit={handleSubmit}>
      <S.NameInput
        ref={nameInputRef}
        id="tagName"
        value={tagName}
        onChange={handleChange}
        autoComplete="off"
        dropDownActivated={tagOptions.length > 0}
      />
      {tagOptions.length > 0 && (
        <S.DropDown>
          {tagOptions.map(({ name, color }) => (
            <li key={name}>
              <Tag name={name} color={color} />
            </li>
          ))}
        </S.DropDown>
      )}
    </S.TagForm>
  );
}

export function TagInput({ text, allTags }: ITagInputProps) {
  const [inputValue, setInputValue] = useState<ITag[]>([]);

  const handleNewTagAdd = (e: React.FormEvent<IFormElement>) => {
    e.preventDefault();
    const tagName = e.currentTarget.elements.tagName.value;
    const tagColor = defaultTagColors[Math.floor(Math.random() * 8)];

    const newValue = [...inputValue];
    const newTag = { name: tagName, color: tagColor };

    if (inputValue.some((tag) => tag.name === tagName)) return;
    allTags.forEach((tagInfo) => {
      if (newTag.name === tagInfo.name) {
        newTag.color = tagInfo.color;
      }
    });

    newValue.push(newTag);
    setInputValue(newValue);
  };

  const handleDelete = (tagName: string) => () => {
    const newValue: ITag[] = [...inputValue].filter(
      (tag) => tag.name !== tagName,
    );
    setInputValue(newValue);
  };

  return (
    <S.TagInput>
      <S.FormContainer>
        <S.InputTitle htmlFor="addTag">{text}</S.InputTitle>
        <TagForm onSubmit={handleNewTagAdd} allTags={allTags} />
      </S.FormContainer>
      <S.SelectedTags>
        {inputValue.length > 0 &&
          inputValue.map((tagInfo) => (
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
