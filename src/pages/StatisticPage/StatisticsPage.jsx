import React from 'react';
import { Chart } from '../../components/Chart/Chart';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';
import {
  StyledContainer,
  StyledContent,
  StyledTable,
} from './StatisticsPage.styled';

const StatisticsPage = () => {
  return (
    <StyledContainer>
      <h2>Statistics</h2>
      <StyledContent>
        <Chart />
        <StyledTable>
          <StatisticsDashboard />
          <StatisticsTable />
        </StyledTable>
      </StyledContent>
    </StyledContainer>
  );
};

export default StatisticsPage;
