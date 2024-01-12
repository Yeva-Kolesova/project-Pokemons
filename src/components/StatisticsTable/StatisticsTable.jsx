import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectCategories } from 'reduxConfig/statistics/selectors';
// import { selectTransactions } from 'reduxConfig/transactions/selectors';
import {
  StyledCategorySelect,
  StyledExpenses,
  StyledIncome,
  StyledItem,
} from './StatisticsTable.styled';

const StatisticsTable = () => {
  // const categories = useSelector(selectCategories).filter(
  //   category => category.type === 'EXPENSE'
  // );
  // const transactions = useSelector(selectTransactions);

  const categories = [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
    'Entertainment',
  ];

  const transactions = [
    { categoryId: 'Main expenses', amount: '8700.00' },
    { categoryId: 'Products', amount: '3800.74' },
    { categoryId: 'Car', amount: '1500.00' },
    { categoryId: 'Self care', amount: '800.00' },
    { categoryId: 'Child care', amount: '2208.50' },
    { categoryId: 'Household products', amount: '300.00' },
    { categoryId: 'Education', amount: '3400.00' },
    { categoryId: 'Leisure', amount: '1230.00' },
    { categoryId: 'Other expenses', amount: '610.00' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  // const filteredTransactions = transactions.filter(
  //   transaction => transaction.categoryId === selectedCategory
  // );

  const totalExpenses = transactions => {
    const total = transactions.reduce((accumulator, transaction) => {
      return accumulator + Number(transaction.amount);
    }, 0);

    return total.toFixed(2);
  };

  const handleCategoryChange = e => setSelectedCategory(e.target.value);

  return (
    <>
      <StyledCategorySelect
        name="category"
        id="category"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option defaultValue>Categories</option>
        {categories.map(category => (
          <option key={nanoid()} value={category.id}>
            {category}
          </option>
        ))}
      </StyledCategorySelect>
      <ul>
        {transactions.map(({ categoryId, amount }) => (
          <StyledItem key={nanoid()}>
            <div>
              <span />
              <p>{categoryId}</p>
            </div>
            <p>{amount}</p>
          </StyledItem>
        ))}
      </ul>
      <StyledExpenses>
        <h4>Expenses:</h4>
        <p>{totalExpenses(transactions)}</p>
      </StyledExpenses>
      <StyledIncome>
        <h4>Income:</h4>
        <p>27350.00</p>
      </StyledIncome>
    </>
  );
};

export default StatisticsTable;
