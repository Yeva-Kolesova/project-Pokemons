import { createSlice } from '@reduxjs/toolkit';
import { fetchTransSumThunk, fetchCategoriesThunk } from './operations';

const initialState = {
  statistics: [],
  categories: [],
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
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransSumThunk.pending, handlePending)
      .addCase(fetchTransSumThunk.fulfilled, (state, { payload }) => {
        state.statistics = payload;
        handleFulfilled(state);
      })
      .addCase(fetchTransSumThunk.rejected, handleRejected)

      .addCase(fetchCategoriesThunk.pending, handlePending)
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
        handleFulfilled(state);
      })
      .addCase(fetchCategoriesThunk.rejected, handleRejected);
  },
});
// *     Приклад

//            .addCase(ваше_ім'я_функції_Thunk.pending, handlePending)
//            .addCase(ваше_ім'я_функції_Thunk.fulfilled, (state, action) => {
//              handleFulfilled(state)
//              state.statistics = action.payload
//            })
//            .addCase(ваше_ім'я_функції_Thunk.rejected, handleRejected)

export const statisticsReducer = slice.reducer;
