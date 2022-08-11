import { TextInputWithLabel } from 'components';
import { HandleChangeTypes, IEditState } from 'types';
import { coupleTextInputProps } from './helper';

export function SoloForm({
  value,
  handleChange,
  removeAll,
  errors,
}: {
  value: IEditState;
  handleChange: HandleChangeTypes;
  removeAll: (name: string) => void;
  errors: IEditState;
}) {
  // 솔로인경우 구성되어야 할 폼입니다.
  const [input] = coupleTextInputProps;

  return (
    <TextInputWithLabel
      key={input.key}
      name={input.name}
      text={input.text}
      variant={input.variant}
      value={value[input.name as keyof IEditState]}
      handleChange={handleChange}
      deleteAll={removeAll}
      error={errors[input.name as keyof IEditState]}
    />
  );
}
