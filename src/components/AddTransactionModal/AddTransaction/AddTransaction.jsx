import { selectCategories } from 'reduxConfig/transactions/selectors';
import { CloseBtn } from './AddTransaction.styled';
import {
  ActiveExpense,
  ActiveIncome,
  Backdrop,
  BtnAdd,
  BtnCancel,
  ButtonsWrap,
  CloseModalBtn,
  Gradient,
  Form,
  Input,
  Modal,
  NoActive,
  TextareaStyled,
  Title,
  TransactionToggleWrap,
  WrapSumCalendar,
} from './AddTransaction.styled';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import { InputToggle, LabelToggle, SpanToggle } from './AddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransactionsCategoriesThunk,
} from '../../../reduxConfig/transactions/operations';
import Select, { components } from 'react-select';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Calendar } from '../Calendar/Calendar';

const validationSchema = yup
  .object({
    amount: yup
      .number()
      .typeError('Transaction value must be a number')
      .min(1, 'Sum value must be at least 1 character')
      .required('Sum is required'),
    date: yup.date().required('Please provide transaction date.'),
    comment: yup
      .string()
      .min(3, 'Comment must be at least 3 characters')
      .max(30)
      .required('Comment is required'),
  })
  .required();

export const AddTransaction = ({ closeModal }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [startDate] = useState(new Date());
  const dispatch = useDispatch();
  const transactionCategories = useSelector(selectCategories);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
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

  const transformDate = function getFormattedDate() {
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
    const hours = String(startDate.getHours()).padStart(2, '0');
    const minutes = String(startDate.getMinutes()).padStart(2, '0');
    const seconds = String(startDate.getSeconds()).padStart(2, '0');
    const transformedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return transformedDate;
  };

  const submit = e => {
    const transaction = {
      transactionDate: transformDate(startDate),
    };
    dispatch(addTransactionThunk(transaction))
      .unwrap()
      .then(() => {
        console.log('Transaction added');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const selectStyle = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      marginBottom: '-2px',
      marginTop: '40px',
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      outline: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      },
    }),
    singleValue: styles => ({
      ...styles,
      color: '#FBFBFB',
      fontSize: '18px',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '18px',
    }),
    menu: styles => ({
      ...styles,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      overflow: 'hidden',
      color: '#FBFBFB',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '16px',
      fontWeight: '400',

      '&::before': {
        background:
          'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
        content: '""',
        filter: 'blur(50px)',
        position: 'absolute',
        inset: '0%',
        zIndex: '-1',
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      if (isFocused) {
        return {
          ...styles,
          background: '#FFFFFF1A',
          color: '#FF868D',
        };
      } else if (isSelected) {
        return {
          ...styles,
          background: 'transparent',
        };
      } else {
        return {
          ...styles,
        };
      }
    },
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <SlArrowUp size={18} label="Arrow down" color={'var(--white)'} />
        ) : (
          <SlArrowDown size={18} label="Arrow down" color={'var(--white)'} />
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <Gradient />
        <CloseModalBtn type="button" onClick={() => closeModal()}>
          <CloseBtn />
        </CloseModalBtn>
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit(submit)}>
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
            <Select
              required
              options={transactionCategories}
              components={{ DropdownIndicator, IndicatorSeparator: () => null }}
              placeholder="Select a category"
              styles={selectStyle}
              isSearchable={false}
              // name="category"
              // {...register('value')}
            />
          )}

          <WrapSumCalendar>
            <Input
              type="number"
              name="amount"
              placeholder="0.00"
              {...register('amount')}
            />
            <Calendar
            // {...register('date')}
            />
          </WrapSumCalendar>

          <TextareaStyled placeholder="Comment" {...register('comment')} />

          <ButtonsWrap>
            <BtnAdd type="submit">Add</BtnAdd>
            <BtnCancel type="button" onClick={onCancelButton}>
              Cancel
            </BtnCancel>
          </ButtonsWrap>
        </Form>
      </Modal>
    </Backdrop>
  );
};
