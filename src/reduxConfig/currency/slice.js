import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
    data: [],
    lastUpdatedTime: null,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setLastUpdatedTime: (state, action) => {
            state.lastUpdatedTime = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder.addCase(fetchCurrency.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.lastUpdatedTime = new Date().getTime();
        }),
});

export const { setLastUpdatedTime } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;


