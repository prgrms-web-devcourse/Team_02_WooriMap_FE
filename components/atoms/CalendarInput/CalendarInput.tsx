import { useRef } from 'react';

import calendar from 'public/image/calendar.png';
import * as S from './CalendarInput.styles';

interface ICalenderInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CalendarInput({ name, value, onChange }: ICalenderInputProps) {
  const calendarInputRef = useRef<HTMLInputElement>(null);

  const onClickCalendarButton = () => {
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
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        ref={calendarInputRef}
      />
    </S.CalendarInputWrapper>
  );
}
