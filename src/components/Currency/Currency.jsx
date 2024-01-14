import React, { useEffect, useState } from 'react';
import image from '../../images/currency.png';
import { nanoid } from 'nanoid';
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
              console.log('el', el);
              return (
                <CurrencyTableBody key={el.id}>
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
              <LowerNumber key={crypto.randomUUID()}>{item.rateBuy}</LowerNumber>
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
        {/* <LowerNumber>27</LowerNumber>
        <HigherNumber>32</HigherNumber> */}
       <img src={image} alt="" />
      </CurrecnyDiagram>
    </CurrencyWrapper>

    //  <StyledGraphBox>
    //     {currency?.map(item => {
    //       if (item.currencyCodeA === 840) {
    //         return (
    //           <LowerRate key={crypto.randomUUID()}>{item.rateBuy}</LowerRate>
    //         );
    //       }
    //       return [];
    //     })}

    //     {currency?.map(item => {
    //       if (item.currencyCodeA === 978) {
    //         return (
    //           <HigherRate key={crypto.randomUUID()}>{item.rateBuy}</HigherRate>
    //         );
    //       }
    //       return [];
    //     })}
    //   </StyledGraphBox>
  );
};

export default Currency;