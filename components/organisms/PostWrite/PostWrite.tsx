import { useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import {
  TextInput,
  TextArea,
  CalendarInput,
  TextInputWithLabel,
} from 'components';
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
    date: dayjs().format('YYYY-MM-DD'),
    content: '',
  };

  const [values, setValues] = useState<IPostInitialState>(initialValues);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
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
//       }
//       <TextInput
//         name="title"
//         value={values.title}
//         type="text"
//         onChange={onChange}
//         onClickButton={() => {}}
//       />
//       <CalendarInput name="date" value={values.date} onChange={onChange} />
//       <TextArea name="content" value={values.content} onChange={onChange} />
//     </S.Container>
//   );
// }
