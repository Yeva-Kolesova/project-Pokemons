import React, { useEffect, useState } from 'react';
import image from '../../images/currency.png';
import {
  CurrencyWrapper,
  CurrencyTable,
  CurrencyTableHead,
  CurrencyTableBodyList,
  CurrencyTableItem,
  CurrencyTableHeadItem,
  CurrencyTableBody,
  CurrecnyDiagram
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrency } from 'reduxConfig/currency/operations';
import { selectCurrency } from 'reduxConfig/currency/selectors';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const selectedCurrency = useSelector(selectCurrency);

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const updateLastUpdatedTime = () => {
    const newTime = Date.now();
    localStorage.setItem('lastUpdatedTime', newTime);
  };


  useEffect(() => {
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');
    const isHourPassed = () => {
      const ONE_HOUR_IN_MS = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= ONE_HOUR_IN_MS;
    };

    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(fetchCurrency());
      setCurrency(selectedCurrency);
      updateLastUpdatedTime();
    } else {
      setCurrency(selectedCurrency);
    }
  }, [dispatch, selectedCurrency, token]);

  return (
    <CurrencyWrapper>
      <CurrencyTable>
        <CurrencyTableHead>
          <CurrencyTableHeadItem>Currency</CurrencyTableHeadItem>
          <CurrencyTableHeadItem>Purchase</CurrencyTableHeadItem>
          <CurrencyTableHeadItem>Sale</CurrencyTableHeadItem>
        </CurrencyTableHead>

        <CurrencyTableBodyList>
          {currency?.length &&
            currency.map(el => {
              console.log('el', el);
              return (
                <CurrencyTableBody key={el.id}>
                  <CurrencyTableItem>{el.currencyName}</CurrencyTableItem>
                  <CurrencyTableItem>{el.rateBuy.toString().slice(0, -2)}</CurrencyTableItem>
                  <CurrencyTableItem>{el.rateSell.toString().slice(0, -2)}</CurrencyTableItem>
                </CurrencyTableBody>
              );
            })}
        </CurrencyTableBodyList>
      </CurrencyTable>
      <CurrecnyDiagram src={image} alt="" />
    </CurrencyWrapper>
  );
};

export default Currency;