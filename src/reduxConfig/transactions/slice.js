import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk, getTransactionsCategoriesThunk,
} from './operations';

const initialState = {
  categories: [],
  transactions: [],
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

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
