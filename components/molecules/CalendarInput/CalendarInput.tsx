import { InputHTMLAttributes, useRef } from 'react';
import { HandleChangeTypes, ITag } from 'types';
import calendar from 'public/image/calendar.png';
import * as S from './CalendarInput.styles';

interface ICalenderInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  id?: string;
  value: string | Array<ITag>;
  handleChange: HandleChangeTypes;
}

export function CalendarInput({
  id,
  name,
  value,
  handleChange,
}: ICalenderInputProps) {
  const calendarInputRef = useRef<HTMLInputElement | null>(null);

  const onClickCalendarButton = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (calendarInputRef.current) calendarInputRef.current.focus();
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <S.CalendarInputWrapper>
      <S.CalendarButton>
        <S.CalendarImage
          src={calendar}
          width={25}
          height={28}
          alt="calendar"
          onClick={onClickCalendarButton}
        />
      </S.CalendarButton>

      <S.CalendarInput
        id={id}
        type="date"
        name={name}
        value={value as string}
        onChange={(e) => handleChange({ e })}
        onKeyPress={onKeyPress}
        ref={calendarInputRef}
      />
    </S.CalendarInputWrapper>
  );
}
