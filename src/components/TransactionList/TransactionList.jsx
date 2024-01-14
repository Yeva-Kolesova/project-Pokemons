import TransactionItem from 'components/TransactionItem/TransactionItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeHeader,
  HomeRow,
  HomeTab,
  ListTransaction,
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
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} data={transaction} />
          ))}
        </ListTransaction>
      </HomeTab>

      <TransactionCardList>
        {transactions.map(transaction => (
          <TransactionCardItem key={transaction.id} data={transaction} />
        ))}
      </TransactionCardList>
    </>
  );
};

export default TransactionList;
