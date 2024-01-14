import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from '../currency/operations';
import { fetchTransSumThunk } from '../statistics/operations';
import {
  addTransactionThunk,
  allTransactionThunk,
  deleteTransactionThunk,
  getTransactionsCategoriesThunk,
} from '../transactions/operations';

const initialState = {
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'global',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.fulfilled, handleFulfilled)
      .addCase(fetchCurrency.pending, handlePending)
      .addCase(fetchCurrency.rejected, handleRejected)

      .addCase(fetchTransSumThunk.pending, handlePending)
      .addCase(fetchTransSumThunk.fulfilled, handleFulfilled)
      .addCase(fetchTransSumThunk.rejected, handleRejected)

      .addCase(getTransactionsCategoriesThunk.pending, handlePending)
      .addCase(getTransactionsCategoriesThunk.fulfilled,handleFulfilled)
      .addCase(getTransactionsCategoriesThunk.rejected, handleRejected)

      .addCase(addTransactionThunk.pending, handlePending)
      .addCase(addTransactionThunk.fulfilled, handleFulfilled)
      .addCase(addTransactionThunk.rejected, handleRejected)

      .addCase(allTransactionThunk.pending, handlePending)
      .addCase(allTransactionThunk.fulfilled, handleFulfilled)
      .addCase(allTransactionThunk.rejected, handleRejected)

      .addCase(deleteTransactionThunk.pending, handlePending)
      .addCase(deleteTransactionThunk.fulfilled, handleFulfilled)
      .addCase(deleteTransactionThunk.rejected, handleRejected);
  },
});

export const globalReducer = slice.reducer;
