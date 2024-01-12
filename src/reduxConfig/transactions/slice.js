import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk, getTransactionsCategoriesThunk,
} from './operations';

const initialState = {
  categories: [],
  transactions: [
    {
      id: '123ewrte45',
      transactionDate: '2024-01-01',
      type: 'INCOME',
      categoryId: 'Other',
      userId: 'wwwww',
      comment: 'git for your',
      amount: 300.0,
      balanceAfter: 0,
    },
    {
      id: '12er345',
      transactionDate: '2024-01-01',
      type: 'INCOME',
      categoryId: 'Other',
      userId: 'wwwww',
      comment: 'git for your',
      amount: 300.0,
      balanceAfter: 0,
    },
    {
      id: '122342345',
      transactionDate: '2024-01-01',
      type: 'INCOME',
      categoryId: 'Other',
      userId: 'wwwww',
      comment: 'git for your',
      amount: 300.0,
      balanceAfter: 0,
    },
    {
      id: '12345',
      transactionDate: '2024-01-01',
      type: 'INCOME',
      categoryId: 'Other',
      userId: 'wwwww',
      comment: 'git for your',
      amount: 300.0,
      balanceAfter: 0,
    },
    {
      id: 'fddferd',
      transactionDate: '2024-01-01',
      type: 'EXPENSE',
      categoryId: 'Other',
      userId: 'wwwww',
      comment: 'git for your',
      amount: -300.0,
      balanceAfter: 0,
    },
  ],
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

// function handleFulfilled(state) {
//   state.isLoading = false
//   state.error = null
// }

const handleAddTransaction = (state, { payload }) => {
  state.transactions.push(payload);
  state.isLoading = false;
};

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTransactionsCategoriesThunk.pending, handlePending)
      .addCase(
        getTransactionsCategoriesThunk.fulfilled, (state, { payload }) => {
          state.categories = payload.map(category => {
            return { value: category.id, label: category.name };
          });
          state.isLoading = false;
        },
      )
      .addCase(getTransactionsCategoriesThunk.rejected, handleRejected)
      .addCase(addTransactionThunk.pending, handlePending)
      .addCase(addTransactionThunk.fulfilled, handleAddTransaction)
      .addCase(addTransactionThunk.rejected, handleRejected);
  },
});

export const transactionsReducer = slice.reducer;
