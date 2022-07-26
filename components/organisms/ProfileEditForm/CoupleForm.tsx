import { TextInputWithLabel } from 'components';
import { HandleChangeTypes, IEditInputProps, IEditState } from 'types';
import { coupleTextInputProps } from './helper';

export function CoupleForm({
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
  // 커플인 경우 구성되어야 할 폼입니다.
  return (
    <>
      {coupleTextInputProps.map((input: IEditInputProps) => {
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
      })}
    </>
  );
}
