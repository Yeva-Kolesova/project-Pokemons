// import { createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
    currency: {
        usdRate: {
            buy: null,
            sell: null,
        },
        euroRate: {
            buy: null,
            sell: null,
        },
    },
    time: '',
    isLoading: false,
    error: null,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
                state.currency = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchCurrency.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCurrency.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }),
});

export const currencyReducer = currencySlice.reducer;
