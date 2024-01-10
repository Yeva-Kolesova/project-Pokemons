import { createSlice } from '@reduxjs/toolkit';

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

/*function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}*/

const slice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  /*   extraReducers: builder => {

  *     Приклад
            .addCase(ваше_ім'я_функції_Thunk.pending, handlePending)
            .addCase(ваше_ім'я_функції_Thunk.fulfilled, (state, action) => {
              handleFulfilled(state)
              state.transactions.items.push(action.payload)
            })
            .addCase(ваше_ім'я_функції_Thunk.rejected, handleRejected)
  },*/
});

export const currencyReducer = slice.reducer;
