import React from 'react';
import { Chart } from '../components/Chart/Chart';
import StatisticsDashboard from '../components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../components/StatisticsTable/StatisticsTable';

const StatisticsPage = () => {
  return (
    <div>
      <h2>Statistics</h2>
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </div>
  );
};

export default StatisticsPage;
