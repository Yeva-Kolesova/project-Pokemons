import axios from 'axios';

export const currencyAPI = axios.create({
    baseURL: `https://api.monobank.ua`,
});

export const getCurrencyData = async () => {
    const { data } = await currencyAPI.get('/bank/currency');
    return data;
};
