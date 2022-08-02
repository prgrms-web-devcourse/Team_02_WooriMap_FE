import { useState, useEffect, useRef } from 'react';
import { formatDate } from 'utils';
import calendar from 'public/image/calendar.png';
import * as S from './CalendarInput.styles';

interface ICalenderInputProps {
  name?: string;
  defaultValue?: string;
}

export function CalendarInput({
  name,
  defaultValue,
  ...props
}: ICalenderInputProps) {
  const [date, setDate] = useState(formatDate(new Date()));
  const calendarInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue) setDate(defaultValue);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e.target.value);
    setDate(e.target.value);
  };

  const onClickCalendarButton = () => {
    if (calendarInputRef.current) calendarInputRef.current.focus();
  };
  return (
    <S.CalendarInputWrapper {...props}>
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
        value={date}
        onChange={onChange}
        ref={calendarInputRef}
      />
    </S.CalendarInputWrapper>
  );
}
