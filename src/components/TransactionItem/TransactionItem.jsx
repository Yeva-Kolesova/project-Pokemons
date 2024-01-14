import React, { useState } from 'react';
import {
  Actions,
  ActionsContainer,
  Button,
  ListTab,
  PCategory,
  PComment,
  PData,
  PSum,
  PType,
  PencilButton,
} from './TransactionItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'reduxConfig/transactions/operations';
import { selectCategories } from 'reduxConfig/transactions/selectors';
import { LuPencil } from 'react-icons/lu';
import { reduceBalanceValue } from '../../reduxConfig/auth/slice';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import { EditTransactionForm } from '../EditTransactionForm/EditTransactionForm';

const TransactionItem = ({ data }) => {
  const dispatch = useDispatch();

  const { id, transactionDate, type, categoryId, comment, amount } = data;

  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  const categories = useSelector(selectCategories);

  const handleDelete = (transactionId, amount) => {
    dispatch(deleteTransactionThunk(transactionId)).unwrap()
      .then(() => {
        dispatch(reduceBalanceValue(amount));
      });
  };

  return (
    <>
      <ListTab>
        <PData>{transactionDate}</PData>
        <PType>{type === 'EXPENSE' ? '-' : '+'}</PType>
        <PCategory>
          {categories?.filter(c => c?.value === categoryId)[0]?.label}
        </PCategory>
        <PComment>{comment}</PComment>
        <PSum
          style={type === 'EXPENSE' ? { color: '#FF868D' } : { color: '#FFB627' }}
        >
          {Math.abs(amount).toFixed(2)}
        </PSum>
        <Actions>
          <ActionsContainer>
            <PencilButton
              type='button'
              onClick={() => setIsEditTransactionForm(true)}
            >
              <LuPencil />
            </PencilButton>
            <Button
              onClick={() => {
                handleDelete(id, amount);
              }}
            >
              Delete
            </Button>
          </ActionsContainer>
        </Actions>
      </ListTab>
      {isEditTransactionForm && (
        <ModalEditTransaction closeModal={setIsEditTransactionForm}>
          <EditTransactionForm transaction={data} closeModal={setIsEditTransactionForm}/>
        </ModalEditTransaction>
      )}
    </>
  );
};

export default TransactionItem;
