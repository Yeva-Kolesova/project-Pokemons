import { createSlice } from '@reduxjs/toolkit';
import { fetchTransSumThunk } from './operations';

const initialState = {
  summary: [],
};

const slice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTransSumThunk.fulfilled, (state, { payload }) => {
      state.summary = payload;
    });
  },
});

export const statisticsReducer = slice.reducer;
