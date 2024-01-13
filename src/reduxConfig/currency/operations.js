import { createAsyncThunk } from '@reduxjs/toolkit';
import { currencyAPI } from '../../configAxios/currencyApi';

const currencyID = {
    usd: 'USD',
    eur: 'EUR',
};

export const fetchCurrency = createAsyncThunk(
    'fetchCurrency',
    async (_, { rejectWithValue }) => {
        try {
            const res = await currencyAPI.get('/bank/currency');
            if (res.data && res.data.length > 0) {
                const filteredArray = res.data.filter(
                    el =>
                        (el.currencyCodeA === 840 && el.currencyCodeB === 980) ||
                        (el.currencyCodeA === 978 && el.currencyCodeB === 980)
                );
                const result = filteredArray.map(el => {
                    if (el.currencyCodeA === 840) {
                        return { ...el, currencyName: currencyID.usd };
                    } else if (el.currencyCodeA === 978) {
                        return { ...el, currencyName: currencyID.eur };
                    }
                    return el;
                });
                return result;
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);