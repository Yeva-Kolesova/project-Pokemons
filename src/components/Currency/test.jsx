// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Currency} from './Currency'

// export const App = () => {
//   const [currencyData, setCurrencyData] = useState(null);

//   useEffect(() => {
//     const fetchCurrencyData = async () => {
//       try {
//         const savedTimestamp = localStorage.getItem('currencyTimestamp');
//         const savedData = JSON.parse(localStorage.getItem('currencyData'));

//         if (savedTimestamp && savedData) {
//           const currentTimestamp = new Date().getTime() / 1000; 
//           const differenceInHours = (currentTimestamp - savedTimestamp) / 3600;

//           if (differenceInHours < 1) {
//             setCurrencyData(savedData);
//             return;
//           }
//         }

//         const response = await axios.get('https://api.monobank.ua/bank/currency');
//         console.log(response.data)

//         localStorage.setItem('currencyData', JSON.stringify(response.data));
//         localStorage.setItem('currencyTimestamp', new Date().getTime() / 1000);

//         setCurrencyData(response.data);
//       } catch (error) {
//         console.error('Error fetching currency data:', error);
//       }
//     };

//     fetchCurrencyData();
//   }, []); 

//   const filteredCurrencies = currencyData
//     ? currencyData.filter((currency) =>
//           (currency.currencyCodeA === 840 && currency.currencyCodeB === 980) || 
//           (currency.currencyCodeA === 978 && currency.currencyCodeB === 980) 
//       )
//     : [];

//   return (
//     <div>
//       {filteredCurrencies.length > 0 ? (
//         <Currency currencies={filteredCurrencies} />
//       ) : (
//         <p>Loadind...</p>
//       )}
//     </div>
//   );
// };


// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CurrencyTable,
  CurrencyTbody,
  CurrencyThead,
  GraphBox,
  LowerRate,
  HigherRate,
} from './Currency.styled';

export const App = () => {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const savedTimestamp = localStorage.getItem('currencyTimestamp');
        const savedData = JSON.parse(localStorage.getItem('currencyData'));

        if (savedTimestamp && savedData) {
          const currentTimestamp = new Date().getTime() / 1000;
          const differenceInHours = (currentTimestamp - savedTimestamp) / 3600;

          if (differenceInHours < 1) {
            setCurrencyData(savedData);
            return;
          }
        }

        const response = await axios.get('https://api.monobank.ua/bank/currency');
        console.log(response.data);

        localStorage.setItem('currencyData', JSON.stringify(response.data));
        localStorage.setItem('currencyTimestamp', new Date().getTime() / 1000);

        setCurrencyData(response.data);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, []);

  const filteredCurrencies = currencyData
    ? currencyData.filter(
        (currency) =>
          (currency.currencyCodeA === 840 && currency.currencyCodeB === 980) ||
          (currency.currencyCodeA === 978 && currency.currencyCodeB === 980)
      )
    : [];

  return (
    <div>
      {filteredCurrencies.length > 0 ? (
        <>
          <CurrencyTable>
            <CurrencyThead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </CurrencyThead>
            <CurrencyTbody>
              {filteredCurrencies.map((currency, index) => (
                <tr key={index}>
                  <td>{currency.currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
                  <td>{currency.rateBuy}</td>
                  <td>{currency.rateSell}</td>
                </tr>
              ))}
            </CurrencyTbody>
          </CurrencyTable>

          <GraphBox>
            <LowerRate>27.55</LowerRate>
            <HigherRate>30.00</HigherRate>
          </GraphBox>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

App.styled.jsx
import styled from 'styled-components'

export const MainWrapper = styled.body`
`


Currency.jsx

import './Currency.styled'
import React from 'react';
import { CurrencyTable, CurrencyTbody, CurrencyThead, GraphBox, HigherRate, LowerRate} from './Currency.styled';

export const Currency = ({ currencies }) => {
  return (
    <>
      <CurrencyTable>
        <CurrencyThead>
          <tr>
            <th>
              Currency
            </th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </CurrencyThead>
        <CurrencyTbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td>{currency.currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
              <td>{currency.rateBuy}</td>
              <td>{currency.rateSell}</td>
            </tr>
          ))}
        </CurrencyTbody>
      </CurrencyTable>

      <GraphBox>
        <LowerRate>27.55</LowerRate>
        <HigherRate>30.00</HigherRate>
      </GraphBox>
    </>
  );
};


Currency.styled.jsx

import styled from 'styled-components'

export const CurrencyTable = styled.table`
    width: 100%;
    max-width: 480px;
    background:transparent;
    border-collapse: collapse
    border-radius: 766px;
    background: linear-gradient(207deg, #341FA0 46.11%, #652392 63.65%);
`

export const CurrencyThead = styled.thead`
    background: rgba( 255, 255, 255, 0.2);
    display: table-header-group;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0;
    th{
        border: 0;
        padding: 16px;
        color:#fbfbfb;
        font-size: 16px;
        font-style: normal;
        font-weigth: 600;
        line-height: normal;
    }
`

export const CurrencyTbody = styled.tbody`
    text-align: center;
    tr {
        background: transparent;
        height: 48px;
    }
    td{
        color: #fbfbfb;
        font-size: 16px;
        font-style:normal;
        font-weigth: 400;
        line-height: normal;
    }
`

export const GraphBox = styled.div`
    width: 100%;
    position: relative;
`

export const LowerRate = styled.p`
    position: absolute;
    left: 52px;
    top: 12px;
    color: #ff868d;
    font-size: 12px;
    font-weight: 400;
`

export const HigherRate = styled.p`
    position: absolute;
    right: 103px;
    top: -19px;
    color: #ff868d;
    font-size: 12px;
    font-weigth: 400;
`

CurrencyRates.js

// CurrencyRates.js
import axios from 'axios';

const getCurrencyRates = async () => {
    try {
        const response = await axios.get('https://api.monobank.ua/bank/currency');
        return response.data;
    } catch (error) {
        console.error('Error fetching currency rates:', error);
        throw error;
    }
};

export default getCurrencyRates;



currecySlice.js 


import { CreateSlice } from '@reduxjs/toolkit'

const initialState = {
    currency: {
        usdRate: {
            buy: null,
            sell: null,
        },
        euroRate: {
            buy: null,
            sell: null,
        },
        time: '',
        isLoading: false,
        error: null
    }
}

const slice = CreateSlice({
    name: 'currencySlice',
    initialState,
    redusers: {},
})

export const currencyReducer = slice.reducer;
