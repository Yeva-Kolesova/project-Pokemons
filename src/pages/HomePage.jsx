import { BtnAddTransaction } from '../components/BtnAddTransaction/BtnAddTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <TransactionList />
      <BtnAddTransaction />
    </>
  );
};

export default HomePage;
