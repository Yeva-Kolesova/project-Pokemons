import styled from 'styled-components';
import minusIcon from '../../../images/minus.svg';
import plusIcon from '../../../images/plus.svg';
import { GrClose } from 'react-icons/gr';

export const Backdrop = styled.div`
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 10;

  &::before {
    background-color: rgba(34, 13, 91, 0.23);
    content: '';
    backdrop-filter: blur(3.5px);
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  padding: 40px 20px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  height: 100%;

  @media only screen and (min-width: 768px) {
    position: absolute;
    min-width: 540px;
    height: 589px;
    padding: 40px 73px;
    border-radius: 8px;
    height: fit-content;
  }
  &::before {
    background-color: rgba(255, 255, 255, 0.1);
    content: '';
    backdrop-filter: blur(50px);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export const Gradient = styled.div`
  z-index: -20;
  position: absolute;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  inset: 0;
`;

export const Title = styled.h1`
  margin-bottom: 34px;
  color: #fbfbfb;
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 42px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  padding-left: 20px;
  padding-bottom: 8px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  outline: none;
  margin-bottom: 40px;
  background: transparent;
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const ButtonsWrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const CommentInputStyled = styled.input`
  padding-left: 20px;
  padding-bottom: 52px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: #fbfbfb;
  outline: transparent;
  width: 280px;
  &::placeholder {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 400;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 8px;
    padding-bottom: 8px;
    width: 394px;
  }
`;

export const WrapSumCalendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    align-items: baseline;
    margin-top: 0px;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
    padding-left: 20px;
    padding-bottom: 8px;
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 600;
    width: 280px;
    margin: 0;
    @media only screen and (min-width: 768px) {
      width: 181px;
      outline: transparent;
      padding-left: 73px;
    }
  }

  input::placeholder {
    color: rgba(255, 255, 255, 1);
    text-align: start;
    font-size: 18px;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
    }
  }
`;

export const DateWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;

  input {
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
    width: 280px;
    padding-left: 20px;

    @media only screen and (min-width: 768px) {
      width: 181px;
    }
  }
`;

//==============BTNS

export const CloseBtn = styled(GrClose)`
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  color: #fbfbfb;
`;

export const BtnAdd = styled.button`
  width: 280px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 13px 10px;
  font-size: 18px;
  color: #fbfbfb;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const BtnCancel = styled.button`
  width: 280px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 13px 10px;
  font-size: 18px;
  color: #623f8b;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  background-color: #fbfbfb;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const CloseModalBtn = styled.button`
  display: none;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  outline: transparent;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// ===========TOGGLE
export const TransactionToggleWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const LabelToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const InputToggle = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ::before {
    transform: translateX(40px);
    background-color: #ff868d;
    box-shadow: 0 6px 15px 0 rgba(255, 134, 141, 0.5);
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    background-image: url(${minusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SpanToggle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #fff;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: -2px;
    top: -2px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background: #ffb627;
    box-shadow: 0 6px 15px 0 rgba(255, 199, 39, 0.5);
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const Expense = styled.p`
  color: ${({ $active }) => ($active ? '#ff868d' : '#FFFFFF99')};
  font-size: 16px;
  font-weight: 600;
`;

export const Income = styled.p`
  color: ${({ $active }) => ($active ? '#ffb627' : '#FFFFFF99')};
  font-size: 16px;
  font-weight: 600;
`;

// ==========ERROR
export const InputErrorWrap = styled.div`
  position: relative;
  height: 47px;
`;

export const ErrorMessage = styled.p`
  color: rgb(255, 134, 141);
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;

  @media only screen and (min-width: 768px) {
    padding-left: 0px;
    text-align: center;
  }
`;
