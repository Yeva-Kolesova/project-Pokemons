import { Calendar } from '../Calendar/Calendar';
import { selectCategories } from 'reduxConfig/transactions/selectors';
// import { addTransactionThunk } from 'reduxConfig/transactions/operations';
import {
  ActiveExpense,
  ActiveIncome,
  Backdrop,
  BtnAdd,
  BtnCancel,
  ButtonsWrap,
  CloseModalBtn,
  Input,
  Modal,
  NoActive,
  TextareaStyled,
  TransactionToggleWrap,
  WrapSumCalendar,
} from './AddTransaction.styled';
import sprite from '../sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { InputToggle, LabelToggle, SpanToggle } from './AddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsСategoriesThunk } from 'reduxConfig/transactions/operations';

export const AddTransaction = ({ closeModal }) => {
  const [isMinus, setIsMinus] = useState(true);
  const transactionCategories = useSelector(selectCategories);
  // const incomes = transactionCategories.find(el => el.type === 'INCOME');
  // const expenses = transactionCategories.filter(el => el.type !== 'INCOME');
  // const categoryName = expenses.map(el => ({
  //   value: el.id,
  //   label: el.name,
  // }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsСategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const onCancelButton = () => {
    closeModal();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseModalBtn type="button" onClick={() => closeModal()}>
          {
            <svg>
              <use xlinkHref={`${sprite}#icon-close`} />
            </svg>
          }
        </CloseModalBtn>
        <h1>Add transaction</h1>
        <form>
          <TransactionToggleWrap>
            {isMinus ? (
              <NoActive>Income</NoActive>
            ) : (
              <ActiveIncome>Income</ActiveIncome>
            )}
            <LabelToggle>
              <InputToggle
                type="checkbox"
                defaultChecked
                onChange={() => setIsMinus(!isMinus)}
              />
              <SpanToggle />
            </LabelToggle>

            {isMinus ? (
              <ActiveExpense>Expense</ActiveExpense>
            ) : (
              <NoActive>Expense</NoActive>
            )}
          </TransactionToggleWrap>

          {isMinus && (
            <select name="transactionType" id="" required>
              <option value="" selected disabled hidden>
                Select a category
              </option>
              {transactionCategories.map(({ name }) => (
                <option>{name}</option>
              ))}
            </select>
          )}

          <WrapSumCalendar>
            <Input type="number" name="sum" placeholder="0.00" />
            <Calendar />
          </WrapSumCalendar>
          <TextareaStyled placeholder="Comment" />
          <ButtonsWrap>
            <BtnAdd type="submit">Add</BtnAdd>
            <BtnCancel type="button" onClick={onCancelButton}>
              Cancel
            </BtnCancel>
          </ButtonsWrap>
        </form>
      </Modal>
    </Backdrop>
  );
};
