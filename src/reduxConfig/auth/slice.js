import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUser,
  registerThunk,
} from './operations';
import { addTransactionThunk } from '../transactions/operations';

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    balance: 0,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

function handleLogIn(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeBalanceValue: (state, { payload }) => {
      state.user.balance = state.user.balance - payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleLogIn)
      .addCase(logInThunk.fulfilled, handleLogIn)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = {
          id: null, username: null, email: null, balance: 0,
        }
        state.token = null
        state.isLoggedIn = false
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalanceValue } = authSlice.actions
