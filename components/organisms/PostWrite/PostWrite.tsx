import { useState } from 'react';
import { TextInput, TextArea, CalendarInput } from 'components';
import * as S from './PostWrite.styles';

interface IPostInitialState {
  title: string;
  date: string;
  content: string;
  position: {
    lat: number;
    lng: number;
  };
}

export function PostWrite() {
  const initialValues: IPostInitialState = {
    title: '',
    date: '',
    content: '',
    position: {
      lat: 0,
      lng: 0,
    },
  };

  const [values, setValues] = useState<IPostInitialState>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(values);
  };

  return (
    <S.Container>
      <TextInput
        name="title"
        value={values.title}
        type="text"
        onChange={onChange}
        onClickButton={() => {}}
      />
    </S.Container>
  );
}
