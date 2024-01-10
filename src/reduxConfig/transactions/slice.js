import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
}

/*function handlePending(state) {
  state.isLoading = true
}

function handleFulfilled(state) {
  state.isLoading = false
  state.error = null
}

function handleRejected(state, action) {
  state.isLoading = false
  state.error = action.payload
}*/

const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {

  },
  /* extraReducers: builder => {
 /*     Приклад
        .addCase(ваше_ім'я_функції_Thunk.pending, handlePending)
        .addCase(ваше_ім'я_функції_Thunk.fulfilled, (state, action) => {
          handleFulfilled(state)
          робота зі стейтом
        })
        .addCase(ваше_ім'я_функції_Thunk.rejected, handleRejected)
  }*/
})

export const transactionsReducer = slice.reducer
