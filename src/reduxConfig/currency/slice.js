import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
    data: [],
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
                state.data = payload;
            })
});

export const currencyReducer = currencySlice.reducer;

