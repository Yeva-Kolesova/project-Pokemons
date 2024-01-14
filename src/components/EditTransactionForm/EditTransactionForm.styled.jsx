import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 34px;
  color: var(--white);
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
  width: 100%;
`;

export const Input = styled.input`
  padding:0 0 8px;
  width: 280px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  outline: none;
  background: transparent;
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  &::placeholder{
    width: 280px;
    transform: translateX(25%);
    color: #FFFFFF99;
  }

  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const CommentInputStyled = styled.input`
  padding-left: 20px;
  padding-bottom: 52px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: var(--white);
  outline: transparent;
  width: 280px;

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF99;
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

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    outline: transparent;
  }

  input::placeholder {
    color: #FFFFFF99;
    text-align: start;
    font-size: 18px;
    font-weight: 700;
  }
`;

// ==========ERROR==========
export const InputErrorWrap = styled.div`
  height: 45px;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(255, 134, 141);
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;

  @media only screen and (min-width: 768px) {
    padding-left: 12px;
  }
`;


// ===========TYPE==========
export const TypeWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  color: #E0E0E0;
`;

export const Expense = styled.p`
  color: ${({ $active }) => ($active ? '#ff868d' : '#E0E0E0')};
  font-size: 16px;
  font-weight: 600;
`;

export const Income = styled.p`
  color: ${({ $active }) => ($active ? '#ffb627' : '#E0E0E0')};
  font-size: 16px;
  font-weight: 600;
`;
