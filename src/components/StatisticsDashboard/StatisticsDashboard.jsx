import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

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

  return (
    <div>
      <select name="month" id="month">
        {months.map(month => (
          <option key={nanoid()}>{month}</option>
        ))}
      </select>
      <select name="year" id="year">
        {years.map(year => (
          <option key={nanoid()}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default StatisticsDashboard;
