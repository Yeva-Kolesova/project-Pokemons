import TransactionItem from 'components/TransactionItem/TransactionItem';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'reduxConfig/transactions/selectors';
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
} from './TransactionList.styled';

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

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
    </>
  );
};

export default TransactionList;
