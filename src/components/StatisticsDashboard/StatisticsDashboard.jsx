import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransSumThunk } from 'reduxConfig/statistics/operations';
import { StyledDahsboard, StyledSelect } from './StatisticsDashboard.styled';

const StatisticsDashboard = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = [2020, 2021, 2022, 2023, 2024];

  const dispatch = useDispatch();

  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(years[4]);

  const handleMonthChange = event => {
    const newMonthIndex = months.indexOf(event.target.value);
    setSelectedMonthIndex(newMonthIndex);
    dispatch(
      fetchTransSumThunk({ month: newMonthIndex + 1, year: selectedYear })
    );
  };

  const handleYearChange = event => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    dispatch(
      fetchTransSumThunk({ month: selectedMonthIndex + 1, year: newYear })
    );
  };

  useEffect(() => {
    fetchTransSumThunk({ month: selectedMonthIndex + 1, year: selectedYear });
  }, [dispatch, selectedMonthIndex, selectedYear]);

  return (
    <StyledDahsboard>
      <StyledSelect
        name="month"
        id="month"
        onChange={handleMonthChange}
        value={months[selectedMonthIndex]}
      >
        {months.map((month, index) => (
          <option key={nanoid()} value={month}>
            {month}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect
        name="year"
        id="year"
        onChange={handleYearChange}
        value={selectedYear}
      >
        {years.map(year => (
          <option key={nanoid()} value={year}>
            {year}
          </option>
        ))}
      </StyledSelect>
    </StyledDahsboard>
  );
};

export default StatisticsDashboard;
