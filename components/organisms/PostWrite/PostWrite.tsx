import { nanoid } from 'nanoid';
import { TextInputWithLabel, SearchableMap } from 'components';
import { IPostFormState, IFormInputProps } from 'types';
import * as S from './PostWrite.styles';

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

export function PostWrite({
  postState,
  handleChange,
  deleteAll,
}: IFormInputProps) {
  const { latitude, longitude } = postState as IPostWrite;

  const position = {
    latitude,
    longitude,
  };

  return (
    <S.Container>
      {temp.map((item) => (
        <TextInputWithLabel
          key={item.id}
          text={item.text}
          name={item.name}
          placeholder={item?.placeholder}
          value={postState[item.name as keyof IPostWrite]}
          handleChange={handleChange}
          variant={item.variant}
          deleteAll={deleteAll}
        />
      ))}
      <SearchableMap position={position} onChange={handleChange} />
    </S.Container>
  );
}
