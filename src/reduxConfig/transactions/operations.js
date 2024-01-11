import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

export const newTransactionThunk = createAsyncThunk(
  'transactions/new',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.post('/api/transactions');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const allTransactionThunk = createAsyncThunk(
  'transactions/all',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.post('/api/transactions');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatedTransactionThunk = createAsyncThunk(
  'transactions/updated',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.post('/api/transactions/{transactionId}');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delete',
  async (categoryId, ThunkAPI) => {
    try {
      const { data } = await api.post(`/api/transactions/${categoryId}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const summaryControllerTransactionThunk = createAsyncThunk(
  'transactions/summaryController',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.post('/api/transactions-summary');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
