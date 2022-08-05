import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TextInputWithLabel, SearchableMap } from 'components';
import { IPostFormState, IFormStateProps } from 'types';
import * as S from './PostWrite.styles';

interface IPostInitialState {
  title: string;
  date: string;
  content: string;
}

interface Itemp {
  id: string;
  text: string;
  name: string;
  variant: 'input' | 'calendar' | 'textarea' | 'tag';
  placeholder?: string;
}

const temp: Array<Itemp> = [
  {
    id: nanoid(),
    text: '제목',
    name: 'title',
    variant: 'input',
    placeholder: '제목을 입력해주세요',
  },
  {
    id: nanoid(),
    text: '날짜',
    name: 'date',
    variant: 'calendar',
  },
  {
    id: nanoid(),
    text: '내용',
    name: 'content',
    variant: 'textarea',
    placeholder: '우리의 이야기를 입력해주세요',
  },
];

type IPostWrite = Omit<IPostFormState, 'imageUrls'>;

export function PostWrite({ postState, onSetFormState }: IFormStateProps) {
  const initialValues: IPostWrite = postState as IPostWrite;

  const [values, setValues] = useState<IPostInitialState>(initialValues);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    onSetFormState({ name, value });
  };

  return (
    <S.Container>
      {temp.map((item) => (
        <TextInputWithLabel
          key={item.id}
          text={item.text}
          name={item.name}
          placeholder={item?.placeholder}
          value={values[item.name as keyof IPostInitialState]}
          onChange={onChange}
          variant={item.variant}
        />
      ))}
      <SearchableMap
        position={{
          latitude: postState!.latitude,
          longitude: postState!.longitude,
        }}
        onSetFormState={onSetFormState}
      />
    </S.Container>
  );
}
