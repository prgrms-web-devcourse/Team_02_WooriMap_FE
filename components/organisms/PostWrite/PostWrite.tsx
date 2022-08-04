import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TextInputWithLabel } from 'components';
import * as S from './PostWrite.styles';
import { formatDate } from '../../../utils/formatDate';

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
}

const temp: Array<Itemp> = [
  {
    id: nanoid(),
    text: '제목',
    name: 'title',
    variant: 'input',
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
  },
];

export function PostWrite() {
  const initialValues: IPostInitialState = {
    title: '',
    date: formatDate(),
    content: '',
  };

  const [values, setValues] = useState<IPostInitialState>(initialValues);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <S.Container>
      {temp.map((item) => (
        <TextInputWithLabel
          key={item.id}
          text={item.text}
          name={item.name}
          value={values[item.name as keyof IPostInitialState]}
          onChange={onChange}
          variant={item.variant}
        />
      ))}
    </S.Container>
  );
}
