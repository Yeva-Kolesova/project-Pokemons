import { BtnAddTransaction } from '../components/BtnAddTransaction/BtnAddTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <StaledSectionHome>
      <TransactionList />
      <BtnAddTransaction />
    </StaledSectionHome>
  );
};

export default HomePage;

const StaledSectionHome = styled.section`
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    width: 768px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
    padding-left: 69px;
    width: 800px;
  }
`;
