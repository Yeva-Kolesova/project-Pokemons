import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import sprite from '../sprite.svg';
import { CalendarS, DateWrapper, Popper } from './Calendar.styled';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateWrapper>
      {/* <>
        {
          <svg>
            <use
              xlinkHref={`${sprite}#icon-date_range`}
              width={24}
              height={24}
            />
          </svg>
        }
      </> */}
      <ReactDatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        calendarContainer={CalendarS}
      />
    </DateWrapper>
  );
};
