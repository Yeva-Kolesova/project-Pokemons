import { createAsyncThunk } from '@reduxjs/toolkit';
import { currencyAPI } from '../../configAxios/currencyApi';

const currencyNames = {
    usd: 'USD',
    eur: 'EUR',
};

export const fetchCurrency = createAsyncThunk(
    'fetchCurrency',
    async (_, { rejectWithValue }) => {
        try {
            const res = await currencyAPI.get('/bank/currency');
            if (res.data?.length) {
                const filteredArray = res.data.filter(
                    el =>
                        (el.currencyCodeA === 840 && el.currencyCodeB === 980) ||
                        (el.currencyCodeA === 978 && el.currencyCodeB === 980)
                );
                const result = filteredArray.map(el => ({
                    ...el,
                    currencyName:
                        el.currencyCodeA === 840 ? currencyNames.usd : currencyNames.eur,
                }));
                return result;
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


