import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatedTransactionThunk } from '../../reduxConfig/transactions/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  CalendarIcon,
  DateWrapper,
} from '../AddTransactionModal/AddTransaction/Calendar.styled';
import ReactDatePicker from 'react-datepicker';
import { date } from 'yup';
import { BtnSubmit } from '../ModalEditTransaction/ModalEditTransaction.styled';
import {
  CommentInputStyled,
  ErrorMessage,
  Expense,
  Form,
  Income,
  Input,
  InputErrorWrap,
  Title,
  TypeWrapper,
  WrapSumCalendar,
} from './EditTransactionForm.styled';
import { RxSlash } from 'react-icons/rx';
import { changeBalanceValue } from '../../reduxConfig/auth/slice';

const schema = yup
  .object({
    amount: yup
      .number()
      .typeError('Please, enter the sum')
      .required('Sum is required'),
    date: date().required('Date is required'),
  })
  .required();

export function EditTransactionForm({ closeModal, transaction }) {
  const { id, transactionDate, type, comment, amount } = transaction;
  const [date, setDate] = useState(new Date(transactionDate));
  const dispatch = useDispatch();
  const isExpense = type === 'EXPENSE';

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function getFormattedDate() {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function onSubmit(formData) {
    const transactionData = {};
    transactionData.comment = formData.comment;
    const newValue = Number(formData.amount).toFixed(2);
    transactionData.amount = Number(
      isExpense && newValue > 0 ? -newValue : newValue
    );
    transactionData.transactionDate = getFormattedDate();
    dispatch(updatedTransactionThunk({ id, transactionData }))
      .unwrap()
      .then(() => {
        dispatch(changeBalanceValue(Number(amount) - transactionData.amount));
        toast.success('Transaction successfully edited');
      })
      .catch(() => {
        toast.error('Something went wrong, try again');
      });
    closeModal(false);
  }

  function handleDateChange(dateChange) {
    setValue('date', dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  }

  return (
    <>
      <Title>Edit transaction</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TypeWrapper>
          <Income $active={!isExpense}>Income</Income>
          <RxSlash color={'#E0E0E0'} />
          <Expense $active={isExpense}>Expense</Expense>
        </TypeWrapper>

        <WrapSumCalendar>
          <InputErrorWrap>
            <Input
              type="text"
              name="amount"
              placeholder="0.00"
              {...register('amount')}
              autoComplete="off"
              defaultValue={amount.toFixed(2)}
            />
            {errors.amount && (
              <ErrorMessage>{errors.amount.message}</ErrorMessage>
            )}
          </InputErrorWrap>
          <InputErrorWrap>
            <DateWrapper>
              <Controller
                name="date"
                control={control}
                defaultValue={date}
                render={() => (
                  <ReactDatePicker
                    selected={date}
                    onChange={handleDateChange}
                    dateFormat="dd.MM.yyyy"
                    maxDate={new Date()}
                  />
                )}
              />
              <CalendarIcon />
            </DateWrapper>
            {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
          </InputErrorWrap>
        </WrapSumCalendar>

        <CommentInputStyled
          type="text"
          placeholder="Comment"
          autoComplete="off"
          defaultValue={comment}
          {...register('comment')}
        />
        <BtnSubmit type="submit">Save</BtnSubmit>
      </Form>
    </>
  );
}
