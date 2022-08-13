import { TextInputWithLabel, SearchableMap } from 'components';
import { IPostFormState, IFormInputProps, IPostValidationState } from 'types';
import { inputList } from './helper';
import * as S from './PostWrite.styles';

type IPostWrite = Omit<IPostFormState, 'imageUrls'>;

export function PostWrite({
  postState,
  handleChange,
  deleteAll,
  errorState,
}: IFormInputProps) {
  const { latitude, longitude } = postState as IPostWrite;

  const position = {
    latitude,
    longitude,
  };

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
          error={errorState[item.name as keyof IPostValidationState]}
        />
      ))}
      <SearchableMap
        position={position}
        handleChange={handleChange}
        error={Boolean(errorState.latitude || errorState.longitude)}
      />
    </S.Container>
  );
}
