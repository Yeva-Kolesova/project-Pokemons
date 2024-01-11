import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'reduxConfig/statistics/selectors';
import { selectTransactions } from 'reduxConfig/transactions/selectors';

const StatisticsTable = () => {
  const categories = useSelector(selectCategories).filter(
    category => category.type === 'EXPENSE'
  );
  const transactions = useSelector(selectTransactions);

  // const categories = [
  //   'Main expenses',
  //   'Products',
  //   'Car',
  //   'Self care',
  //   'Child care',
  //   'Household products',
  //   'Education',
  //   'Leisure',
  //   'Other expenses',
  //   'Entertainment',
  // ];

  // const transactions = [
  //   { categoryId: 'Main expenses', amount: 8700.0 },
  //   { categoryId: 'Products', amount: 3800.74 },
  //   { categoryId: 'Car', amount: 1500.0 },
  //   { categoryId: 'Self care', amount: 800.0 },
  //   { categoryId: 'Child care', amount: 2208.5 },
  //   { categoryId: 'Household products', amount: 300.0 },
  //   { categoryId: 'Education', amount: 3400.0 },
  //   { categoryId: 'Leisure', amount: 1230.0 },
  //   { categoryId: 'Other expenses', amount: 610.0 },
  // ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredTransactions = transactions.filter(
    transaction => transaction.categoryId === selectedCategory
  );

  const totalExpenses = transactions => {
    const total = transactions.reduce((accumulator, transaction) => {
      return accumulator + transaction.amount;
    }, 0);

    return total.toFixed(2);
  };

  const handleCategoryChange = e => setSelectedCategory(e.target.value);

  return (
    <>
      <select
        name="category"
        id="category"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option>Categories</option>
        {categories.map(category => (
          <option key={nanoid()} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <ul>
        {transactions.map(({ categoryId, amount }) => (
          <li key={nanoid()}>
            {categoryId} {amount}
          </li>
        ))}
      </ul>
      <div>
        <h4>Expenses:</h4>
        <p>{totalExpenses(transactions)}</p>
      </div>
      <div>
        <h4>Income:</h4>
        <p>27350.00</p>
      </div>
    </>
  );
};

export default StatisticsTable;
