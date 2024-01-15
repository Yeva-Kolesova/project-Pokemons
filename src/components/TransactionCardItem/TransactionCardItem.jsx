import { useDispatch, useSelector } from 'react-redux';
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
import React, { useState } from 'react';
import { deleteTransactionThunk } from 'reduxConfig/transactions/operations';
import { selectCategories } from 'reduxConfig/transactions/selectors';
import { reduceBalanceValue } from '../../reduxConfig/auth/slice';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import { EditTransactionForm } from '../EditTransactionForm/EditTransactionForm';

const TransactionCardItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, transactionDate, type, categoryId, comment, amount } = data;
  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  const categories = useSelector(selectCategories);

  const handleDelete = (transactionId, amount) => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => {
        dispatch(reduceBalanceValue(amount));
      });
  };

  return (
    <>
      <Card>
        <CardLine $plus={amount >= 0}>
          <CardLineTitle>Date</CardLineTitle>
          <CardLineP>{transactionDate.replaceAll('-', '.')}</CardLineP>
        </CardLine>
        <CardLine $plus={amount >= 0}>
          <CardLineTitle>Type</CardLineTitle>
          <CardLineP>{type === 'EXPENSE' ? '-' : '+'}</CardLineP>
        </CardLine>
        <CardLine $plus={amount >= 0}>
          <CardLineTitle>Category</CardLineTitle>
          <CardLineP>
            {categories?.filter(c => c?.value === categoryId)[0]?.label}
          </CardLineP>
        </CardLine>
        <CardLine $plus={amount >= 0}>
          <CardLineTitle>Comment</CardLineTitle>
          <CardLineP>{comment}</CardLineP>
        </CardLine>
        <CardLine $plus={amount >= 0}>
          <CardLineTitle>Sum</CardLineTitle>
          <CardLinePSum
            $plus={amount >= 0}
            style={
              type === 'EXPENSE' ? { color: '#FF868D' } : { color: '#FFB627' }
            }
          >
            {Math.abs(amount).toFixed(2)}
          </CardLinePSum>
        </CardLine>
        <CardLine $plus={amount >= 0}>
          <CardLineButtonDelete
            onClick={() => {
              handleDelete(id, amount);
            }}
          >
            Delete
          </CardLineButtonDelete>
          <CardLineButtonEdit
            type="button"
            onClick={() => setIsEditTransactionForm(true)}
          >
            <LuPencil color={'rgba(255, 255, 255, 0.6)'} />
            <CardLinePEdit> Edit</CardLinePEdit>
          </CardLineButtonEdit>
        </CardLine>
      </Card>
      {isEditTransactionForm && (
        <ModalEditTransaction closeModal={setIsEditTransactionForm}>
          <EditTransactionForm
            transaction={data}
            closeModal={setIsEditTransactionForm}
          />
        </ModalEditTransaction>
      )}
    </>
  );
};

export default TransactionCardItem;
