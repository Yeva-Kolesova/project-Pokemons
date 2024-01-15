import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledCategory,
  StyledExpenses,
  StyledIncome,
  StyledItem,
  StyledList,
  StyledListContainer,
  StyledNoTransactions,
} from './StatisticsTable.styled';
import { selectSummary } from 'reduxConfig/statistics/selectors';
import { fetchTransSumThunk } from 'reduxConfig/statistics/operations';
import { coloredCategoriesMap } from 'components/Chart/Chart';

export const formatNumber = number => {
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

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
          {periodSummary.length ? (
            periodSummary.map((category, index) => (
              <StyledItem key={index}>
                <div>
                  <span style={{ backgroundColor: category.color }} />
                  <p>{category.name}</p>
                </div>
                <p>{formatNumber(category.total)}</p>
              </StyledItem>
            ))
          ) : (
            <StyledNoTransactions>
              You don't have any transactions in this period
            </StyledNoTransactions>
          )}
        </StyledList>
      </StyledListContainer>
      <StyledExpenses>
        <h3>Expenses:</h3>
        <p>{formatNumber(summary.expenseSummary)}</p>
      </StyledExpenses>
      <StyledIncome>
        <h3>Income:</h3>
        <p>{formatNumber(summary.incomeSummary)}</p>
      </StyledIncome>
    </>
  );
};

export default StatisticsTable;
