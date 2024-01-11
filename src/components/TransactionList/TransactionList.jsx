import TransactionItem from 'components/TransactionItem/TransactionItem';

const TransactionList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TransactionItem></TransactionItem>
      </tbody>
    </table>
  );
};

export default TransactionList;
