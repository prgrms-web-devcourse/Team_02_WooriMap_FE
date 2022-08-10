import { TextInputWithLabel, SearchableMap } from 'components';
import { IPostFormState, IFormInputProps, ITag } from 'types';
import { inputList } from './helper';
import * as S from './PostWrite.styles';

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

  const allTags: ITag[] = [
    { name: '태그1', color: '#59CE8F' },
    { name: '태그2', color: '#9C9EFE' },
    { name: '태그3', color: '#607EAA' },
    { name: '이태그4', color: '#94B49F' },
    { name: '이태그5', color: '#FF8FB1' },
    { name: '이태그da', color: '#7DCE13' },
    { name: '저태그6', color: '#D1512D' },
    { name: '이태그인가4', color: '#94B49F' },
    { name: '이태그맞나5', color: '#FF8FB1' },
    { name: '저태그같다6', color: '#D1512D' },
    { name: '저태그아니다17', color: '#7DCE13' },
    { name: '저태그아닐수도있음', color: '#9C9EFE' },
    { name: '저태그아닌가17', color: '#607EAA' },
  ];

  return (
    <S.Container>
      {inputList.map((item) => (
        <TextInputWithLabel
          key={item.id}
          text={item.text}
          name={item.name}
          placeholder={item?.placeholder}
          value={postState[item.name as keyof IPostWrite] as string}
          handleChange={handleChange}
          variant={item.variant}
          deleteAll={deleteAll}
          allTags={allTags}
        />
      ))}
      <SearchableMap position={position} handleChange={handleChange} />
    </S.Container>
  );
}
