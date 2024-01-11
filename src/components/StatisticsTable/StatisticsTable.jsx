import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'reduxConfig/transactions/selectors';

const StatisticsTable = () => {
  //   const categories = getCategories().filter(
  //     category => category.type === 'EXPENSE'
  //   );
  const transactions = useSelector(selectTransactions());

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

  //   const transactions = [
  //     { categoryId: 'Main expenses', amount: 8700.0 },
  //     { categoryId: 'Products', amount: 3800.74 },
  //     { categoryId: 'Car', amount: 1500.0 },
  //     { categoryId: 'Self care', amount: 800.0 },
  //     { categoryId: 'Child care', amount: 2208.5 },
  //     { categoryId: 'Household products', amount: 300.0 },
  //     { categoryId: 'Education', amount: 3400.0 },
  //     { categoryId: 'Leisure', amount: 1230.0 },
  //     { categoryId: 'Other expenses', amount: 610.0 },
  //   ];

  const totalExpenses = transactions => {
    const total = transactions.reduce((accumulator, transaction) => {
      return accumulator + transaction.amount;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <>
      <form>
        <select name="category" id="category">
          {categories.map(category => (
            <option key={nanoid()}>{category}</option>
          ))}
        </select>
      </form>
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
