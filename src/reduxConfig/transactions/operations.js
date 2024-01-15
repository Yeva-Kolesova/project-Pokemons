import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

export const getTransactionsCategoriesThunk = createAsyncThunk(
  'getCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/transaction-categories');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/new',
  async (transaction, thunkApi) => {
    try {
      const { data } = await api.post('/transactions', transaction);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const allTransactionThunk = createAsyncThunk(
  'transactions/all',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.get('/transactions');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatedTransactionThunk = createAsyncThunk(
  'transactions/update',
  async ({ id, transactionData }, ThunkAPI) => {
    try {
      const { data } = await api.patch(`/transactions/${id}`, transactionData);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delete',
  async (transactionId, ThunkAPI) => {
    try {
      await api.delete(`/transactions/${transactionId}`);
      return transactionId;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const summaryControllerTransactionThunk = createAsyncThunk(
  'transactions/summaryController',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.post('/transactions-summary');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
