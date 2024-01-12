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

const TransactionItem = ({ data }) => {
  const { transactionDate, type, categoryId, comment, amount } = data;

  const [isEditTransactionForm, setIsEditTransactionForm] = useState(false);

  return (
    <ListTab>
      <PData>{transactionDate}</PData>
      <PType>{type}</PType>
      <PCategory>{categoryId}</PCategory>
      <PComment>{comment}</PComment>
      <PSum>{amount}</PSum>
      <Actions>
        <ActionsContainer>
          <PencilButton
            type="button"
            onClick={() => setIsEditTransactionForm(true)}
          >
            <LuPencil color={' white'} />
          </PencilButton>
          {isEditTransactionForm}
          <Button>Delete</Button>
        </ActionsContainer>
      </Actions>
    </ListTab>
  );
};

export default TransactionItem;

// /* <TbPencil />  Іконка олівець */
