import { useState } from 'react';
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
import { LuPencil } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from 'reduxConfig/transactions/operations';

const TransactionItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, transactionDate, type, categoryId, comment, amount } = data;
  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  const handleDelete = transactionId => {
    dispatch(deleteTransactionThunk(transactionId));
  };

  return (
    <ListTab>
      <PData>{transactionDate}</PData>
      <PType>{type === 'EXPENSE' ? '-' : '+'}</PType>
      <PCategory>{categoryId}</PCategory>
      <PComment>{comment}</PComment>
      <PSum
        style={type === 'EXPENSE' ? { color: '#FF868D' } : { color: '#FFB627' }}
      >
        {Math.abs(amount).toFixed(2)}
      </PSum>
      <Actions>
        <ActionsContainer>
          <PencilButton
            type="button"
            onClick={() => setIsEditTransactionForm(true)}
          >
            <LuPencil color={' white'} />
          </PencilButton>
          {isEditTransactionForm}
          <Button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </ActionsContainer>
      </Actions>
    </ListTab>
  );
};

export default TransactionItem;
