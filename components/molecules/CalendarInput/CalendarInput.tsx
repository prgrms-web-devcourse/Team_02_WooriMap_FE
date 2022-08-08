import { InputHTMLAttributes, useRef } from 'react';
import { HandleChangeTypes } from 'types';
import calendar from 'public/image/calendar.png';
import * as S from './CalendarInput.styles';

interface ICalenderInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
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

  console.log(name);

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
        value={value}
        onChange={(e) => handleChange({ e })}
        ref={calendarInputRef}
      />
    </S.CalendarInputWrapper>
  );
}
