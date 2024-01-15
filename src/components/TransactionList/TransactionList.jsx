import TransactionItem from 'components/TransactionItem/TransactionItem';
import { useDispatch, useSelector } from 'react-redux';
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
import React, { useEffect, useState } from 'react';
import {
  allTransactionThunk,
  getTransactionsCategoriesThunk,
} from 'reduxConfig/transactions/operations';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import { EditTransactionForm } from '../EditTransactionForm/EditTransactionForm';

const TransactionList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);

  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);
  const [transactionEditData, setTransactionEditData] = useState({});

  useEffect(() => {
    dispatch(allTransactionThunk());
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

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
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <TransactionItem
                  key={transaction.id}
                  data={transaction}
                  handleModal={setIsEditTransactionForm}
                  setData={setTransactionEditData}
              />
            ))
          ) : (
            <NoTransactionStyled>
              You don't have any transactions in this period
            </NoTransactionStyled>
          )}
        </ListTransaction>
      </HomeTab>

      <TransactionCardList>
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionCardItem
                key={transaction.id}
                data={transaction}
                handleModal={setIsEditTransactionForm}
                setData={setTransactionEditData}
            />
          ))
        ) : (
          <NoTransactionStyled>
            You don't have any transactions in this period
          </NoTransactionStyled>
        )}
      </TransactionCardList>

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
