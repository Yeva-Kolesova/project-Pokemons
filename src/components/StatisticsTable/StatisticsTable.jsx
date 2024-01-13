import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledCategory,
  StyledExpenses,
  StyledIncome,
  StyledItem,
  StyledList,
  StyledListContainer,
} from './StatisticsTable.styled';
import { selectSummary } from 'reduxConfig/statistics/selectors';
import { fetchTransSumThunk } from 'reduxConfig/statistics/operations';
import { coloredCategoriesMap } from 'components/Chart/Chart';

const StatisticsTable = () => {
  const summary = useSelector(selectSummary);

  const dispatch = useDispatch();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchTransSumThunk({ month: currentMonth, year: currentYear }));
  }, [dispatch, currentMonth, currentYear]);

  const periodSummary = summary.categoriesSummary
    ? summary.categoriesSummary
        .filter(category => category.type === 'EXPENSE')
        .map(category => ({
          ...category,
          color: coloredCategoriesMap.get(category.name),
        }))
        .sort((a, b) => a.total - b.total)
    : [];
  return (
    <>
      <StyledCategory>
        <p>Category</p>
        <p>Sum</p>
      </StyledCategory>
      <StyledListContainer>
        <StyledList>
          {periodSummary.map((category, index) => (
            <StyledItem key={index}>
              <div>
                <span style={{ backgroundColor: category.color }} />
                <p>{category.name}</p>
              </div>
              <p>{Math.abs(category.total).toFixed(2)}</p>
            </StyledItem>
          ))}
        </StyledList>
      </StyledListContainer>
      <StyledExpenses>
        <h3>Expenses:</h3>
        <p>{Math.abs(summary.expenseSummary)?.toFixed(2)}</p>
      </StyledExpenses>
      <StyledIncome>
        <h3>Income:</h3>
        <p>{summary.incomeSummary?.toFixed(2)}</p>
      </StyledIncome>
    </>
  );
};

export default StatisticsTable;
