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
import { useEffect } from 'react';
import {
  allTransactionThunk,
  getTransactionsCategoriesThunk,
} from 'reduxConfig/transactions/operations';

const TransactionList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);

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
              <TransactionItem key={transaction.id} data={transaction} />
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
            <TransactionCardItem key={transaction.id} data={transaction} />
          ))
        ) : (
          <NoTransactionStyled>
            You don't have any transactions in this period
          </NoTransactionStyled>
        )}
      </TransactionCardList>
    </>
  );
};

export default TransactionList;
