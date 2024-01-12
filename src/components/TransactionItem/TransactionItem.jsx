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
  Pencil,
} from './TransactionItem.styled';
import { LuPencil } from 'react-icons/lu';

const TransactionItem = ({ data }) => {
  const { transactionDate, type, categoryId, comment, amount } = data;

  return (
    <ListTab>
      <PData>{transactionDate}</PData>
      <PType>{type}</PType>
      <PCategory>{categoryId}</PCategory>
      <PComment>{comment}</PComment>
      <PSum>{amount}</PSum>
      <Actions>
        <ActionsContainer>
          <Pencil>
            <LuPencil color={' white'} />
          </Pencil>
          <Button>Delete</Button>
        </ActionsContainer>
      </Actions>
    </ListTab>
  );
};

export default TransactionItem;

// /* <TbPencil />  Іконка олівець */
