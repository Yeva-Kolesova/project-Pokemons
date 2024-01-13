import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from 'configAxios/api';

export const fetchTransSumThunk = createAsyncThunk(
  'fetchTransSum',
  async (params, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('User is not authorized');
    }
    try {
      const { data } = await api.get('/transactions-summary', {
        params: {
          ...(params?.month !== undefined && { month: params.month }),
          ...(params?.year !== undefined && { year: params.year }),
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
