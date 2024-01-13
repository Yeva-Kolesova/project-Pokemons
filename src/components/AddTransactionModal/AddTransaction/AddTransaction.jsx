import { Calendar } from '../Calendar/Calendar';
import { selectCategories } from 'reduxConfig/transactions/selectors';
import {
  ActiveExpense,
  ActiveIncome,
  Backdrop,
  BtnAdd,
  BtnCancel,
  ButtonsWrap,
  CloseModalBtn, Gradient,
  Input,
  Modal,
  NoActive,
  TextareaStyled,
  TransactionToggleWrap,
  WrapSumCalendar,
} from './AddTransaction.styled';
import sprite from '../sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import { InputToggle, LabelToggle, SpanToggle } from './AddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsCategoriesThunk } from '../../../reduxConfig/transactions/operations';
import Select, { components } from 'react-select';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export const AddTransaction = ({ closeModal }) => {
  const [isMinus, setIsMinus] = useState(true);
  const transactionCategories = useSelector(selectCategories);
  // const incomes = transactionCategories.find(el => el.type === 'INCOME');
  // const expenses = transactionCategories.filter(el => el.type !== 'INCOME');
  // const categoryName = expenses.map(el => ({
  //   value: el.id,
  //   label: el.name,
  // }));

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
      fontFamily: '\'Poppins\', sans-serif',
      fontSize: '16px',
      fontWeight: '400',

      '&::before': {
        background: 'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
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

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen
          ? <SlArrowUp size={18} label='Arrow down' color={'var(--white)'} />
          : <SlArrowDown size={18} label='Arrow down' color={'var(--white)'} />}
      </components.DropdownIndicator>
    );
  };

  const dispatch = useDispatch();

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

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <Gradient/>
        <CloseModalBtn type='button' onClick={() => closeModal()}>
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
                type='checkbox'
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
              placeholder='Select a category'
              styles={selectStyle}
              isSearchable={false}
            />
          )}

          <WrapSumCalendar>
            <Input type='number' name='sum' placeholder='0.00' />
            <Calendar />
          </WrapSumCalendar>
          <TextareaStyled placeholder='Comment' />
          <ButtonsWrap>
            <BtnAdd type='submit'>Add</BtnAdd>
            <BtnCancel type='button' onClick={onCancelButton}>
              Cancel
            </BtnCancel>
          </ButtonsWrap>
        </form>
      </Modal>
    </Backdrop>
  );
};
