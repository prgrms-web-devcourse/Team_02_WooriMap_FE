import { InputHTMLAttributes, useRef } from 'react';

import calendar from 'public/image/calendar.png';
import * as S from './CalendarInput.styles';

interface ICalenderInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

export function CalendarInput({
  id,
  name,
  value,
  onChange,
}: ICalenderInputProps) {
  const calendarInputRef = useRef<HTMLInputElement>(null);

  const onClickCalendarButton = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (calendarInputRef.current) calendarInputRef.current.focus();
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
        value={value}
        onChange={onChange}
        ref={calendarInputRef}
      />
    </S.CalendarInputWrapper>
  );
}
