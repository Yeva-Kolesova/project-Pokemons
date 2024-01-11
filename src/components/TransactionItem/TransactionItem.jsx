import {
  Actions,
  Button,
  ItemCategory,
  ItemComment,
  ItemData,
  ItemSum,
  ItemType,
  ListTab,
} from './TransactionItem.styled';
import { LuPencil } from 'react-icons/lu';

const TransactionItem = ({ data }) => {
  const { transactionDate, type, categoryId, comment, amount } = data;

  return (
    <ListTab>
      <ItemData>{transactionDate}</ItemData>
      <ItemType>{type}</ItemType>
      <ItemCategory>{categoryId}</ItemCategory>
      <ItemComment>{comment}</ItemComment>
      <ItemSum>{amount}</ItemSum>
      <Actions>
        <p>
          <button>
            <LuPencil size={14} />
          </button>
        </p>
        <p>
          <Button>Delete</Button>
        </p>
      </Actions>
    </ListTab>
  );
};

export default TransactionItem;

// /* <TbPencil />  Іконка олівець */
