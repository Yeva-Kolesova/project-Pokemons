import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

export const fetchTransSumThunk = createAsyncThunk(
  'fetchTransSum',
  async ({ month, year }, thunkApi) => {
    try {
      const { data } = await api.get('/transactions-summary', { month, year });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchCategoriesThunk = createAsyncThunk(
  'fetchCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/transaction-categories');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
