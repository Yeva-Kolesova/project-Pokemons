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
import { changeBalanceValue } from '../../reduxConfig/auth/slice';

const TransactionItem = ({ data, handleModal, setData }) => {
  const dispatch = useDispatch();

  const { id, transactionDate, type, categoryId, comment, amount } = data;

  const categories = useSelector(selectCategories);

  const handleDelete = (transactionId, amount) => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => {
        dispatch(changeBalanceValue(amount));
      });
  };

  function formatNumber(number) {
    return Math.abs(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }

  const formatDate = dateString => {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  };

  function handleEditClick() {
    setData(data);
    handleModal(true);
  }

  return (
    <>
      <ListTab>
        <PData>{formatDate(transactionDate)}</PData>
        <PType>{type === 'EXPENSE' ? '-' : '+'}</PType>
        <PCategory>
          {categories?.filter(c => c?.value === categoryId)[0]?.label}
        </PCategory>
        <PComment>{comment}</PComment>
        <PSum
          style={
            type === 'EXPENSE' ? { color: '#FF868D' } : { color: '#FFB627' }
          }
        >
          {formatNumber(Number(amount))}
        </PSum>
        <Actions>
          <ActionsContainer>
            <PencilButton type="button" onClick={handleEditClick}>
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
    </>
  );
};

export default TransactionItem;
