import { createSlice } from '@reduxjs/toolkit';
import { fetchTransSumThunk } from './operations';

const initialState = {
  summary: [],
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
        state.summary = payload;
        handleFulfilled(state);
      })
      .addCase(fetchTransSumThunk.rejected, handleRejected);
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
