import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { CalendarIcon, CalendarS, DateWrapper } from './Calendar.styled';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateWrapper>
      <ReactDatePicker
        name="date"
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        calendarContainer={CalendarS}
      />
      <CalendarIcon />
    </DateWrapper>
  );
};
