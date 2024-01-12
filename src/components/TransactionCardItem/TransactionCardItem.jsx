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

const TransactionCardItem = ({ data }) => {
  return (
    <Card>
      <CardLine>
        <CardLineTitle>Date</CardLineTitle>
        <CardLineP>04.01.23</CardLineP>
      </CardLine>
      <CardLine>
        <CardLineTitle>Type</CardLineTitle>
        <CardLineP>-</CardLineP>
      </CardLine>
      <CardLine>
        <CardLineTitle>Category</CardLineTitle>
        <CardLineP>Other</CardLineP>
      </CardLine>
      <CardLine>
        <CardLineTitle>Comment</CardLineTitle>
        <CardLineP>Gift for your wife</CardLineP>
      </CardLine>
      <CardLine>
        <CardLineTitle>Sum</CardLineTitle>
        <CardLinePSum>300.00</CardLinePSum>
      </CardLine>
      <CardLine>
        <CardLineButtonDelete>Delete</CardLineButtonDelete>
        <CardLineButtonEdit>
          <LuPencil color={'rgba(255, 255, 255, 0.6)'} />
          <CardLinePEdit> Edit</CardLinePEdit>
        </CardLineButtonEdit>
      </CardLine>
    </Card>
  );
};

export default TransactionCardItem;

// /* <TbPencil />  Іконка олівець */
