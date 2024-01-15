import React, { useEffect, useCallback, useState} from 'react';
import image from '../../images/currency.png';
import imageTab from '../../images/currencyTab.png'
import {
  CurrencyWrapper,
  CurrencyTable,
  CurrencyTableHead,
  CurrencyTableBodyList,
  CurrencyTableItem,
  CurrencyTableHeadItem,
  CurrencyTableBody,
  CurrecnyDiagram,
  LowerNumber,
  HigherNumber,
  CurrencyHeadWrapper
} from './Currency.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { fetchCurrency } from 'reduxConfig/currency/operations';
import { selectCurrency } from 'reduxConfig/currency/selectors';

import { setLastUpdatedTime } from 'reduxConfig/currency/slice';
import { selectLastUpdatedTime } from 'reduxConfig/currency/selectors';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const selectedCurrency = useSelector(selectCurrency);
  const lastUpdatedTime = useSelector(selectLastUpdatedTime);

  const dispatch = useDispatch();

  const isHourPassed = useCallback(() => {
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    return Date.now() - lastUpdatedTime >= ONE_HOUR_IN_MS;
  }, [lastUpdatedTime]);

  useEffect(() => {
    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(fetchCurrency());
      setCurrency(selectedCurrency);
    } else {
      setCurrency(selectedCurrency);
    }

  }, [dispatch, lastUpdatedTime, isHourPassed, selectedCurrency]);

  useEffect(() => {
    dispatch(setLastUpdatedTime(Date.now()));
  }, [dispatch]);



  const isTablet = useMediaQuery({ query: '(max-width: 1024px' })
  const isDesktop = useMediaQuery({ query: '(min-width:1025px)' })
  
  return (
    <CurrencyWrapper>
      <CurrencyTable>
        <CurrencyHeadWrapper>
          <CurrencyTableHead>
            <CurrencyTableHeadItem>Currency</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Purchase</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Sale</CurrencyTableHeadItem>
        </CurrencyTableHead>
        </CurrencyHeadWrapper>

        <CurrencyTableBodyList>
          {currency?.length &&
            currency.map(el => {
              return (
                <CurrencyTableBody key={nanoid()}>
                  <CurrencyTableItem>{el.currencyName}</CurrencyTableItem>
                  <CurrencyTableItem>{el.rateBuy.toFixed(2)}</CurrencyTableItem>
                  <CurrencyTableItem>{el.rateSell.toFixed(2)}</CurrencyTableItem>
                </CurrencyTableBody>
              );
            })}
        </CurrencyTableBodyList>
      </CurrencyTable>
      <CurrecnyDiagram>
        {currency?.map(item => {
          if (item.currencyCodeA === 840) {
            return (
              <LowerNumber key={nanoid()}>{item.rateBuy}</LowerNumber>
            );
          }
          return [];
        })}

        {currency?.map(item => {
          if (item.currencyCodeA === 978) {
            return (
              <HigherNumber key={nanoid()}>{item.rateBuy}</HigherNumber>
            );
          }
          return [];
        })}
        
        {isDesktop && (<img src={image} alt="" />)}
        {isTablet && (<img src={imageTab} alt="" />)}
      </CurrecnyDiagram>
    </CurrencyWrapper>
  );
};

export default Currency;