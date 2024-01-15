import TransactionItem from 'components/TransactionItem/TransactionItem';
import { useSelector } from 'react-redux';
import {
  HomeHeader,
  HomeRow,
  HomeTab,
  ListTransaction,
  NoTransactionStyled,
  TitleActions,
  TitleCategory,
  TitleComment,
  TitleData,
  TitleSum,
  TitleType,
  TransactionCardList,
} from './TransactionList.styled';
import TransactionCardItem from 'components/TransactionCardItem/TransactionCardItem';
import React, { useState } from 'react';
import { selectSortedTransactios } from 'reduxConfig/transactions/selectors';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import { EditTransactionForm } from '../EditTransactionForm/EditTransactionForm';

const TransactionList = () => {
  const transactions = useSelector(selectSortedTransactios);

  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);
  const [transactionEditData, setTransactionEditData] = useState({});

  return (
    <>
      <HomeTab>
        <HomeHeader>
          <HomeRow>
            <TitleData>Date</TitleData>
            <TitleType>Type</TitleType>
            <TitleCategory>Category</TitleCategory>
            <TitleComment>Comment</TitleComment>
            <TitleSum>Sum</TitleSum>
            <TitleActions></TitleActions>
          </HomeRow>
        </HomeHeader>
        <ListTransaction>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              data={transaction}
              handleModal={setIsEditTransactionForm}
              setData={setTransactionEditData}
            />
          ))}
        </ListTransaction>
      </HomeTab>

      <TransactionCardList>
        {transactions.map(transaction => (
          <TransactionCardItem
            key={transaction.id}
            data={transaction}
            handleModal={setIsEditTransactionForm}
            setData={setTransactionEditData}
          />
        ))}
      </TransactionCardList>

      {transactions.length === 0 && (
        <NoTransactionStyled>
          You don't have any transactions in this period
        </NoTransactionStyled>
      )}

      {isEditTransactionForm && (
        <ModalEditTransaction closeModal={setIsEditTransactionForm}>
          <EditTransactionForm
            transaction={transactionEditData}
            closeModal={setIsEditTransactionForm}
          />
        </ModalEditTransaction>
      )}
    </>
  );
};

export default TransactionList;
