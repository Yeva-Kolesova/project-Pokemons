import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3.5px);
  background-color: rgba(34, 13, 91, 0.23);
  z-index: 10;
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  height: 100vh;
  padding: 40px 20px;
  background: (#ffffff, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 540px;
    height: 589px;
    padding: 40px 40px;
    border-radius: 8px;
  }

  select {
    margin-bottom: 40px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
    color: rgba(255, 255, 255, 0.6);
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
    }
  }
  select:required {
    color: rgba(255, 255, 255, 0.6);
    padding-left: 8px;
    padding-bottom: 8px;
  }

  h1 {
    margin-bottom: 34px;
    color: #fbfbfb;
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    @media only screen and (min-width: 768px) {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 20px;
    min-width: 100%;
  }
`;

export const CloseModalBtn = styled.button`
  display: none;
  position: absolute;
  fill: #fbfbfb;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 20px;
  top: 20px;
  /* background-color: transparent; */
  border: none;
  outline: transparent;
  /* color: #ffffff; */

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const TransactionToggleWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  outline: none;
  padding: 8px 20px;
  color: #fbfbfb;
  font-size: 18px;
`;

export const BtnAdd = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 280px;
  height: 50px;
  padding: 13px 118px 10px 118px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: #fbfbfb;
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
`;

export const BtnCancel = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 280px;
  height: 50px;
  padding: 13px 115px 13px 115px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  background-color: #fbfbfb;
  color: #623f8b;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
`;

export const ActiveExpense = styled.p`
  color: #ff868d;
  font-size: 16px;
  font-weight: 600;
`;
export const NoActive = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 600;
`;
export const ActiveIncome = styled.p`
  color: #ffb627;
  font-size: 16px;
  font-weight: 600;
`;

export const WrapSumCalendar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
    padding: 8px 20px;
    color: #fbfbfb;
    font-size: 18px;
  }
`;

// toggle

export const LabelToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const InputToggle = styled.input`
  display: none;
  &:checked + ::before {
    transform: translateX(40px);
    background-color: #ff868d;
    content: '-';
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
    content: '+';
    left: -1px;
    top: -1px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background: #ffb627;
    box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
    transition: transform 0.3s ease;
  }
`;
