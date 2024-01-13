import { useDispatch } from 'react-redux';
import {
  Card,
  CardLine,
  CardLineButtonDelete,
  CardLineButtonEdit,
  CardLineP,
  CardLinePEdit,
  CardLinePSum,
  CardLineTitle,
} from './TransactionCardItem.styled';

import { LuPencil } from 'react-icons/lu';
import { useState } from 'react';
import { deleteTransactionThunk } from 'reduxConfig/transactions/operations';

const TransactionCardItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, transactionDate, type, categoryId, comment, amount } = data;
  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  const handleDelete = transactionId => {
    dispatch(deleteTransactionThunk(transactionId));
  };

  return (
    <Card>
      <CardLine plus={amount >= 0}>
        <CardLineTitle>Date</CardLineTitle>
        <CardLineP>{transactionDate}</CardLineP>
      </CardLine>
      <CardLine plus={amount >= 0}>
        <CardLineTitle>Type</CardLineTitle>
        <CardLineP>{type === 'EXPENSE' ? '-' : '+'}</CardLineP>
      </CardLine>
      <CardLine plus={amount >= 0}>
        <CardLineTitle>Category</CardLineTitle>
        <CardLineP>{categoryId}</CardLineP>
      </CardLine>
      <CardLine plus={amount >= 0}>
        <CardLineTitle>Comment</CardLineTitle>
        <CardLineP>{comment}</CardLineP>
      </CardLine>
      <CardLine plus={amount >= 0}>
        <CardLineTitle>Sum</CardLineTitle>
        <CardLinePSum
          plus={amount >= 0}
          style={
            type === 'EXPENSE' ? { color: '#FF868D' } : { color: '#FFB627' }
          }
        >
          {Math.abs(amount).toFixed(2)}
        </CardLinePSum>
      </CardLine>
      <CardLine plus={amount >= 0}>
        <CardLineButtonDelete
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </CardLineButtonDelete>
        {isEditTransactionForm}
        <CardLineButtonEdit
          type="button"
          onClick={() => setIsEditTransactionForm(true)}
        >
          <LuPencil color={'rgba(255, 255, 255, 0.6)'} />
          <CardLinePEdit> Edit</CardLinePEdit>
        </CardLineButtonEdit>
      </CardLine>
    </Card>
  );
};

export default TransactionCardItem;
