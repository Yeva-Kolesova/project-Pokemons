import { useEffect, useState } from 'react';
import {
  Actions,
  ActionsContainer,
  Button,
  HoverablePencil,
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

const TransactionItem = ({ data }) => {
  const dispatch = useDispatch();

  const { id, transactionDate, type, categoryId, comment, amount } = data;

  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  const categories = useSelector(selectCategories);

  const handleDelete = transactionId => {
    dispatch(deleteTransactionThunk(transactionId));
  };

  return (
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
            type="button"
            onClick={() => setIsEditTransactionForm(true)}
          >
            <LuPencil />
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
