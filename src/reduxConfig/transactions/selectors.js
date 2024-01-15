import { INCOME_CODE } from '../../components/AddTransactionModal/AddTransaction/AddTransaction';
import { createSelector } from '@reduxjs/toolkit';

export function selectTransactions(state) {
  return state.transactions.transactions;
}

export function selectCategories(state) {
  return state.transactions.categories;
}

export const selectFilteredCategories = createSelector(
  [selectCategories],
  categories => {
    return categories.filter(category => category.value !== INCOME_CODE);
  }
);

export const selectSortedTransactios = createSelector(
  [selectTransactions],
  transactions => {
    return [...transactions].sort(
      (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
    );
  }
);
