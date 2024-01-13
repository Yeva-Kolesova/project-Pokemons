import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

function handlePending(state) {
    state.isLoading = true;
    state.error = null;
}

function handleFulfilled(state, action) {
    state.data = action.payload;
    state.isLoading = false;
    state.error = null;
}

function handleRejected(state, { error }) {
    state.isLoading = false;
    state.error = error;
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchCurrency.fulfilled, handleFulfilled)
            .addCase(fetchCurrency.pending, handlePending)
            .addCase(fetchCurrency.rejected, handleRejected),
});

export const currencyReducer = currencySlice.reducer;